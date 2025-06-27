import Header from "@/components/parceria/Header";
import HeroSection from "@/components/parceria/HeroSection";
import WhyDigitalXSection from "@/components/parceria/WhyDigitalXSection";
import BenefitsSection from "@/components/parceria/BenefitsSection";
import ServicesSection from "@/components/parceria/ServicesSection";
import PartnershipSection from "@/components/parceria/PartnershipSection";
import ContactSection from "@/components/parceria/ContactSection";
import Footer from "@/components/parceria/Footer";

const ParceriaPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WhyDigitalXSection />
      <BenefitsSection />
      <ServicesSection />
      <PartnershipSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default ParceriaPage;
