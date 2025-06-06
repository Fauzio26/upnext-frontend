import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import Navbar from "../components/navbar";

const MyEvents = () => {
  const [myEvents, setMyEvents] = useState([]);
  const navigate = useNavigate();

  const fetchMyEvents = async () => {
    const token = localStorage.getItem("token");
    console.log("📦 Token:", token);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/events/my`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        console.error("❌ Bukan JSON:", text);
        return;
      }

      const result = await response.json();

      if (!response.ok) {
        console.error("❌ API Error:", result.message || "Unknown error");
        return;
      }

      console.log("📦 Full API result:", result);

      const events = result?.data?.event || [];
      setMyEvents(Array.isArray(events) ? events : []);
      console.log("📦 Events:", events);
    } catch (error) {
      console.error("❌ Error fetching events:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Yakin ingin menghapus event ini?")) return;
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${import.meta.env.VITE_API_URL}/events/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const contentType = response.headers.get("content-type");
      const data = contentType?.includes("application/json")
        ? await response.json()
        : { message: await response.text() };

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

  const resolveImageUrl = (event) => {
    const rawUrl = event.banner?.url || event.banners?.[0]?.url;
    console.log("🖼 rawUrl =", rawUrl);

    if (!rawUrl || typeof rawUrl !== "string") {
      return "https://placehold.co/300x160?text=No+Image";
    }

    return rawUrl.startsWith("http")
      ? rawUrl
      : `${import.meta.env.VITE_API_URL}${rawUrl}`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 bg-gradient-to-b from-blue-200 to-blue-500 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold mb-4 text-blue-900">Event Saya</h1>
          {myEvents.length === 0 ? (
            <p className="text-white">Belum ada event yang dibuat.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-lg shadow-md p-4">
                  <img
                    src={resolveImageUrl(event)}
                    alt={event.title}
                    className="w-full h-40 object-cover rounded mb-2"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://placehold.co/300x160?text=No+Image";
                    }}
                  />
                  <h2 className="font-bold text-lg">{event.title}</h2>
                  <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                  <p className="text-xs text-gray-500 mb-2">
                    {new Date(event.startDate).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    })}
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
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyEvents;
