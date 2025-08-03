import Image from "next/image";

export default function Home() {
    return (
        <div>
            <div className="relative h-screen">
                <Image
                    className="absolute z-0 object-cover w-full h-full"
                    src="/makam-sultan-ageng-tirtayasa.webp"
                    alt="Makam Sultan Ageng Tirtayasa"
                    width={4160}
                    height={2080}
                />
                <div className="absolute z-[1] top-1/2 left-1/2 -translate-1/2 h-[416px] w-[1080px] bg-white/30 backdrop-blur-sm flex flex-col justify-center items-center font-poppins font-bold text-center text-white">
                    <h1 className="text-5xl">Tengkurak</h1>
                    <h1 className="text-7xl">KECAMATAN TIRTAYASA</h1>
                </div>
            </div>
        </div>
    );
}
