import React, { useState } from "react";
import logo from "../assets/logo-upnext.svg";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-[#6a8bcb] text-white">
      <div className="flex justify-between items-center px-4 py-3 max-w-[1200px] mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Menu Links */}
        <ul className="flex flex-row items-center justify-center gap-6">
          <li>
            <a href="#" className="hover:text-[#1a1e2b] font-medium">
              Beranda
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#1a1e2b] font-medium">
              Event
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#1a1e2b] font-medium">
              Tentang Kami
            </a>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="px-4 py-2 rounded-lg bg-[#6a8bcb] hover:bg-[#2d5182] text-white font-medium">
            Sign In
          </button>
          <button className="px-4 py-2 rounded-lg bg-[#6a8bcb] hover:bg-[#2d5182] text-white font-medium">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}