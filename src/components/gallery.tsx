"use client";

import React from "react";
import { ScrollCarousel } from "@/components/ui/scroll-carousel";

// ✅ Daftar nama file gambar di folder /public/galeri
const IMAGES_ROW_1 = [
    "apel-hari-kesadaran-nasional.webp",
    "apel-peringatan-hari-kartini-2024.webp",
    "apel-rutin-senin-pagi.webp",
    "dalam-rangka-hut-ri-ke-78-polres-serang-mengadakan-penanaman-mangrove-di-desa-lontar-kecamatan-tirtayasa.webp",
    "hari-batik-nasional.webp",
    "kegiatan-apel-kesadaran-nasional.webp",
    "kegiatan-pembagian-blt-dd-dspontang-legon-kec-tirtayasa.webp",
    "kegiatan-penerimaan-silaturahmi-dari-koalisi-gabungan-lsm-dari-serang-utara-pontirta.webp",
    "kegiatan-pkk-kecamatan-tirtayasa.webp",
    "kegiatan-rutin-apel-pagi.webp",
    "lebaran-anak-yatim-santunan-anak-yatim.webp",
];

const IMAGES_ROW_2 = [
    "monev-apbdes-desa-wargasara.webp",
    "musrenbang-rkpd-kecamatan-tirtayasa.webp",
    "pawai-maulud-dirangkai-dengan-hut-kab-serang-ke-497.webp",
    "pelaksanaan-isbat-nikah-di-kecamatan-tirtayasa.webp",
    "pelatihan-anggota-pamsung-tps-se-kec-tirtataya-pada-pemilu-2024.webp",
    "pembagian-blt-dd-ds-kebon-kec-tirtayasa.webp",
    "peresmian-desa-wisata-bumi-tirtayasa-di-desa-tirtayasa-kec-tirtayasa-kab-serang.webp",
    "rapat-kordinasi-dan-bimtek-pengelola-tik-kecamatan.webp",
    "rapat-tim-evaluasi-apbdes.webp",
    "upacara-hari-kesadaran-nasional-dirangkai-dengan-hari-bela-negara.webp",
    "upacara-peringatan-hari-kesaktian-pancasila.webp",
];

export default function Gallery() {
    return (
        <section className="bg-white py-32" aria-labelledby="gallery">
            <h2 className="text-center text-5xl font-bold mb-12">
                Galeri Kecamatan
            </h2>
            <div className="space-y-2 overflow-hidden">
                <ScrollCarousel
                    images={IMAGES_ROW_1}
                    initialDirection={"forward"}
                />
                <ScrollCarousel
                    images={IMAGES_ROW_2}
                    initialDirection={"backward"}
                />
            </div>
        </section>
    );
}
