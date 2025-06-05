import React, { useState } from "react";
import Input from "../components/input";
import Button from "../components/button";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

const CreateAcara = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [registLink, setRegistLink] = useState("");
  const [banner, setBanner] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [eventPhotos, setEventPhotos] = useState([]);

  const navigate = useNavigate();

  const handleFileChange = (e, setter, single = false) => {
    if (!e.target.files) return;
    setter(single ? e.target.files[0] : Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!title || !description || !date || !time || !registLink) {
    alert("Semua field wajib diisi.");
    return;
  }

  const startDateTime = new Date(`${date}T${time}`);
  const endDateTime = new Date(startDateTime.getTime() + 2 * 60 * 60 * 1000); // +2 jam

  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("startDate", startDateTime.toISOString());
  formData.append("endDate", endDateTime.toISOString());
  formData.append("registLink", registLink);

  if (banner) formData.append("banner", banner);
documents.forEach((file) => formData.append("documents", file));
eventPhotos.forEach((file) => formData.append("photos", file));


  for (const pair of formData.entries()) {
    console.log(pair[0]+ ': ' + (pair[1] instanceof File ? pair[1].name : pair[1]));
  }

  try {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Token tidak ditemukan. Silakan login ulang.");
      return;
    }

    const response = await fetch(`https://upnextapi.vercel.app/events`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (response.ok) {
      alert("Event berhasil dibuat!");
      navigate("/event");
    } else {
      const text = await response.text();
      try {
        const errorData = JSON.parse(text);
        alert(`Gagal membuat event: ${errorData.message || "Terjadi kesalahan."}`);
      } catch {
        console.error("Unexpected response:", text);
        alert("Gagal membuat event: Server mengembalikan respon yang tidak terduga.");
      }
    }
  } catch (err) {
    console.error("Error:", err);
    alert("Terjadi kesalahan saat menghubungi server.");
  }
};


  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1 items-center justify-center bg-gradient-to-b from-[#6a8bcb] to-[#dbe7f4] py-16 px-5">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg"
          encType="multipart/form-data"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">
            Buat Acara Baru
          </h2>

          <Input
            label={"Judul Acara"}
            placeholder="Judul Acara"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Deskripsi"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
            rows="4"
            required
          />

          <Input
            label={"Tanggal Acara"}
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <Input
            label={"Waktu Acara"}
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <Input
            label={"Link Pendaftaran"}
            placeholder="Link Pendaftaran"
            value={registLink}
            onChange={(e) => setRegistLink(e.target.value)}
          />

          {/* Banner */}
          <label className="block mt-4 mb-1 text-sm font-medium">
            Upload Banner (1 Gambar)
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, setBanner, true)}
            className="mb-4"
          />

          {/* Dokumen */}
          <label className="block mt-4 mb-1 text-sm font-medium">
            Upload Dokumen (.pdf, .doc, .docx)
          </label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            multiple
            onChange={(e) => handleFileChange(e, setDocuments)}
            className="mb-4"
          />

          {/* Foto Acara */}
          <label className="block mt-4 mb-1 text-sm font-medium">
            Upload Foto Acara (banyak gambar)
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => handleFileChange(e, setEventPhotos)}
            className="mb-6"
          />

          <Button type="submit" label="Simpan" />
        </form>
      </div>
    </div>
  );
};

export default CreateAcara;
