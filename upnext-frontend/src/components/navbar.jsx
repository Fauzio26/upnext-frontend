import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo-upnext.svg";

export default function Navbar() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

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

        {/* Conditional Buttons */}
        <div className="flex space-x-4">
          {isLoggedIn ? (
            <>
              <Link
                to="/createacara"
                className="px-4 py-2 rounded-lg bg-[#6a8bcb] hover:bg-[#2d5182] text-white font-medium"
              >
                Create Event
              </Link>
              <Link
                to="/myevents"
                className="px-4 py-2 rounded-lg bg-[#6a8bcb] hover:bg-[#2d5182] text-white font-medium"
              >
                My Events
              </Link>
              <Link
                to="/profile"
                className="px-4 py-2 rounded-lg bg-[#6a8bcb] hover:bg-[#2d5182] text-white font-medium"
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium"
              >
                Logout
              </button>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
