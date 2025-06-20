import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExamsSection from "@/components/ExamsSection";
import ExamCarousel from "@/components/ExamCarousel";
import ConveniosSection from "@/components/ConveniosSection";
import { AboutDigitalX } from "@/components/about-digitalx";
import PartnersBanner from "@/components/PartnerBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import Comments from "@/components/Comments";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
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
        <HeroSection />
        <AboutDigitalX />
        <PartnersBanner />
        <WhyChooseUs />
        <ExamsSection />
        <ExamCarousel />
        <ConveniosSection />
        <Comments />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
