import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-upnext.svg";

export default function Navbar() {
  return (
    <nav className="sticky z-50 top-0 w-full bg-[#6a8bcb] text-white shadow-md">
      <div className="flex justify-between items-center px-4 py-3 max-w-[1200px] mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Menu Links */}
        <ul className="flex flex-row items-center justify-center gap-6">
          <li>
            <Link to="/" className="hover:text-[#1a1e2b] font-medium">
              Beranda
            </Link>
          </li>
          <li>
            <Link to="/event" className="hover:text-[#1a1e2b] font-medium">
              Event
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#1a1e2b] font-medium">
              Tentang Kami
            </Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 rounded-lg bg-[#6a8bcb] hover:bg-[#2d5182] text-white font-medium"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 rounded-lg bg-[#6a8bcb] hover:bg-[#2d5182] text-white font-medium"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}