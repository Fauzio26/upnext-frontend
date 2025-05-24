import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import Navbar from "../components/navbar";

const MyEvents = () => {
  const [myEvents, setMyEvents] = useState([]);
  const navigate = useNavigate();

  const fetchMyEvents = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/events/my", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setMyEvents(data.data);
      } else {
        alert(data.message || "Gagal memuat event");
      }
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat mengambil data.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Yakin ingin menghapus event ini?")) return;
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:5000/api/events/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        alert("Event berhasil dihapus");
        fetchMyEvents();
      } else {
        alert(data.message || "Gagal menghapus event");
      }
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat menghapus event.");
    }
  };

  useEffect(() => {
    fetchMyEvents();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4 text-blue-800">Event Saya</h1>
        {myEvents.length === 0 ? (
          <p>Belum ada event yang dibuat.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myEvents.map((event) => {
              const imageUrl = event.banners?.[0]?.url
                ? `http://localhost:5000${event.banners[0].url}`
                : "https://via.placeholder.com/300x160?text=No+Image";

              return (
                <div key={event.id} className="bg-white rounded-lg shadow-md p-4">
                  <img
                    src={imageUrl}
                    alt={event.title}
                    className="w-full h-40 object-cover rounded mb-2"
                  />
                  <h2 className="font-bold text-lg">{event.title}</h2>
                  <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                  <p className="text-xs text-gray-500 mb-2">
                    {new Date(event.startDate).toLocaleString()}
                  </p>
                  <div className="flex gap-2">
                    <Button
                      label="Edit"
                      onClick={() => navigate(`/edit-event/${event.id}`)}
                    />
                    <Button
                      label="Hapus"
                      onClick={() => handleDelete(event.id)}
                      className="bg-red-500 hover:bg-red-600"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyEvents;
