import React, { useState } from "react";
import Input from "../components/input";
import Button from "../components/button";
import UpNextLogo from "../assets/logo-upnext.svg";
import ImgContent from "../assets/image-content.svg";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Semua field wajib diisi.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("token", data.token); // Simpan token
        navigate("/landing");
      } else {
        alert(data.message || "Login gagal.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Terjadi kesalahan saat login.");
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
          <form className="w-3/4 max-w-md flex flex-col gap-4" onSubmit={handleLogin}>
            <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
             <Button type="submit" label="Masuk" />
            <p className="text-center text-sm">
              Belum punya akun? <Link to="/register" className="text-blue-500">Daftar</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
