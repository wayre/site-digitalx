import Header from "@/components/Header";
import HeroSection from "@/components/home/HeroSection";
import ExamsSection from "@/components/home/ExamsSection";
import ExamCarousel from "@/components/home/ExamCarousel";
import ConveniosSection from "@/components/home/ConveniosSection";
import { AboutDigitalX } from "@/components/home/about-digitalx";
import PartnersBanner from "@/components/home/PartnerBanner";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Comments from "@/components/home/Comments";
import FaqSection from "@/components/home/FaqSection";
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
