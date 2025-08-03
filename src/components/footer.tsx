"use client";

import LocationPinIcon from "@mui/icons-material/LocationPin";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <h1 id="footer" className="sr-only">
                Footer Kecamatan Tirtayasa
            </h1>
            <footer
                className="bg-white bg-[url('/footer-bg.webp')] bg-cover bg-repeat-round px-52 pt-32 pb-10 w-full text-white"
                aria-labelledby="footer"
            >
                <div className="flex">
                    <div className="basis-1/2">
                        <h6 className="font-poppins font-medium text-2xl">
                            Tentang Kami
                        </h6>
                        <div className="flex items-center gap-3 mt-7">
                            <LocationPinIcon />
                            <p className="font-roboto font-light">
                                X8GH+CRW, Jl. Sultan Agung Tirtayasa, Tirtayasa,
                                Kec. Tirtayasa, Kabupaten Serang, Banten 42193
                            </p>
                        </div>
                        <div className="flex items-center gap-3 mt-4">
                            <LocalPhoneIcon />
                            <p className="font-roboto font-light">
                                (0000) 000-000
                            </p>
                        </div>
                        <div className="flex items-center gap-3 mt-4">
                            <EmailIcon />
                            <p className="font-roboto font-light">
                                kecamatan@serangkab.go.id
                            </p>
                        </div>
                    </div>
                    <div className="basis-1/2">
                        <h6 className="font-poppins font-medium text-2xl">
                            Ikuti Kami
                        </h6>
                        <div className="flex items-center gap-3 mt-7">
                            <Link href="https://web.facebook.com/">
                                <FacebookIcon fontSize="large" />
                            </Link>
                            <Link href="https://x.com/">
                                <XIcon fontSize="large" />
                            </Link>
                            <Link href="https://www.instagram.com/serangkab/">
                                <InstagramIcon fontSize="large" />
                            </Link>
                            <Link href="https://www.youtube.com/@prokopimkabupatenserang">
                                <YouTubeIcon fontSize="large" />
                            </Link>
                        </div>
                    </div>
                </div>

                <p className="font-roboto font-extralight text-center text-xs mt-20">
                    Copyright © July 2025 - KKN-PPM UGM Sagara Tirtayasa 2025
                    Periode II - Desa Tirtayasa, Kec.Tirtayasa, Kab.Serang. All
                    rights reserved.
                </p>
            </footer>
        </>
    );
}
