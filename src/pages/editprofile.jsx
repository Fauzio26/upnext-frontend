import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";

const EditProfile = () => {
  const [form, setForm] = useState({ name: "", profilePic: null, bannerPic: null });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`${import.meta.env.VITE_API_URL}/organizations/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.name) {
          setForm((prev) => ({ ...prev, name: data.name }));
        }
      })
      .catch((err) => console.error("❌ Gagal memuat profil:", err));
  }, []);

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("name", form.name);
    if (form.profilePic) formData.append("profilePic", form.profilePic);
    if (form.bannerPic) formData.append("bannerPic", form.bannerPic);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/organizations/me`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Gagal memperbarui profil.");
      }

      alert("Profil berhasil diperbarui");
      navigate("/profile");
    } catch (error) {
      console.error("❌ Error updating profile:", error);
      alert(error.message || "Terjadi kesalahan saat mengupdate profil.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center bg-gradient-to-b from-blue-200 to-blue-500 min-h-screen py-12">
        <div className="max-w-2xl w-full bg-white shadow-md rounded-xl p-6">
          <h1 className="text-2xl font-bold mb-6 text-blue-900">Edit Profil</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium text-gray-700">Nama</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Foto Profil</label>
              <input type="file" name="profilePic" onChange={handleChange} />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Banner</label>
              <input type="file" name="bannerPic" onChange={handleChange} />
            </div>
            <div className="text-right">
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition">
                Simpan Perubahan
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
