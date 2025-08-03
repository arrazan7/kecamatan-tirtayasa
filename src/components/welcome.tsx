import Image from "next/image";

export default function Welcome() {
    return (
        <section
            className="relative h-screen bg-white"
            aria-labelledby="welcome"
        >
            <div className="absolute top-1/2 left-1/2 -translate-1/2 flex justify-center items-center gap-[40px] h-[400px] w-[1100px]">
                <div className="w-[350px] flex flex-col justify-center items-center gap-3">
                    <Image
                        className="object-contain w-full h-full rounded-2xl"
                        src="/yayat-wahyu-hidayat.webp"
                        alt="Yayat Wahyu Hidayat"
                        width={571}
                        height={679}
                    />
                    <p className="font-poopins text-xl text-slate-600">
                        Tb. Yayat Wahyu Hidayat, S.H.
                    </p>
                </div>
                <div className="w-[750px]">
                    <h4 className="font-poppins font-bold text-2xl text-slate-700 mb-3">
                        KATA SAMBUTAN CAMAT TIRTAYASA
                    </h4>
                    <p className="font-roboto text-xl text-slate-600">
                        &quot;Dengan adanya Website ini di harapkan akan
                        terciptanya keterbukaan informasi terhadap publik
                        tentang program-program kerja yang ada di kecamatan dan
                        bisa mengangkat potensi yang ada di desa-desa di
                        lingkungan Wilayah Kecamatan Tirtayasa, serta bisa
                        meningkatkan pelayanan yang prima bagi masyarakat.&quot;
                        - Yayat Wahyu Hidayat
                    </p>
                </div>
            </div>
        </section>
    );
}
