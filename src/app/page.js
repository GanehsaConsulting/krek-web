import { AboutUs } from "@/components/AboutUs";
import { AnimateOnce } from "@/components/AnimateOnce";
import { Banner } from "@/components/Banner";
import { Contact } from "@/components/Contac";
import { Faqs } from "@/components/Faq";
import { Products } from "@/components/Products";
import { Services } from "@/components/Services";
import { VisionMision } from "@/components/VisionMision";
import { WhyUs } from "@/components/WhyUs";

export default function Home() {
  return (
    <>
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
