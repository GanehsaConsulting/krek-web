import { AboutUs } from "@/components/AboutUs";
import { AnimateOnce } from "@/components/AnimateOnce";
import { Banner } from "@/components/Banner";
import { Contact } from "@/components/Contac";
import { Faqs } from "@/components/Faq";
import { Products } from "@/components/Products";
import { Services } from "@/components/Services";
import { VisionMision } from "@/components/VisionMision";
import { WhyUs } from "@/components/WhyUs";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>PT KREK Transformasi Digital - Platform Fashion Wanita Terdepan di Indonesia</title>
        <meta name="description" content="Temukan koleksi fashion wanita terkini di PT KREK Transformasi Digital. Kami menawarkan produk berkualitas tinggi, desain modern, dan layanan pelanggan terbaik untuk kemudahan belanja online Anda." />
        <meta name="keywords" content="fashion wanita, dress, blouse, celana, rok, jaket, PT KREK Transformasi Digital, e-commerce fashion, belanja online, fashion berkualitas, trendy, pakaian stylish, layanan pelanggan terbaik, pengiriman cepat" />
        <meta name="author" content="PT KREK Transformasi Digital" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.krekdigital.co.id/" />
        <meta property="og:title" content="PT KREK Transformasi Digital - Fashion Wanita Berkualitas di Indonesia" />
        <meta property="og:description" content="Platform fashion online dengan pilihan dress, blouse, celana, rok, dan jaket stylish yang tersedia untuk wanita di seluruh Indonesia." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2940&auto=format&fit=crop" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.krekdigital.co.id/" />
        <meta property="twitter:title" content="PT KREK Transformasi Digital - Fashion Wanita Berkualitas di Indonesia" />
        <meta property="twitter:description" content="Koleksi fashion wanita berkualitas, desain terkini, dan layanan pelanggan responsif untuk belanja fashion Anda." />
        <meta property="twitter:image" content="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2940&auto=format&fit=crop" />

        {/* Structured Data - JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "PT KREK Transformasi Digital",
            "url": "https://www.krekdigital.co.id/",
            "logo": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2940&auto=format&fit=crop",
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+62-123-456-7890",
              "contactType": "Customer Service",
              "areaServed": "ID",
              "availableLanguage": ["Indonesian", "English"]
            }],
            "sameAs": [
              "https://www.facebook.com/krektransformasi",
              "https://www.instagram.com/krektransformasi",
              "https://wa.me/6281234567890"
            ],
            "description": "PT KREK Transformasi Digital adalah perusahaan fashion online yang menyediakan koleksi pakaian wanita berkualitas dan stylish, menjangkau pelanggan di seluruh Indonesia."
          })}
        </script>
      </Head>
      <AnimateOnce animation={'animate__fadeInDownBig'}>
        <Banner />
      </AnimateOnce>
      <AnimateOnce animation={'animate__fadeInUpBig'}>
        <AboutUs id={'tentang-kami'} />
      </AnimateOnce>

      <AnimateOnce animation={'animate__fadeInUpBig'}>
        <VisionMision id={'visi-&-misi'} />
      </AnimateOnce>

      <AnimateOnce animation={'animate__fadeInUpBig'}>
        <Products id={'produk'} />
      </AnimateOnce>

      <AnimateOnce animation={'animate__fadeInUpBig'}>
        <WhyUs />
      </AnimateOnce>

      <AnimateOnce animation={'animate__fadeInUpBig'}>
        <Services id={'layanan'} />
      </AnimateOnce>

      <AnimateOnce animation={'animate__fadeInUpBig'}>
        <Faqs id={'faq'} />
      </AnimateOnce>

      <AnimateOnce animation={'animate__fadeInUpBig'}>
        <Contact id={'kontak'} />
      </AnimateOnce>

    </>
  );
}
