"use client";

import Image from "next/image";
import Link from "next/link";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Button } from "@/components/ui/button";

export default function News() {
    return (
        <section
            className="h-fit bg-sky-300 px-52 py-32"
            aria-labelledby="news"
        >
            <h2 className="font-poppins font-bold text-5xl text-center text-slate-800">
                Berita Kecamatan
            </h2>
            <div className="mt-10 grid grid-cols-3 gap-10">
                <div className="bg-white border border-slate-400 rounded-2xl shadow-md overflow-hidden h-92 w-full cursor-pointer">
                    <Image
                        className="object-cover w-full h-60"
                        src="/berita/apel-hari-kesadaran-nasional.jpeg"
                        alt="apel hari kesadaran nasional"
                        width={1600}
                        height={1600}
                    />
                    <h4 className="py-2 px-3 font-poppins font-semibold text-slate-700 text-lg line-clamp-2">
                        Apel Hari Kesadaran Nasional
                    </h4>
                    <div className="pt-1 px-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <CalendarMonthRoundedIcon fontSize="small" />
                            <span className="font-roboto font-light text-slate-700 text-sm">
                                17 Januari 2024
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <VisibilityRoundedIcon fontSize="small" />
                            <span className="font-roboto font-light text-slate-700 text-sm">
                                204
                            </span>
                        </div>
                    </div>
                    <div className="py-1 px-3 flex items-center gap-2">
                        <CreateRoundedIcon fontSize="small" />
                        <span className="font-roboto font-light text-slate-700 text-sm">
                            Administrator
                        </span>
                    </div>
                </div>
                <div className="bg-white border border-slate-400 rounded-2xl shadow-md overflow-hidden h-92 w-full cursor-pointer">
                    <Image
                        className="object-cover w-full h-60"
                        src="/berita/apel-peringatan-hari-kartini-2024.jpeg"
                        alt="apel peringatan hari kartini 2024"
                        width={1600}
                        height={1600}
                    />
                    <h4 className="py-2 px-3 font-poppins font-semibold text-slate-700 text-lg line-clamp-2">
                        Apel Peringatan Hari Kartini 2024
                    </h4>
                    <div className="pt-1 px-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <CalendarMonthRoundedIcon fontSize="small" />
                            <span className="font-roboto font-light text-slate-700 text-sm">
                                21 April 2024
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <VisibilityRoundedIcon fontSize="small" />
                            <span className="font-roboto font-light text-slate-700 text-sm">
                                623
                            </span>
                        </div>
                    </div>
                    <div className="py-1 px-3 flex items-center gap-2">
                        <CreateRoundedIcon fontSize="small" />
                        <span className="font-roboto font-light text-slate-700 text-sm">
                            Administrator
                        </span>
                    </div>
                </div>
                <div className="bg-white border border-slate-400 rounded-2xl shadow-md overflow-hidden h-92 w-full cursor-pointer">
                    <Image
                        className="object-cover w-full h-60"
                        src="/berita/pelaksanaan-isbat-nikah-di-kecamatan-tirtayasa.jpeg"
                        alt="pelaksanaan isbat nikah di kecamatan tirtayasa"
                        width={1600}
                        height={1600}
                    />
                    <h4 className="py-2 px-3 font-poppins font-semibold text-slate-700 text-lg line-clamp-2">
                        Pelaksanaan Isbat Nikah di Kecamatan Tirtayasa
                    </h4>
                    <div className="pt-1 px-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <CalendarMonthRoundedIcon fontSize="small" />
                            <span className="font-roboto font-light text-slate-700 text-sm">
                                23 Juli 2024
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <VisibilityRoundedIcon fontSize="small" />
                            <span className="font-roboto font-light text-slate-700 text-sm">
                                1104
                            </span>
                        </div>
                    </div>
                    <div className="py-1 px-3 flex items-center gap-2">
                        <CreateRoundedIcon fontSize="small" />
                        <span className="font-roboto font-light text-slate-700 text-sm">
                            Administrator
                        </span>
                    </div>
                </div>
                <div className="bg-white border border-slate-400 rounded-2xl shadow-md overflow-hidden h-92 w-full cursor-pointer">
                    <Image
                        className="object-cover w-full h-60"
                        src="/berita/pelatihan-anggota-pamsung-tps-se-kectirtayasa-pada-pemilu-2024.jpeg"
                        alt="pelatihan anggota pamsung tps se kec.tirtayasa pada pemilu 2024"
                        width={1600}
                        height={1600}
                    />
                    <h4 className="py-2 px-3 font-poppins font-semibold text-slate-700 text-lg line-clamp-2">
                        Pelatihan Anggota Pamsung TPS se Kec.Tirtayasa pada
                        Pemilu 2024
                    </h4>
                    <div className="pt-1 px-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <CalendarMonthRoundedIcon fontSize="small" />
                            <span className="font-roboto font-light text-slate-700 text-sm">
                                27 Januari 2024
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <VisibilityRoundedIcon fontSize="small" />
                            <span className="font-roboto font-light text-slate-700 text-sm">
                                732
                            </span>
                        </div>
                    </div>
                    <div className="py-1 px-3 flex items-center gap-2">
                        <CreateRoundedIcon fontSize="small" />
                        <span className="font-roboto font-light text-slate-700 text-sm">
                            Administrator
                        </span>
                    </div>
                </div>
                <div className="bg-white border border-slate-400 rounded-2xl shadow-md overflow-hidden h-92 w-full cursor-pointer">
                    <Image
                        className="object-cover w-full h-60"
                        src="/berita/upacara-hari-kesadaran-nasional-dirangkai-dengan-hari-bela-negara.jpeg"
                        alt="upacara hari kesadaran nasional dirangkai dengan hari bela negara"
                        width={1600}
                        height={1600}
                    />
                    <h4 className="py-2 px-3 font-poppins font-semibold text-slate-700 text-lg line-clamp-2">
                        Upacara Hari Kesadaran Nasional Dirangkai dengan Hari
                        Bela Negara
                    </h4>
                    <div className="pt-1 px-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <CalendarMonthRoundedIcon fontSize="small" />
                            <span className="font-roboto font-light text-slate-700 text-sm">
                                19 Desember 2024
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <VisibilityRoundedIcon fontSize="small" />
                            <span className="font-roboto font-light text-slate-700 text-sm">
                                38
                            </span>
                        </div>
                    </div>
                    <div className="py-1 px-3 flex items-center gap-2">
                        <CreateRoundedIcon fontSize="small" />
                        <span className="font-roboto font-light text-slate-700 text-sm">
                            Administrator
                        </span>
                    </div>
                </div>
                <div className="bg-white border border-slate-400 rounded-2xl shadow-md overflow-hidden h-92 w-full cursor-pointer">
                    <Image
                        className="object-cover w-full h-60"
                        src="/berita/upacara-peringatan-hari-kesaktian-pancasila.jpeg"
                        alt="upacara peringatan hari kesaktian pancasila"
                        width={1600}
                        height={1600}
                    />
                    <h4 className="py-2 px-3 font-poppins font-semibold text-slate-700 text-lg line-clamp-2">
                        Upacara Peringatan Hari Kesaktian Pancasila
                    </h4>
                    <div className="pt-1 px-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <CalendarMonthRoundedIcon fontSize="small" />
                            <span className="font-roboto font-light text-slate-700 text-sm">
                                01 Oktober 2024
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <VisibilityRoundedIcon fontSize="small" />
                            <span className="font-roboto font-light text-slate-700 text-sm">
                                491
                            </span>
                        </div>
                    </div>
                    <div className="py-1 px-3 flex items-center gap-2">
                        <CreateRoundedIcon fontSize="small" />
                        <span className="font-roboto font-light text-slate-700 text-sm">
                            Administrator
                        </span>
                    </div>
                </div>
            </div>
            <div className="mt-10 flex items-center justify-center">
                <Link href="/news">
                    <Button
                        className="flex items-center gap-2 rounded-2xl bg-white border-none cursor-pointer"
                        variant="outline"
                        size="lg"
                    >
                        <span className="-translate-y-0.25 font-roboto text-slate-700 text-lg">
                            Selengkapnya
                        </span>
                        <KeyboardDoubleArrowRightIcon className="-mr-0.5" />
                    </Button>
                </Link>
            </div>
        </section>
    );
}
