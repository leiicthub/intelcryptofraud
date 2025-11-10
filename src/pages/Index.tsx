import { AlertBanner } from "@/components/AlertBanner";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { CybercrimeSection } from "@/components/CybercrimeSection";
import { MediaSection } from "@/components/MediaSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AlertBanner />
      <Navigation />
      <Hero />
      <CybercrimeSection />
      <MediaSection />
    </div>
  );
};

export default Index;
