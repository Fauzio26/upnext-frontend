import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";

const EditProfile = () => {
  const [form, setForm] = useState({ name: "", profilePic: null, bannerPic: null });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:5000/api/organizations/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setForm({ ...form, name: data.name }))
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setForm({ ...form, [e.target.name]: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("name", form.name);
    if (form.profilePic) formData.append("profilePic", form.profilePic);
    if (form.bannerPic) formData.append("bannerPic", form.bannerPic);

    try {
      const res = await fetch("http://localhost:5000/api/organizations/me", {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      if (!res.ok) throw new Error("Failed to update");
      alert("Profil berhasil diperbarui");
      navigate("/profile");
    } catch (error) {
      alert("Terjadi kesalahan saat mengupdate profil.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto mt-20 p-6 bg-white shadow-md rounded-xl">
        <h1 className="text-2xl font-bold mb-6">Edit Profil</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Nama</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block font-medium">Foto Profil</label>
            <input type="file" name="profilePic" onChange={handleChange} />
          </div>
          <div>
            <label className="block font-medium">Banner</label>
            <input type="file" name="bannerPic" onChange={handleChange} />
          </div>
          <div className="text-right">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition">
              Simpan Perubahan
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProfile;
