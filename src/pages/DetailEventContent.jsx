import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CalendarDays } from "lucide-react";
import Navbar from "../components/navbar";
import Button from "../components/button";

const EventDetailContent = () => {
  const { id } = useParams();
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch(`${import.meta.env.VITE_API_URL}/events/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.data?.event) {
          setEventData(data.data.event);
        } else {
          console.error("Data event tidak ditemukan:", data);
          setEventData(null);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Gagal mengambil data event:", error);
        setEventData(null);
        setLoading(false);
      });
  }, [id]);

  const formatDateRange = (start, end) => {
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    const startDate = new Date(start).toLocaleDateString("id-ID", options);
    const endDate = new Date(end).toLocaleDateString("id-ID", options);
    return startDate === endDate ? startDate : `${startDate} - ${endDate}`;
  };

  if (loading)
    return (
      <div className="text-center mt-10 text-gray-600">
        Memuat data event...
      </div>
    );

  if (!eventData)
    return (
      <div className="text-center mt-10 text-red-500">
        Gagal memuat data event.
      </div>
    );

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-col md:flex-row gap-10 mt-10 items-start justify-center px-6">
        {/* Kiri: Detail Event */}
        <div className="bg-white rounded-xl shadow-md max-w-2xl w-full">
          <img
            src={eventData.banner.url}
            alt="Banner Event"
            className="rounded-t-xl w-full h-[280px] object-cover"
          />
          <div className="p-5">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              {eventData.title}
            </h1>

            <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
              <CalendarDays className="w-5 h-5" />
              <span>{formatDateRange(eventData.startDate, eventData.endDate)}</span>
            </div>

            <p className="text-gray-800 text-sm mb-4">{eventData.description}</p>

            {/* Dokumen */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2">Dokumen Event</h2>
              {eventData.documents && eventData.documents.length > 0 ? (
                <ul className="list-disc list-inside text-blue-600">
                  {eventData.documents.map((doc, index) => (
                    <li key={index}>
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        Dokumen {index + 1}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 text-sm">Tidak ada dokumen.</p>
              )}
            </div>

            {/* Tombol Daftar */}
            <div className="mt-6">
              <Button
                label="Daftar Sekarang"
                onClick={() =>
                  window.open(eventData.registLink, "_blank", "noopener,noreferrer")
                }
              />
            </div>
          </div>
        </div>

        {/* Kanan: Foto Dokumentasi */}
        <div className="max-w-xs w-full">
          <h2 className="text-lg font-semibold mb-4">Foto Dokumentasi</h2>
          {(eventData.photos || []).length === 0 && (
            <p className="text-gray-500 text-sm">Tidak ada dokumentasi foto.</p>
          )}
          {(eventData.photos || []).map((photo, index) => (
            <img
              key={index}
              src={photo.url}
              alt={`Foto ${index + 1}`}
              className="rounded-lg shadow border object-cover w-full h-[140px] mb-3"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventDetailContent;
