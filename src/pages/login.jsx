import React, { useState } from "react";
import Input from '../components/input';
import Button from '../components/button';
import UpNextLogo from '../assets/logo-upnext.svg';
import ImgContent from '../assets/image-content.svg';
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className='flex h-screen'>
      <div className='flex-1 flex flex-col gap-6 justify-center items-center bg-[#567CBD]'>
        <img src={UpNextLogo} alt="logo" width={"40%"} />
        <h1 className='text-white w-3/4 text-center font-bold text-3xl'>Jelajahi berbagai event yang ada di UPNVJ</h1>
        <img src={ImgContent} alt="logo content" width={"50%"} />
      </div>
      <div className='flex-1 flex bg-white justify-center items-center flex-col'>
        <div className='flex flex-col items-center w-3/5 gap-4 p-6'>
          <div className="flex flex-col items-center gap-1">
            <h1 className='font-bold text-[#567CBD] text-2xl'>LOGIN</h1>
            <p>Selamat Datang di aplikasi UpNext</p>
          </div>
          <Input title={"Email"} type='Email' label={"Masukkan email"}/>
          <Input title={"Password"} type='Password' label={"Masukkan password"}/>
          <Button label={"Masuk"}/>
          <div className='flex flex-row gap-1'>
            <p>Belum punya akun? </p>
            <Link to="/register" className="font-bold text-[#567CBD]">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
