export default function VisiMisi() {
    return (
        <div className="text-center bg-white h-fit flex flex-col items-center justify-center">
            <h1 className="bg-[url('/header-bg.webp')] bg-cover bg-repeat-round w-full h-[416px] pt-36 text-center font-poppins font-bold text-[70px] text-white">
                VISI & MISI
            </h1>
            <div className="mt-68 relative w-full">
                <p className="absolute top-1/2 left-1/2 -translate-1/2 z-0 font-poppins font-bold text-[300px] bg-linear-to-b from-sky-200 to-purple-200 bg-clip-text text-transparent">
                    Vision
                </p>
                <p className="absolute top-1/2 left-1/2 -translate-1/2 z-[1] font-roboto text-4xl text-black/70">
                    Terwujudnya Kabupaten Serang yang semakin maju, sejahtera,
                    berkeadilan dan agamis.
                </p>
            </div>
            <div className="mt-96 mb-60 relative w-full">
                <p className="absolute top-1/2 left-1/2 -translate-1/2 z-0 font-poppins font-bold text-[300px] bg-linear-to-b from-purple-200 to-sky-200 bg-clip-text text-transparent">
                    Mision
                </p>
                <p className="absolute top-1/2 left-1/2 -translate-1/2 z-[1] font-roboto text-4xl text-black/70">
                    Meningkatkan tata kelola pemerintahan yang baik serta
                    pelayanan publik yang prima di dukung kapasitas birokrasi
                    yang berintegritas, kompeten dan profesional.
                </p>
            </div>
        </div>
    );
}
