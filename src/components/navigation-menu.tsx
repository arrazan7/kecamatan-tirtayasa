"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function NavigationMenuDemo() {
    const [scrolled, setScrolled] = React.useState(false);
    const navRef = React.useRef<HTMLElement>(null);
    const pathName = usePathname();

    const withBackground = [
        "/",
        "/news",
        "/visi-misi",
        "/history",
        "/complaint",
    ];
    const showBackground = withBackground.includes(pathName);

    React.useEffect(() => {
        const handleScroll = () => {
            const navHeight = navRef.current?.offsetHeight || 0;
            const threshold = window.innerHeight - navHeight;
            setScrolled(window.scrollY > threshold);
        };

        handleScroll(); // trigger awal
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return (
        <>
            <h1 id="main-navigation" className="sr-only">
                Menu Navigasi Website
            </h1>
            <nav
                className="fixed z-50 top-0 left-0 w-full flex justify-center pointer-events-none"
                aria-labelledby="main-navigation"
            >
                <motion.div
                    initial={false}
                    animate={
                        scrolled
                            ? {
                                  marginTop: "1rem",
                                  width: "45%",
                                  borderRadius: "9999px",
                                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                                  backdropFilter: "blur(8px)",
                              }
                            : {
                                  marginTop: "0rem",
                                  width: "100%",
                                  borderRadius: "0px",
                                  backgroundColor: showBackground
                                      ? "transparent" // gradient handle via class
                                      : "rgba(0, 0, 0, 0)",
                                  backdropFilter: "blur(0px)",
                              }
                    }
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className={`pointer-events-auto ${
                        !scrolled && showBackground
                            ? "bg-linear-to-b from-blue-950 to-transparent"
                            : ""
                    }`}
                >
                    <NavigationMenu
                        ref={navRef}
                        viewport={false}
                        className="w-full text-white px-4 py-4"
                    >
                        <NavigationMenuList className="flex gap-5 justify-center">
                            <NavItem href="/home" label="Beranda" />
                            <NavItem href="/news" label="Berita" />
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent hover:bg-black hover:text-white text-xl rounded-full">
                                    <span className="mb-0.5">Profil</span>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[200px] gap-4">
                                        <li>
                                            <NavSubItem
                                                href="/visi-misi"
                                                label="Visi Misi"
                                            />
                                            <NavSubItem
                                                href="/struktur-organisasi"
                                                label="Struktur Organisasi"
                                            />
                                            <NavSubItem
                                                href="/history"
                                                label="Sejarah"
                                            />
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent hover:bg-black hover:text-white text-xl rounded-full">
                                    <span className="mb-0.5">Desa</span>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[200px] gap-4">
                                        <li>
                                            <NavSubItem
                                                href="/tirtayasa"
                                                label="Tirtayasa"
                                            />
                                            <NavSubItem
                                                href="/tengkurak"
                                                label="Tengkurak"
                                            />
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavItem href="/complaint" label="Pengaduan" />
                        </NavigationMenuList>
                    </NavigationMenu>
                </motion.div>
            </nav>
        </>
    );
}

function NavItem({ href, label }: { href: string; label: string }) {
    return (
        <NavigationMenuItem>
            <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-black hover:text-white rounded-full`}
            >
                <Link href={href} className="text-xl">
                    <span className="mb-0.5">{label}</span>
                </Link>
            </NavigationMenuLink>
        </NavigationMenuItem>
    );
}

function NavSubItem({ href, label }: { href: string; label: string }) {
    return (
        <NavigationMenuLink asChild>
            <Link href={href}>{label}</Link>
        </NavigationMenuLink>
    );
}
