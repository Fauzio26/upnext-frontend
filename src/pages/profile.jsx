import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("User tidak terautentikasi");
      setLoading(false);
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await fetch(`https://upnextapi.vercel.app/organizations/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (!response.ok) {
          console.error("❌ API Error:", data.message || "Unknown error");
          alert("Gagal mengambil profil: " + (data.message || "Unknown error"));
          return;
        }

        if (!data.id) {
          console.warn("⚠️ Data organisasi tidak valid:", data);
          alert("Data organisasi tidak ditemukan.");
          return;
        }

        setUser(data);
      } catch (err) {
        console.error("❌ Error fetching profile:", err);
        alert("Terjadi kesalahan saat mengambil data profil.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <div className="text-center mt-20">Loading...</div>;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-500 flex justify-center items-start pt-20">
        <div className="w-full max-w-4xl bg-white shadow-xl rounded-xl overflow-hidden">
          {/* Banner */}
          {user?.bannerPic && (
            <div className="relative h-52 bg-gray-200">
              <img
                src={user.bannerPic}
                alt="Banner"
                className="object-cover w-full h-full"
              />
              {/* Profile picture */}
              {user?.profilePic && (
                <img
                  src={user.profilePic}
                  alt="Profile"
                  className="absolute left-1/2 transform -translate-x-1/2 -bottom-16 w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                />
              )}
            </div>
          )}

          {/* Info section */}
          <div className="mt-20 text-center p-6">
            <h2 className="text-2xl font-semibold">{user?.name}</h2>
            <p className="text-gray-600">{user?.email}</p>
            <button
              onClick={() => navigate("/edit-profile")}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
            >
              Edit Profil
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
