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
      const res = await fetch(`https://upnextapi.vercel.app/auth/signin`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

     if (res.ok) {
  localStorage.setItem("token", data.data.token); // ✅ Simpan token
  localStorage.setItem("isLoggedIn", "true");
  navigate("/landing");
}
else {
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
        <div className="hidden flex-1 md:flex flex-col gap-6 justify-center items-center bg-[#567CBD]">
          <img src={UpNextLogo} alt="logo" width={"40%"} />
          <h1 className="text-white w-3/4 text-center font-bold text-3xl">
            Jelajahi berbagai event yang ada di UPNVJ
          </h1>
          <img src={ImgContent} alt="logo content" width={"50%"} />
        </div>
        <div className="flex-1 flex bg-white justify-center items-center flex-col">
          <form
            onSubmit={handleLogin} 
            className="flex flex-col items-center w-4/5 md:w-3/5 gap-4 p-6"
          >
            <div className="flex flex-col items-center gap-1">
              <h1 className="font-bold text-[#567CBD] text-2xl">LOGIN</h1>
              <p className="text-lg text-center">Selamat Datang di aplikasi UpNext</p>
            </div>
            <Input
              title={"Email"}
              type="email"
              label={"Masukkan email"}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Input
              title={"Password"}
              type="password"
              label={"Masukkan password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button label={"Masuk"} type="submit" disabled={!email || !password} />
            <div className="flex flex-row gap-1">
              <p>Belum punya akun? </p>
              <Link to="/register" className="font-bold text-[#567CBD]">Register</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
