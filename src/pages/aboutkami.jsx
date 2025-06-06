import React from "react";
import UpNextLogo from "../assets/logo-upnext.svg"
import Navbar from "../components/navbar";
import ImgBima from "../assets/bima.jpeg"
import ImgErika from "../assets/erika.jpeg"
import ImgZio from "../assets/zio.jpeg"
import ImgZakki from "../assets/zakki.jpeg"
import LogoGithub from "../assets/github.svg"
import LogoInsta from "../assets/instagram.svg"
import LogoTailwind from "../assets/tailwind-logo.png"
import LogoReact from "../assets/react-logo.png"
import LogoExpress from "../assets/express.png"
import LogoNode from "../assets/node.png"


const AboutUs = () => {
    return(
        <div>
            <Navbar/>
            <div>
                <div className="flex flex-col justify-center items-center gap-3 p-6">
                    <img src={UpNextLogo} alt="logo upnext" className="w-[60%] md:w-[30%]" />
                    <p className="text-lg text-justify">UpNext adalah platform digital yang dirancang untuk memudahkan siapa saja menemukan, mengikuti, dan berbagi informasi seputar event. Mulai dari seminar, konser, hingga workshop, semuanya kami rangkum dalam satu aplikasi yang simpel dan informatif. Kami percaya bahwa setiap event memiliki potensi untuk menginspirasi, mengedukasi, dan mempererat koneksi antarindividu dalam komunitas.</p>
                </div>
                <div className="flex flex-row bg-[#6a8bcb] bg-opacity-40 mx-6 rounded">
                    <div className="flex flex-col gap-2 w-[50%] p-6">
                        <h1 className="text-3xl font-bold ">Visi</h1>
                        <p className="text-lg text-justify">Menjadi platform utama yang menghubungkan mahasiswa UPNVJ dengan berbagai informasi event secara cepat, akurat, dan terpercaya, guna mendorong partisipasi aktif dalam kegiatan positif serta memperkuat keterhubungan antar organisasi di seluruh UPNVJ.</p>
                    </div>
                    <div className="flex flex-col gap-2 w-[50%] p-6">
                        <h1 className="text-3xl font-bold ">Misi</h1>
                        <p className="text-lg text-justify">Menjadi platform utama yang menghubungkan mahasiswa UPNVJ dengan berbagai informasi event secara cepat, akurat, dan terpercaya, guna mendorong partisipasi aktif dalam kegiatan positif serta memperkuat keterhubungan antar organisasi di seluruh UPNVJ.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-1 py-16">
                <div className="flex flex-col gap-2 p-6">
                    <h1 className="text-3xl font-bold">Meet Our Team</h1>
                    <p className="text-lg text-justify">Di balik UpNext, terdapat tim yang berdedikasi dalam menciptakan platform pengumuman event yang informatif, mudah digunakan, dan bermanfaat bagi semua. Kami terdiri dari berbagai peran seperti frontend developer dan backend developer yang bekerja sama erat untuk mewujudkan aplikasi ini dari ide hingga bisa kamu gunakan hari ini.</p>
                </div>
                <div className="pl-6 pr-6 pb-6 grid grid-cols-2 md:grid-cols-4 justify-center gap-6 items-center">
                    <div className="bg-[#6a8bcb] h-full bg-opacity-40 p-4 flex flex-col gap-3 rounded justify-between items-center">
                        <img src={ImgBima} alt="gambartest" className="w-full h-[200px] object-cover object-[80%_20%] rounded" />
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="font-bold text-lg">Bima Adnandita</h1>
                            <h2>Frontend Developer</h2>
                        </div>
                        <div className="flex flex-row gap-2">
                            <div className="hover:invert">
                                <a href="https://github.com/adnanz19" target="_blank">
                                    <img src={LogoGithub} alt="ikon" width={40} className="w-10 h-10"/>
                                </a>
                            </div>
                            <div className="hover:invert">
                                <a href="https://www.instagram.com/bimadnndta/" target="_blank">
                                    <img src={LogoInsta} alt="ikon" width={40} className="w-10 h-10"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#6a8bcb] h-full bg-opacity-40 p-4 flex flex-col gap-3 rounded justify-between items-center">
                        <img src={ImgZio} alt="gambartest" className="w-full h-[200px] object-cover object-[50%_50%] rounded" />
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="font-bold text-lg">Fauzio Yunus Alim</h1>
                            <h2>Frontend Developer</h2>
                        </div>
                        <div className="flex flex-row gap-2">
                            <div className="hover:invert">
                                <a href="https://github.com/Fauzio26" target="_blank">
                                    <img src={LogoGithub} alt="ikon" width={40} className="w-10 h-10"/>
                                </a>
                            </div>
                            <div className="hover:invert">
                                <a href="https://www.instagram.com/fauzio_26/" target="_blank">
                                    <img src={LogoInsta} alt="ikon" width={40} className="w-10 h-10"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#6a8bcb] h-full bg-opacity-40 p-4 flex flex-col gap-3 rounded justify-between items-center">
                        <img src={ImgErika} alt="gambartest" className="w-full h-[200px] object-cover object-[60%_40%] rounded" />
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="font-bold text-lg">Erika Zahrania</h1>
                            <h2>Frontend Developer</h2>
                        </div>
                        <div className="flex flex-row gap-2">
                            <div className="hover:invert">
                                <a href="https://github.com/ljowhed" target="_blank">
                                    <img src={LogoGithub} alt="ikon" width={40} className="w-10 h-10"/>
                                </a>
                            </div>
                            <div className="hover:invert">
                                <a href="https://www.instagram.com/erk_zzzzz/" target="_blank">
                                    <img src={LogoInsta} alt="ikon" width={40} className="w-10 h-10"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#6a8bcb] h-full bg-opacity-40 p-4 flex flex-col gap-3 rounded justify-between items-center">
                        <img src={ImgZakki} alt="gambartest" className="w-full h-[200px] object-cover object-top rounded" />
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="font-bold text-lg text-center">Mohammad Zakki Thoriq Ramadhan</h1>
                            <h2>Backend Developer</h2>
                        </div>
                        <div className="flex flex-row gap-2">
                            <div className="hover:invert">
                                <a href="https://github.com/mhdztr" target="_blank">
                                    <img src={LogoGithub} alt="ikon" width={40} className="w-10 h-10"/>
                                </a>
                            </div>
                            <div className="hover:invert">
                                <a href="https://www.instagram.com/mhd.ztr/" target="_blank">
                                    <img src={LogoInsta} alt="ikon" width={40} className="w-10 h-10"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
                <h1 className="text-3xl font-bold">Made by</h1>
                <div className="flex flex-row justify-center items-center gap-6">
                    <img src={LogoReact} alt="react-logo" className="h-20"/>
                    <img src={LogoTailwind} alt="tailwind-logo" className="h-8"/>
                    <img src={LogoExpress} alt="express-logo" className="h-16"/>
                    <img src={LogoNode} alt="node-react" className="h-16" />
                </div>
            </div>
        </div>
    );
}

export default AboutUs;