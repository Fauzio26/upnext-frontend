import React, { useState } from "react";
import CardEvent from "../components/card";
import Search from "../components/search";
import eventdb from "../eventdb.json"
import Button from "../components/button";
import FilterButton from "../components/filter";
import Navbar from "../components/navbar";

const Event = () => {
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState("A - Z");

    const filterCategory = ["A - Z", "Z - A", "Tanggal Terbaru", "Tanggal Terlama"];
      
    const filteredEvents = eventdb.filter((event) =>
        event.title.toLowerCase().includes(search.toLowerCase())
    );

    let sortedEvents = [...filteredEvents];

    if (activeFilter === "A - Z") {
        sortedEvents.sort((a, b) => a.title.localeCompare(b.title));
    } else if (activeFilter === "Z - A") {
        sortedEvents.sort((a, b) => b.title.localeCompare(a.title));
    } else if (activeFilter === "Tanggal Terbaru") {
        sortedEvents.sort((a, b) => new Date(b.dates) - new Date(a.dates));
    } else if (activeFilter === "Tanggal Terlama") {
        sortedEvents.sort((a, b) => new Date(a.dates) - new Date(b.dates));
    }

    return(
        <div className="flex flex-col">
            <Navbar/>
            <div className="bg-[#567CBD] flex flex-col items-center p-6 gap-2">
                <h1 className="text-white font-bold text-3xl text-center">Pengumuman Event Kampus Terkini</h1>
                <p className="text-white text-lg text-center">Temukan semua pengumuman event terbaru yang penting dan menarik untuk kamu ikuti!</p>
            </div>
            <div className="flex flex-col p-6 gap-6">
                <div className="flex gap-2 w-full">
                    <div className="w-full">
                        <Search 
                        value={query} 
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={ (e) => {
                            if (e.key === 'Enter') {
                                setSearch(query);
                            }}
                        }/>
                    </div>
                    <div className="m:w-full">
                        <Button label={"Cari"} onClick={() => setSearch(query)}/>
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
                <div className="w-full grid grid-cols-2 justify-start gap-6 md:grid-cols-3">
                    {sortedEvents.map((event) => (
                        <CardEvent 
                        key={event.id} 
                        title={event.title} 
                        dates={event.dates} 
                        description={event.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Event;