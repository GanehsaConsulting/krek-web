import { AboutUs } from "@/components/AboutUs";
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
      <Banner />
      <AboutUs id={'tentang-kami'} />
      <VisionMision id={'visi-&-misi'} />
      <WhyUs />
      <Products id={'produk'} />
      <Services id={'layanan'} />
      <Faqs id={'faq'} />
      <Contact id={'kontak'} />
    </>
  );
}
