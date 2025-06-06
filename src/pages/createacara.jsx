import React, { useState } from "react";
import Input from "../components/input";
import Button from "../components/button";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import FileInput from "../components/input-file";

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
      <div className="flex flex-1 items-center justify-center bg-gradient-to-b from-[#6a8bcb] to-[#dbe7f4] py-16 px-5 ">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg flex flex-col gap-6"
          encType="multipart/form-data"
        >
          <h2 className="text-2xl font-bold text-center text-blue-800">
            Buat Acara Baru
          </h2>

          <Input
            title={"Judul Acara"}
            label={"Masukkan judul acara"}
            placeholder="Judul Acara"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <div className="flex flex-col gap-2">
            <label className="block text-base font-medium">
              Upload Foto Acara (banyak gambar)
            </label>
            <textarea
              placeholder="Deskripsi"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 text-base border-2 border-gray-400 rounded-md outline-none transition-all duration-300 focus:border-[#567CBD]"
              rows="4"
              required
            />
          </div>

          <Input
            title={"Tanggal Acara"}
            label={"Tanggal Acara"}
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <Input
            title={"Waktu Acara"}
            label={"Waktu Acara"}
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <Input
            title={"Link Pendaftaran"}
            label={"Masukkan link pendaftaran"}
            placeholder="Link Pendaftaran"
            value={registLink}
            onChange={(e) => setRegistLink(e.target.value)}
          />

          {/* Banner */}
          <FileInput 
            title="Upload Banner (1 Gambar)"
            onChange={(e) => handleFileChange(e, setBanner, true)}
            accept={"image/*"}
            multiple
          />

          {/* Dokumen */}
          <FileInput
            title="Upload Dokumen (.pdf, .doc, .docx)"
            onChange={(e) => handleFileChange(e, setDocuments)}
            accept={".pdf,.doc,.docx"}
            multiple
          />

          {/* Foto Acara */}
          <FileInput 
            title={"Upload Foto Acara (banyak gambar)"}
            onChange={(e) => handleFileChange(e, setDocuments)}
            accept={"image/*"}
            multiple
          />
          <Button type="submit" label="Simpan" />
        </form>
      </div>
    </div>
  );
};

export default CreateAcara;
