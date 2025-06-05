import React from "react";
import Navbar from "../components/navbar";

const NotFound = () => {
    return(
        <div className="h-screen overflow-hidden">
            <Navbar/>
            <div className="h-screen flex flex-col justify-center items-center gap-5 text-[#567CBD]">
                <div className="font-bold text-9xl">
                    404
                </div>
                <div className="font-medium text-4xl">
                    Halaman Tidak Ditemukan
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-2xl">
                    Maaf, halaman yang kamu cari tidak tersedia atau mungkin telah dipindahkan.
                    </div>
                    <div className="text-2xl">
                        Silakan kembali ke beranda atau periksa URL-nya lagi ya.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;