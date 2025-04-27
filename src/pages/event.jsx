import React from "react";
import CardEvent from "../components/card";
import Search from "../components/search";

const Event = () => {
    return(
        <div className="flex flex-col gap-7 p-6">
            <div>
                <Search/>
            </div>
            <div className="w-full flex flex-wrap justify-start gap-7">
                <CardEvent title={"Comifuro 20"} dates={"Minggu, 27 Desember 2025"} description={"Comifuro adalah event anime terbesar di Indonesia yang sudah berjalan selama beberapa tahun"}/>
                <CardEvent title={"Comifuro 20"} dates={"Minggu, 27 Desember 2025"} description={"Comifuro adalah event anime terbesar di Indonesia yang sudah berjalan selama beberapa tahun"}/>
                <CardEvent title={"Comifuro 20"} dates={"Minggu, 27 Desember 2025"} description={"Comifuro adalah event anime terbesar di Indonesia yang sudah berjalan selama beberapa tahun"}/>
                <CardEvent title={"Comifuro 20"} dates={"Minggu, 27 Desember 2025"} description={"Comifuro adalah event anime terbesar di Indonesia yang sudah berjalan selama beberapa tahun"}/>
                <CardEvent title={"Comifuro 20"} dates={"Minggu, 27 Desember 2025"} description={"Comifuro adalah event anime terbesar di Indonesia yang sudah berjalan selama beberapa tahun"}/>
                <CardEvent title={"Comifuro 20"} dates={"Minggu, 27 Desember 2025"} description={"Comifuro adalah event anime terbesar di Indonesia yang sudah berjalan selama beberapa tahun"}/>
                <CardEvent title={"Comifuro 20"} dates={"Minggu, 27 Desember 2025"} description={"Comifuro adalah event anime terbesar di Indonesia yang sudah berjalan selama beberapa tahun"}/>
            </div>
        </div>
    );
}

export default Event;