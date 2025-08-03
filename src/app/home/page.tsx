import Banner from "@/components/banner";
import Welcome from "@/components/welcome";
import News from "@/components/news";
import Gallery from "@/components/gallery";

export default function Home() {
    return (
        <main>
            <h1 id="banner-heading" className="sr-only">
                Website Kecamatan Tirtayasa
            </h1>
            <Banner />
            <h1 id="welcome" className="sr-only">
                Kata Sambutan Camat Tirtayasa
            </h1>
            <Welcome />
            <h1 id="news" className="sr-only">
                Berita Kecamatan Tirtayasa
            </h1>
            <News />
            <h1 id="gallery" className="sr-only">
                Galeri Kecamatan Tirtayasa
            </h1>
            <Gallery />
        </main>
    );
}
