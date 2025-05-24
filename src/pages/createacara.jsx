// CreateAcara.jsx
import React, { useState } from "react";
import Input from "../components/input";
import Button from "../components/button";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

const CreateAcara = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [banners, setBanners] = useState([]);
  const [documents, setDocuments] = useState([]);
  const navigate = useNavigate();

  const handleFileChange = (e, setter) => {
    setter([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !location || !date || !time) {
      alert("Semua field wajib diisi.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("location", location);
    formData.append("date", date);
    formData.append("time", time);

    banners.forEach((file) => formData.append("banners", file));
    documents.forEach((file) => formData.append("documents", file));

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/events", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      });

      if (response.ok) {
        alert("Event berhasil dibuat!");
        navigate("/event");
      } else {
        const errorData = await response.json();
        alert(`Gagal membuat event: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
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
          <Input placeholder="Judul Acara" value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea
            placeholder="Deskripsi"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
            rows="4"
          />
          <Input placeholder="Lokasi" value={location} onChange={(e) => setLocation(e.target.value)} />
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          <Input type="time" value={time} onChange={(e) => setTime(e.target.value)} />

          <label className="block mt-4 mb-1 text-sm font-medium">Upload Banner (Max 5):</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => handleFileChange(e, setBanners)}
            className="mb-4"
          />

          <label className="block mt-4 mb-1 text-sm font-medium">Upload Dokumen (Max 5):</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            multiple
            onChange={(e) => handleFileChange(e, setDocuments)}
            className="mb-6"
          />
           <Button type="submit" label="Simpan" />
        </form>
      </div>
    </div>
  );
};

export default CreateAcara;
