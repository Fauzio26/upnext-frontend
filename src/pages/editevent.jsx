import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import Input from '../components/input';
import Button from '../components/button';

function EditEvent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [judul, setJudul] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [linkRegistrasi, setLinkRegistrasi] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [banner, setBanner] = useState([]);
  const [bannerPreview, setBannerPreview] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [docNames, setDocNames] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [photoPreview, setPhotoPreview] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch(`${import.meta.env.VITE_API_URL}/events/${id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(async res => {
        if (!res.ok) {
          const text = await res.text();
          throw new Error(`Fetch error ${res.status}: ${text}`);
        }
        return res.json();
      })
      .then(data => {
        setJudul(data.title || '');
        setDeskripsi(data.description || '');
        setLinkRegistrasi(data.registrationLink || '');

        if (data.startDate) setStartDate(data.startDate.slice(0, 10));
        if (data.endDate) setEndDate(data.endDate.slice(0, 10));

        if (data.banner) {
          const fullUrls = data.banner.map(b => `${import.meta.env.VITE_API_URL}${b.url}`);
          setBannerPreview(fullUrls);
        }

        if (data.documents) setDocNames(data.documents.map(doc => doc.originalName || doc.url));
        if (data.eventPhoto) {
          const photoUrls = data.eventPhoto.map(p => `${import.meta.env.VITE_API_URL}${p.url}`);
          setPhotoPreview(photoUrls);
        }
      })
      .catch(err => console.error('Error fetching event:', err));
  }, [id]);

  const handleBannerChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 5) {
      alert('Maksimal 5 banner!');
      files.splice(5);
    }
    setBanner(files);
    const previews = files.map(file => URL.createObjectURL(file));
    setBannerPreview(previews);
  };

  const handleDocsChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 5) {
      alert('Maksimal 5 dokumen!');
      files.splice(5);
    }
    setDocuments(files);
    const names = files.map(file => file.name);
    setDocNames(names);
  };

  const handlePhotosChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 5) {
      alert('Maksimal 5 foto acara!');
      files.splice(5);
    }
    setPhotos(files);
    const previews = files.map(file => URL.createObjectURL(file));
    setPhotoPreview(previews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (!startDate || !endDate) {
      alert('Tanggal mulai dan berakhir harus diisi');
      return;
    }

    const formData = new FormData();
    formData.append('title', judul);
    formData.append('description', deskripsi);
    formData.append('registrationLink', linkRegistrasi);
    formData.append('startDate', new Date(`${startDate}T00:00:00`).toISOString());
    formData.append('endDate', new Date(`${endDate}T23:59:59`).toISOString());

    banner.forEach(file => formData.append('banner', file));
    documents.forEach(file => formData.append('documents', file));
    photos.forEach(file => formData.append('photos', file));

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/events/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        alert('Event berhasil diperbarui');
        navigate('/myevents');
      } else {
        alert(result.message || 'Gagal menyimpan perubahan');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan saat menyimpan editan');
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 mt-16">
        <h1 className="text-2xl font-bold mb-4">Edit Event</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input label="Judul Acara" type="text" value={judul} onChange={(e) => setJudul(e.target.value)} />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
            <textarea className="border rounded-md w-full p-2" rows="4" value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)} />
          </div>
          <Input label="Link Registrasi" type="text" value={linkRegistrasi} onChange={(e) => setLinkRegistrasi(e.target.value)} />

          <Input label="Tanggal Mulai" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          <Input label="Tanggal Berakhir" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />

          {/* Banner */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Upload Banner (max 1)</label>
            <input type="file" accept="image/*" multiple onChange={handleBannerChange} />
            {bannerPreview.length > 0 && (
              <div className="flex gap-2 mt-2 flex-wrap">
                {bannerPreview.map((src, index) => (
                  <img key={index} src={src} alt={`Banner ${index}`} className="w-24 h-24 object-cover rounded" />
                ))}
              </div>
            )}
          </div>

          {/* Dokumen */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Upload Dokumen (max 5)</label>
            <input type="file" multiple onChange={handleDocsChange} />
            <div className="mt-2">
              {docNames.map((name, index) => (
                <p key={index} className="text-sm text-gray-600">{name}</p>
              ))}
            </div>
          </div>

          {/* Foto Acara */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Upload Foto Acara (max 5)</label>
            <input type="file" multiple accept="image/*" onChange={handlePhotosChange} />
            {photoPreview.length > 0 && (
              <div className="flex gap-2 mt-2 flex-wrap">
                {photoPreview.map((src, index) => (
                  <img key={index} src={src} alt={`Foto ${index}`} className="w-24 h-24 object-cover rounded" />
                ))}
              </div>
            )}
          </div>

          <Button type="submit" label="Simpan Editan" />
        </form>
      </div>
    </>
  );
}

export default EditEvent;
