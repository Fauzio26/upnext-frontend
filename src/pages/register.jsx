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
  formData.append("membershipProof", fileInput); // ✅ match with backend
 // sesuaikan nama field jika backend butuh

    try {
      const res = await fetch(`https://upnextapi.vercel.app/auth/signup`, {
        method: "POST",
        body: formData
      });

      const result = await res.json();

      if (res.ok) {
  // ✅ Simpan token ke localStorage
  localStorage.setItem("token", result.data.token);
  localStorage.setItem("isLoggedIn", "true");
  navigate("/landing");
}
 else {
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
            Jelajahi berbagai event yang ada di UPNVJ
          </h1>
          <img src={ImgContent} alt="logo content" width={"50%"} />
        </div>
        <div className="flex-1 flex bg-white justify-center items-center flex-col">
          <form 
            className="flex flex-col items-center w-4/5 md:w-3/5 gap-4 p-6"
            onSubmit={ handleRegister}
          >
            <div className="flex flex-col items-center gap-1">
              <h1 className="font-bold text-[#567CBD] text-2xl">REGISTER</h1>
              <p className="text-lg text-center">Selamat Datang di aplikasi UpNext</p>
            </div>
            <Input
              title={"Nama"}
              type="text"
              label={"Masukkan nama"}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              title={"Email"}
              type="email"
              label={"Masukkan email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              title={"Password"}
              type="password"
              label={"Masukkan password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Input
              title={"Konfirmasi Password"}
              type="password"
              label={"Konfirmasi password"}
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              required
            />
            <FileInput
              title={"File Bukti Organisasi"}
              onChange={(file) => setFileInput(file)}
            />
            <Button
              label={"Daftar"}
              type="submit"
              disabled={!name || !email || !password || !passwordConfirm || !fileInput}
            />
            <div className="flex flex-row gap-1">
              <p>Sudah punya akun?</p>
              <Link to="/login" className="font-bold text-[#567CBD]">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
