import { AlertBanner } from "@/components/AlertBanner";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { CybercrimeSection } from "@/components/CybercrimeSection";
import { MediaSection } from "@/components/MediaSection";
import { CredentialsSection } from "@/components/CredentialsSection";
import { HeadlinesSection } from "@/components/HeadlinesSection";
import { ServicesSection } from "@/components/ServicesSection";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AlertBanner />
      <Navigation />
      <Hero />
      <CybercrimeSection />
      <MediaSection />
      <CredentialsSection />
      <HeadlinesSection />
      <ServicesSection />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
