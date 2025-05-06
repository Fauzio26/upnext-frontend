import React from "react";
import Group1 from "../assets/Group1.svg";
import Frame3 from "../assets/Frame3.svg";
import Frame4 from "../assets/Frame4.svg";
import Frame5 from "../assets/Frame5.svg";
import Navbar from "../components/navbar";

const Landing = () => {
  return (
    <div className="font-sans">
        <Navbar/>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#6a8bcb] to-[#dbe7f4] py-16 px-5 text-black flex flex-col items-center">
        <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1 min-w-[280px] p-5">
            <h1 className="text-[3.5rem] font-bold text-gray-800 mb-5">Jelajahi Setiap Event di UPNVJ</h1>
            <p className="text-lg text-gray-800 mb-5 max-w-md">
              Dapatkan kabar terbaru seputar pengumuman event di kampusmu secara cepat, ringkas, dan terorganisir di satu tempat.
            </p>
            <button className="bg-blue-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-600 transition duration-300">
              Mulai Menjelajah
            </button>
          </div>
          <div className="flex-1 min-w-[280px] p-5 text-center">
            <img src={Group1} alt="Event Illustration" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-[#f8faff] to-white py-16 px-5 text-center">
        <h2 className="text-2xl text-blue-800 font-bold mb-10">Kenapa harus pakai UpNext?</h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          {[
            {
              img: Frame3,
              title: "Update Real-Time",
              desc: "Dapatkan pengumuman terbaru yang akan diadakan di kampus."
            },
            {
              img: Frame4,
              title: "Mudah & Cepat",
              desc: "Navigasi simpel, semua info dalam satu klik."
            },
            {
              img: Frame5,
              title: "Kategori Terkini",
              desc: "Pengumuman terbagi dalam beberapa kategori."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md text-center max-w-xs transition-transform hover:-translate-y-1"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-[70px] h-[100px] object-contain mx-auto mb-4"
              />
              <h3 className="text-lg text-blue-800 font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-blue-800">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How To Use Section */}
      <section className="bg-white py-16 px-5 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Bagaimana cara menggunakannya?</h2>
        <div className="flex flex-col gap-6 max-w-2xl mx-auto text-left">
          {[
            {
              number: "1",
              title: "Kunjungi Halaman Beranda",
              desc: "Klik tombol “Pengumuman” di atas untuk mulai menelusuri info event di kampus."
            },
            {
              number: "2",
              title: "Pilih dan Cari",
              desc: "Gunakan filter atau kolom pencarian untuk menemukan pengumuman yang kamu butuhkan."
            },
            {
              number: "3",
              title: "Baca dan Bagikan",
              desc: "Buka detail pengumuman untuk melihat info lengkap, lalu bagikan ke teman jika diperlukan."
            }
          ].map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="bg-[#b6cdff] text-gray-900 font-bold py-2 px-4 rounded-md text-lg">
                {step.number}
              </div>
              <div>
                <h4 className="text-gray-900 font-semibold">{step.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-[#1344ad] to-[#bbc2e3] text-white py-12 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div>
            <h4 className="font-bold mb-4">Pembuat</h4>
            <p>Fauzio Yunus Alim</p>
            <p>Bima Adnandita</p>
            <p>Erika Zahrania</p>
            <p>Muhammad Zakki Thoriq Ramadhan</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Kontak</h4>
            <p>08512345678</p>
            <p>08512345678</p>
            <p>08512345678</p>
            <p>08512345678</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Sosial Media</h4>
            <p>@loremipsum</p>
            <p>@loremipsum</p>
            <p>@loremipsum</p>
            <p>@loremipsum</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Universitas</h4>
            <p>Universitas Pembangunan<br />Nasional “Veteran” Jakarta</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
