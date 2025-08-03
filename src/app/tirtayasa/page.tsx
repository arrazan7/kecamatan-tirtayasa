"use client";

import Image from "next/image";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
    const plugins = [Autoplay({ delay: 2000 })];

    return (
        <div>
            <div className="relative h-screen">
                <Image
                    className="absolute z-0 object-cover w-full h-full brightness-60"
                    src="/makam-sultan-ageng-tirtayasa.webp"
                    alt="Makam Sultan Ageng Tirtayasa"
                    width={4160}
                    height={2080}
                />
                <div className="absolute z-[1] top-1/2 left-1/2 -translate-1/2 h-[416px] w-[1080px] flex flex-col justify-center items-center font-poppins font-bold text-center text-white">
                    <h1 className="text-8xl">Desa Tirtayasa</h1>
                </div>
            </div>
            <div className="mx-52 my-32 flex gap-10">
                <div className="basis-1/2 border-5 border-green-300/90 rounded-4xl flex flex-col items-center justify-center px-7 pb-7">
                    <LocationPinIcon
                        sx={{ fontSize: 150, color: "#53ff8a" }}
                        className="p-7"
                    />
                    <p className="font-roboto text-2xl text-justify text-green-500">
                        Desa Tirtayasa berada sekitar 31 km di utara Kota
                        Serang, Provinsi Banten, dengan luas wilayah sekitar 251
                        hektare yang terbagi ke dalam area pemukiman (67ha) dan
                        area persawahan (184ha).
                    </p>
                </div>
                <div className="basis-1/2 border-5 border-green-300/90 rounded-4xl flex flex-col items-center justify-center px-7 pb-7">
                    <AgricultureIcon
                        sx={{ fontSize: 150, color: "#53ff8a" }}
                        className="p-7"
                    />
                    <p className="font-roboto text-2xl text-justify text-green-500">
                        Mayoritas penduduk bekerja sebagai petani—termasuk
                        petani pemilik, penggarap, dan buruh tani, dengan sistem
                        pertanian tradisional dan irigasi sederhana.
                    </p>
                </div>
            </div>
            <div className="mx-52 mb-32 text-center">
                <h3 className="font-poppins font-bold text-4xl text-black/70">
                    Sejarah & Warisan Budaya
                </h3>
                <p className="mt-3 font-roboto text-2xl text-black/60">
                    Desa ini dikenal sebagai pusat Kesultanan Banten di era
                    pemerintahan Sultan Ageng Tirtayasa (1651-1683). Sultan
                    Ageng membangun sistem irigasi dan kanal pertanian serta
                    menjadikan wilayah ini “lumbung padi” di Banten pada
                    masanya.
                </p>
                <p className="font-roboto text-2xl text-black/60">
                    Julukan “Tirtayasa” sendiri berasal dari istilah yang
                    berarti &quot;manajemen air&quot; atau
                    &quot;hidraulika&quot; karena fokus pada pengairan pertanian
                    yang maju di zamannya
                </p>
            </div>
            <div className="mb-32">
                <h3 className="font-poppins font-bold text-4xl text-center text-black/70">
                    Desa Wisata Bumi Tirtayasa
                </h3>
                <div className="mt-10 flex items-center">
                    <Image
                        src="/tulisan-bumi-tirtayasa.webp"
                        alt="Bumi Tirtayasa"
                        width={4160}
                        height={3120}
                        className="w-[500] h-[300] basis-1/2 object-cover"
                    />
                    <p className="basis-1/2 pl-5 pr-32 font-roboto text-2xl text-black/60">
                        Objek wisata Bumi Tirtayasa diresmikan oleh Bupati
                        Serang, Ratu Tatu Chasanah, pada 16 Maret 2023.
                    </p>
                </div>
                <div className="flex items-center">
                    <p className="basis-1/2 pr-5 pl-32 font-roboto text-2xl text-black/60 text-right">
                        Menyajikan panorama sawah hijau dan kuning yang luas,
                        ideal untuk ngabuburit, rekreasi keluarga, dan fotografi
                        sunset.
                    </p>
                    <Image
                        src="/gazebo-bumi-tirtayasa.webp"
                        alt="Bumi Tirtayasa"
                        width={4160}
                        height={3120}
                        className="w-[500] h-[300] basis-1/2 object-cover"
                    />
                </div>
                <div className="flex items-center">
                    <Carousel
                        className="basis-1/2 relative h-full"
                        plugins={plugins}
                    >
                        <CarouselContent className="h-full w-full m-0">
                            <CarouselItem className="p-0">
                                <Image
                                    className="brightness-60 object-cover h-full"
                                    src="/cafe-bumi-tirtayasa.webp"
                                    alt="Cafe di Bumi Tirtayasa"
                                    width={4160}
                                    height={2080}
                                />
                            </CarouselItem>
                            <CarouselItem className="p-0">
                                <Image
                                    className="brightness-60 object-cover h-full"
                                    src="/lesehan-bumi-tirtayasa.webp"
                                    alt="Lesehan di Bumi Tirtayasa"
                                    width={4160}
                                    height={3120}
                                />
                            </CarouselItem>
                            <CarouselItem className="p-0">
                                <Image
                                    className="brightness-60 object-cover h-full"
                                    src="/kolam-renang-bumi-tirtayasa.webp"
                                    alt="Kolam Renang di Bumi Tirtayasa"
                                    width={4160}
                                    height={3120}
                                />
                            </CarouselItem>
                            <CarouselItem className="p-0">
                                <Image
                                    className="brightness-60 object-cover h-full"
                                    src="/bulan-bumi-tirtayasa.webp"
                                    alt="Bulan di Bumi Tirtayasa"
                                    width={4160}
                                    height={3120}
                                />
                            </CarouselItem>
                            <CarouselItem className="p-0">
                                <Image
                                    className="brightness-60 object-cover h-full"
                                    src="/spot-foto-bumi-tirtayasa.webp"
                                    alt="Bulan di Bumi Tirtayasa"
                                    width={4160}
                                    height={3120}
                                />
                            </CarouselItem>
                            <CarouselItem className="p-0">
                                <Image
                                    className="brightness-60 object-cover h-full"
                                    src="/pengunjung-bumi-tirtayasa.webp"
                                    alt="Bulan di Bumi Tirtayasa"
                                    width={4160}
                                    height={3120}
                                />
                            </CarouselItem>
                            <CarouselItem className="p-0">
                                <Image
                                    className="brightness-60 object-cover h-full"
                                    src="/panggung-bumi-tirtayasa.webp"
                                    alt="Bulan di Bumi Tirtayasa"
                                    width={4160}
                                    height={3120}
                                />
                            </CarouselItem>
                            <CarouselItem className="p-0">
                                <Image
                                    className="brightness-60 object-cover h-full"
                                    src="/dinding-bumi-tirtayasa.webp"
                                    alt="Bulan di Bumi Tirtayasa"
                                    width={4160}
                                    height={3120}
                                />
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-5 top-1/2 -translate-y-1/2 z-[1]" />
                        <CarouselNext className="absolute right-5 top-1/2 -translate-y-1/2 z-[1]" />
                    </Carousel>
                    <div className="basis-1/2 pl-5 pr-32 font-roboto text-2xl text-black/60">
                        <p>Fasilitas dan wahana:</p>
                        <ul className="list-disc pl-5">
                            <li>
                                Café/pedagang kuliner khas desa seperti kedai
                                kopi Sipengkol
                            </li>
                            <li>Gazebo unik, lesehan outdoor</li>
                            <li>
                                Kolam berenang anak, water ball, moon selfie,
                                sepeda angsa gowes
                            </li>
                            <li>
                                ATV fun ride (offroad), arena permainan
                                anak-anak, musholla, dan toilet umum
                            </li>
                        </ul>
                        <p className="mt-5">
                            Harga tiket sangat terjangkau, sekitar Rp5.000 per
                            orang. Sudah dikunjungi ratusan pengunjung dari
                            wilayah seperti Cilegon, Pandeglang, Serang, dan
                            sekitarnya.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mx-52 mb-32 text-center">
                <h3 className="font-poppins font-bold text-4xl text-black/70">
                    Produk Unggulan & Pengembangan Kekayaan Intelektual
                </h3>
                <p className="mt-3 font-roboto text-2xl text-black/60">
                    Pada 11 Maret 2025, tim dari Kemenkumham Banten melakukan
                    pemetaan potensi kekayaan intelektual Desa Tirtayasa, yang
                    mencakup promosi produk seperti Beras Bumi Tirtayasa dan
                    merek wisata desa lokal.
                </p>
                <p className="font-roboto text-2xl text-black/60">
                    Masyarakat desa berencana mendaftarkan merek “Bumi Tirtayasa
                    (Butir)” untuk meningkatkan nilai jual produk lokal dan
                    pelindungan hukum identitas produk.
                </p>
            </div>
            <div className="mx-52 mb-32 text-center">
                <h3 className="font-poppins font-bold text-4xl text-black/70">
                    Pertanian & Ketahanan Pangan
                </h3>
                <p className="mt-3 font-roboto text-2xl text-black/60">
                    Desa Laban, yang berada dalam kecamatan yang sama
                    (Tirtayasa), mencatat hasil panen gabah mencapai sekitar 9
                    ton per hektare pada panen raya program ketahanan pangan
                    (BIOS-44) tahun 2025. Hal ini memberi contoh keberhasilan
                    yang bisa direplikasi di Tirtayasa. Pemerintah daerah aktif
                    mendorong generasi muda untuk terlibat dalam pertanian dan
                    memanfaatkan teknologi untuk meningkatkan produktivitas.
                </p>
            </div>
        </div>
    );
}
