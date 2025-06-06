import React, { useEffect, useState } from "react";
import CardEvent from "../components/card";
import Search from "../components/search";
import Button from "../components/button";
import FilterButton from "../components/filter";
import Navbar from "../components/navbar";

const Event = () => {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState("A - Z");
  const [loading, setLoading] = useState(true);

  const filterCategory = ["A - Z", "Z - A", "Tanggal Terbaru", "Tanggal Terlama"];

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.error("Token tidak ditemukan. Login dulu.");
          setLoading(false);
          return;
        }

        const response = await fetch(`https://upnext-be.vercel.app/events`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        console.log("Full Response:", data);

        if (response.ok && Array.isArray(data.data?.events)) {
          setEvents(data.data.events);
        } else {
          console.error("❌ Format data tidak sesuai:", data);
          alert("Gagal memuat event. Format data tidak sesuai.");
        }
      } catch (error) {
        console.error("Terjadi kesalahan:", error);
        alert("Terjadi kesalahan saat memuat event.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  let sortedEvents = [...filteredEvents];

  if (activeFilter === "A - Z") {
    sortedEvents.sort((a, b) => a.title.localeCompare(b.title));
  } else if (activeFilter === "Z - A") {
    sortedEvents.sort((a, b) => b.title.localeCompare(a.title));
  } else if (activeFilter === "Tanggal Terbaru") {
    sortedEvents.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
  } else if (activeFilter === "Tanggal Terlama") {
    sortedEvents.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
  }

  return (
    <div className="flex flex-col">
      <Navbar />

      {/* Header */}
      <div className="bg-[#567CBD] flex flex-col items-center p-6 gap-2">
        <h1 className="text-white font-bold text-3xl text-center">
          Pengumuman Event Kampus Terkini
        </h1>
        <p className="text-white text-lg text-center">
          Temukan semua pengumuman event terbaru yang penting dan menarik untuk kamu ikuti!
        </p>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col p-6 gap-6">
        <div className="flex gap-2 w-full">
          <div className="w-full">
            <Search
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') setSearch(query);
              }}
            />
          </div>
          <div className="m:w-full">
            <Button label={"Cari"} onClick={() => setSearch(query)} />
          </div>
        </div>

        <div className="w-full flex gap-4 flex-wrap md:flex-nowrap justify-start">
          {filterCategory.map((label) => (
            <FilterButton
              key={label}
              label={label}
              isActive={activeFilter === label}
              onClick={() => setActiveFilter(label)}
            />
          ))}
        </div>

        {/* Event List */}
        {loading ? (
          <div className="text-center w-full py-10 text-lg text-gray-600">
            Memuat event...
          </div>
        ) : sortedEvents.length > 0 ? (
          <div className="w-full grid grid-cols-2 justify-start gap-6 md:grid-cols-3">
            {sortedEvents.map((event) => (
              <CardEvent
                key={event.id}
                id={event.id}
                title={event.title}
                dates={event.startDate}
                description={event.description}
                bannerUrl={event.banner?.url}
              />
            ))}
          </div>
        ) : (
          <div className="text-center w-full py-10 text-lg text-gray-600">
            Tidak ada event ditemukan.
          </div>
        )}
      </div>
    </div>
  );
};

export default Event;
