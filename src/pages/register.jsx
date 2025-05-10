import React, { useState } from "react";
import Input from '../components/input';
import Button from '../components/button';
import UpNextLogo from '../assets/logo-upnext.svg';
import ImgContent from '../assets/image-content.svg';
import FileInput from '../components/input-file';
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [fileInput, setFileInput] = useState('');
  const [name, setName] = useState('');

  return (
    <div className="flex flex-col">
      <Navbar/>
      <div className="flex min-h-screen">
        <div className="w-full flex-1 hidden md:flex flex-col gap-6 justify-center items-center bg-[#567CBD]">
          <img src={UpNextLogo} alt="logo" width={"40%"} />
          <h1 className="text-white w-3/4 text-center font-bold text-3xl">
            Jelajahi berbagai event yang ada di UPNVJ
          </h1>
          <img src={ImgContent} alt="logo content" width={"50%"} />
        </div>
        <div className="flex-1 flex bg-white justify-center items-center flex-col">
          <div className="flex flex-col items-center w-4/5 md:w-3/5 gap-4 p-6">
            <div className="flex flex-col items-center gap-1">
              <h1 className="font-bold text-[#567CBD] text-2xl">REGISTER</h1>
              <p className="text-lg text-center">Selamat Datang di aplikasi UpNext</p>
            </div>
            <Input title={"Nama"} type="text" label={"Masukkan nama"} value={name} onChange={(e) => setName(e.target.value)}/>
            <Input title={"Email"} type="email" label={"Masukkan email"} value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Input title={"Password"} type="password" label={"Masukkan password"} value={password} onChange={(e) => setPassword(e.target.value)}/>
            <Input title={"Konfirmasi Password"} type="password" label={"Konfirmasi password"} value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)}/>
            <FileInput title={"File Bukti Organisasi"} onChange={(filename) => setFileInput(filename)}/>
            <Button label={"Daftar"} disabled={!name || !email || !password || !passwordConfirm || !fileInput }/>
            <div className="flex flex-row gap-1">
              <p>Sudah punya akun? </p>
              <Link to="/login" className="font-bold text-[#567CBD]">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;