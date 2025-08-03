"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function Banner() {
    const plugins = [Autoplay({ delay: 3000 })];

    return (
        <header className="relative h-screen" aria-labelledby="banner-heading">
            <Carousel className="absolute z-0 inset-0" plugins={plugins}>
                <CarouselContent className="h-screen m-0">
                    <CarouselItem className="p-0 h-full">
                        <Image
                            className="brightness-60 object-cover h-full"
                            src="/gapura-makam-sultan-ageng-tirtayasa.webp"
                            alt="Gapura Makam Sultan Ageng Tirtayasa"
                            width={4160}
                            height={2080}
                        />
                    </CarouselItem>
                    <CarouselItem className="p-0">
                        <Image
                            className="brightness-60 object-cover h-full"
                            src="/makam-sultan-ageng-tirtayasa-1.webp"
                            alt="Makam Sultan Ageng Tirtayasa 1"
                            width={4160}
                            height={2080}
                        />
                    </CarouselItem>
                    <CarouselItem className="p-0">
                        <Image
                            className="brightness-60 object-cover h-full"
                            src="/makam-sultan-ageng-tirtayasa-2.webp"
                            alt="Makam Sultan Ageng Tirtayasa 2"
                            width={4160}
                            height={2080}
                        />
                    </CarouselItem>
                    <CarouselItem className="p-0">
                        <Image
                            className="brightness-60 object-cover h-full"
                            src="/bulan-bumi-tirtayasa.webp"
                            alt="Bulan di Bumi Tirtayasa"
                            width={4160}
                            height={2080}
                        />
                    </CarouselItem>
                    <CarouselItem className="p-0">
                        <Image
                            className="brightness-60 object-cover h-full"
                            src="/warung-bumi-tirtayasa.webp"
                            alt="Warung di Bumi Tirtayasa"
                            width={4160}
                            height={3120}
                        />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-5 top-1/2 -translate-y-1/2 z-[1]" />
                <CarouselNext className="absolute right-5 top-1/2 -translate-y-1/2 z-[1]" />
            </Carousel>
            <div className="absolute z-[1] top-1/2 left-1/2 -translate-1/2 h-[416px] w-[1080px] flex flex-col justify-center items-center font-poppins font-bold text-center text-white">
                <h1 className="text-5xl">WEBSITE</h1>
                <h1 className="text-7xl">KECAMATAN TIRTAYASA</h1>
            </div>
        </header>
    );
}
