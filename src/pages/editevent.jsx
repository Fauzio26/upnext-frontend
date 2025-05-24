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
  const [lokasi, setLokasi] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [waktu, setWaktu] = useState('');
  const [banners, setBanners] = useState([]);
  const [bannerPreviews, setBannerPreviews] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [docNames, setDocNames] = useState([]);

    useEffect(() => {
  const token = localStorage.getItem('token');
  fetch(`http://localhost:5000/api/events/${id}`, {
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
      setLokasi(data.location || '');
      setTanggal(data.date || '');
      setWaktu(data.time || '');

      // Pastikan gambar banner muncul dengan benar
      if (data.banners) {
        const fullUrls = data.banners.map(b => `http://localhost:5000${b.url}`);
        setBannerPreviews(fullUrls); // Update preview gambar
      }

      if (data.documents) setDocNames(data.documents);
    })
    .catch(err => console.error('Error fetching event:', err));
}, [id]);



  const handleBannerChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 5) {
      alert('Maksimal 5 banner!');
      files.splice(5);
    }
    setBanners(files);
    // Generate preview URLs untuk gambar
    const previews = files.map(file => URL.createObjectURL(file));
    setBannerPreviews(previews);
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

const handleSubmit = async (e) => {
  e.preventDefault();
  const token = localStorage.getItem('token');
  const formData = new FormData();
  formData.append('title', judul);
  formData.append('description', deskripsi);
  formData.append('location', lokasi);
  formData.append('date', tanggal); 
  formData.append('time', waktu);


  // Upload hanya jika ada file baru
  banners.forEach(file => {
    formData.append('banners', file);
  });

  documents.forEach(file => {
    formData.append('documents', file);
  });

  try {
    const response = await fetch(`http://localhost:5000/api/events/${id}`, {
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
          <Input
            label="Judul Acara"
            type="text"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            placeholder="Masukkan judul acara"
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
            <textarea
              className="border rounded-md w-full p-2 focus:outline-none focus:ring focus:border-blue-300"
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
              placeholder="Masukkan deskripsi acara"
              rows="4"
            ></textarea>
          </div>
          <Input
            label="Lokasi"
            type="text"
            value={lokasi}
            onChange={(e) => setLokasi(e.target.value)}
            placeholder="Masukkan lokasi acara"
          />
          <Input
            label="Tanggal"
            type="date"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
          />
          <Input
            label="Waktu"
            type="time"
            value={waktu}
            onChange={(e) => setWaktu(e.target.value)}
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Banner (max 5)
            </label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleBannerChange}
              className="mt-1 block w-full"
            />
            <div className="flex flex-wrap gap-2 mt-2">
              {bannerPreviews.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`banner preview ${index}`}
                  className="w-24 h-24 object-cover rounded"
                />
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Dokumen (max 5)
            </label>
            <input
              type="file"
              multiple
              onChange={handleDocsChange}
              className="mt-1 block w-full"
            />
            <div className="mt-2">
              {docNames.map((name, index) => (
                <p key={index} className="text-sm text-gray-600">{name}</p>
              ))}
            </div>
          </div>
          <Button type="submit" label="Simpan Editan"/>
        </form>
      </div>
    </>
  );
}

export default EditEvent;
