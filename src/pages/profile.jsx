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

    fetch("http://localhost:5000/api/organizations/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        if (!res.ok) {
          const text = await res.text();
          throw new Error(`Fetch error: ${res.status}, ${text}`);
        }
        return res.json();
      })
      .then((data) => setUser(data))
      .catch((err) => {
        console.error("Error fetching profile:", err);
        alert("Terjadi kesalahan saat mengambil data profil.");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center mt-20">Loading...</div>;

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto mt-20 p-6 bg-white shadow-md rounded-xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Profil Organisasi</h1>
        {user ? (
          <div className="space-y-4">
            <div>
              <span className="font-semibold">Nama:</span> {user.name}
            </div>
            <div>
              <span className="font-semibold">Email:</span> {user.email}
            </div>
            {user.profilePic && (
              <div>
                <span className="font-semibold">Foto Profil:</span><br />
                <img src={`http://localhost:5000/${user.profilePic}`} alt="Profile" className="w-32 h-32 object-cover rounded-full mt-2" />
              </div>
            )}
            {user.bannerPic && (
              <div>
                <span className="font-semibold">Banner:</span><br />
                <img src={`http://localhost:5000/${user.bannerPic}`} alt="Banner" className="w-full h-48 object-cover mt-2 rounded-md" />
              </div>
            )}
            <div className="text-right">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
                onClick={() => navigate("/edit-profile")}
              >
                Edit Profile
              </button>
            </div>
          </div>
        ) : (
          <p>Data profil tidak ditemukan.</p>
        )}
      </div>
    </>
  );
};

export default Profile;
