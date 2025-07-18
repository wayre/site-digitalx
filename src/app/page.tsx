import Header from "@/components/Header1";
import HeroVideoSection from "@/components/home/HeroVideoSection";
import ExamsSection from "@/components/home/ExamsSection";
import ExamCarousel from "@/components/home/ExamCarousel";
import ConveniosSection from "@/components/home/ConveniosSection";
import { ExamesRadiologicosSobMedida } from "@/components/home/ExamesRadiologicosSobMedida";
import { AboutDigitalX } from "@/components/home/about-digitalx";
import PartnersBanner from "@/components/home/PartnerBanner";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Comments from "@/components/home/Comments";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Digital X - Exames Radiológicos Odontológicos",
  description:
    "Digital X - Clínica especializada em exames radiológicos odontológicos em Campo Grande/MS. Tomografia computadorizada cone beam, radiografias panorâmicas e mais.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroVideoSection />
        <AboutDigitalX />
        <PartnersBanner />
        <WhyChooseUs />
        {/* <ExamsSection /> */}
        <ExamesRadiologicosSobMedida />
        <ExamCarousel />
        <ConveniosSection />
        <Comments />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
