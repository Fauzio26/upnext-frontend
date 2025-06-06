import React, { useState } from "react";
import Input from "../components/input";
import Button from "../components/button";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

const CreateAcara = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [registLink, setRegistLink] = useState("");
  const [banner, setBanner] = useState(null);
  const [bannerPreview, setBannerPreview] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [eventPhotos, setEventPhotos] = useState([]);

  const navigate = useNavigate();

  const handleFileChange = (e, setter, single = false, type = "") => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    if (single) {
      setter(files[0]);
      if (type === "banner") {
        setBannerPreview(URL.createObjectURL(files[0]));
      }
    } else {
      setter(files);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !date || !endDate || !registLink) {
      alert("Semua field wajib diisi.");
      return;
    }

    const startDateTime = new Date(`${date}T00:00:00`);
    const endDateTime = new Date(`${endDate}T23:59:59`);

    if (endDateTime < startDateTime) {
      alert("Tanggal berakhir harus setelah tanggal mulai.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("startDate", startDateTime.toISOString());
    formData.append("endDate", endDateTime.toISOString());
    formData.append("registLink", registLink);

    if (banner) formData.append("banner", banner);
    documents.forEach((file) => formData.append("documents", file));
    eventPhotos.forEach((file) => formData.append("photos", file));

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Token tidak ditemukan. Silakan login ulang.");
        return;
      }

      const response = await fetch(`${import.meta.env.VITE_API_URL}/events`, {
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
          alert(
            `Gagal membuat event: ${
              errorData.message || "Terjadi kesalahan."
            }`
          );
        } catch {
          console.error("Unexpected response:", text);
          alert(
            "Gagal membuat event: Server mengembalikan respon yang tidak terduga."
          );
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
            <label className="block text-base font-medium">Deskripsi Acara</label>
            <textarea
              placeholder="Deskripsi"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              rows="4"
              required
            />
          </div>

          <Input
            title={"Tanggal Mulai"}
            label={"Tanggal Mulai"}
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <Input
            title={"Tanggal Berakhir"}
            label={"Tanggal Berakhir"}
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />

          <Input
            title={"Link Pendaftaran"}
            label={"Masukkan link pendaftaran"}
            placeholder="Link Pendaftaran"
            value={registLink}
            onChange={(e) => setRegistLink(e.target.value)}
          />

          {/* Banner */}
          <label className="block text-base font-medium">
            Upload Banner (1 Gambar)
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, setBanner, true, "banner")}
          />
          {bannerPreview && (
            <div className="mt-2">
              <img
                src={bannerPreview}
                alt="Preview Banner"
                className="w-48 h-auto rounded shadow-md"
              />
            </div>
          )}

          {/* Dokumen */}
          <label className="block text-base font-medium">
            Upload Dokumen (.pdf, .doc, .docx)
          </label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            multiple
            onChange={(e) => handleFileChange(e, setDocuments)}
          />

          {/* Foto Dokumentasi */}
          <label className="block text-base font-medium">
            Upload Foto Acara (banyak gambar)
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => handleFileChange(e, setEventPhotos)}
          />

          <Button type="submit" label="Simpan" />
        </form>
      </div>
    </div>
  );
};

export default CreateAcara;
