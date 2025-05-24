import React, { useState } from "react";
import Input from '../components/input';
import Button from '../components/button';
import UpNextLogo from '../assets/logo-upnext.svg';
import ImgContent from '../assets/image-content.svg';
import FileInput from '../components/input-file';
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [fileInput, setFileInput] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!email || !password || !name) {
      alert("Semua field wajib diisi.");
      return;
    }
    if (password !== passwordConfirm) {
      alert("Konfirmasi password tidak cocok.");
      return;
    }

    console.log("User registered:", { name, email });

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("file", fileInput); // sesuaikan nama field jika backend butuh

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        body: formData
      });

      const result = await res.json();

      if (res.ok) {
        localStorage.setItem("isLoggedIn", "true");
        navigate("/landing");
      } else {
        alert(result.message || "Gagal mendaftar");
      }
    } catch (err) {
      console.error("Register error:", err);
      alert("Terjadi kesalahan saat mendaftar.");
    }
  };

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex min-h-screen">
        <div className="w-full flex-1 hidden md:flex flex-col gap-6 justify-center items-center bg-[#567CBD]">
          <img src={UpNextLogo} alt="logo" width={"40%"} />
          <h1 className="text-white w-3/4 text-center font-bold text-3xl">
            Jelajahi dan temukan event terbaik di kotamu!
          </h1>
          <img src={ImgContent} alt="illustration" />
        </div>
        <div className="w-full flex-1 flex items-center justify-center">
          <form className="w-3/4 max-w-md flex flex-col gap-4" onSubmit={handleRegister}>
            <Input placeholder="Nama" value={name} onChange={(e) => setName(e.target.value)} />
            <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Input type="password" placeholder="Konfirmasi Password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
           <FileInput onChange={(file) => setFileInput(file)} />
            <Button type="submit" label="Daftar" />
            <p className="text-center text-sm">
              Sudah punya akun? <Link to="/login" className="text-blue-500">Masuk</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
