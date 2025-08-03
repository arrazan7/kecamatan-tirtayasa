"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll, { AutoScrollOptionsType } from "embla-carousel-auto-scroll";
import Image from "next/image";

interface ScrollCarouselProps {
    images: string[];
    initialDirection?: "forward" | "backward";
}

export function ScrollCarousel({
    images,
    initialDirection = "forward",
}: ScrollCarouselProps) {
    // ❌ Hapus pengaruh dari framer-motion
    // Karena arah sudah dikontrol dari luar (Gallery)

    const autoScrollOptions = React.useMemo<AutoScrollOptionsType>(
        () => ({
            speed: 1,
            direction: initialDirection,
            playOnInit: true,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        }),
        [initialDirection]
    );

    const autoScrollPlugin = React.useMemo(
        () => AutoScroll(autoScrollOptions),
        [autoScrollOptions]
    );

    const [emblaRef] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
            dragFree: true,
        },
        [autoScrollPlugin]
    );

    return (
        <div ref={emblaRef}>
            <div className="flex">
                {[...images, ...images].map((img, i) => (
                    <Image
                        key={i}
                        src={`/galeri/${img}`}
                        alt={img}
                        width={1600}
                        height={1200}
                        className="m-2 object-cover rounded-xl flex-shrink-0 w-96 h-60"
                    />
                ))}
            </div>
        </div>
    );
}
