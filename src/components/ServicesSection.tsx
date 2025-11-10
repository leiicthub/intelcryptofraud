import { Shield, Search, DollarSign, Globe, Users, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Search,
    title: "Scam Investigation Services",
    description: "Comprehensive investigation services to protect individuals and businesses from financial losses. Our experienced team specializes in uncovering fraudulent activities and providing crucial evidence for legal action.",
  },
  {
    icon: Shield,
    title: "Cyber Investigation Services",
    description: "Cover a broad spectrum of cybercrime, from identity theft and phishing to sophisticated digital fraud. Global reach and expertise to track cyber criminals and recover stolen funds.",
  },
  {
    icon: DollarSign,
    title: "Crypto Asset Recovery",
    description: "Specialized services to trace and recover funds lost to fraudulent cryptocurrency schemes. Advanced blockchain tracing technology to follow money trails and uncover fraudsters.",
  },
  {
    icon: FileText,
    title: "Corporate Fraud Investigation",
    description: "Highly experienced in identifying fraudulent activities within organizations. In-depth investigations help uncover the truth behind suspicious activities and protect business assets.",
  },
  {
    icon: Globe,
    title: "Asset Tracing Services",
    description: "Vital component of fraud investigations. Our team excels in locating hidden assets tied to fraudulent activities using advanced techniques across multiple jurisdictions.",
  },
  {
    icon: Users,
    title: "International Investigations",
    description: "Operating across multiple countries with deep understanding of local laws and regulations. Efficient and discreet investigations conducted across borders.",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Threat of Cybercrime
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            For many years, we have been investigating, exposing, and disrupting financially motivated criminals and cyber fraud syndicates worldwide. We deliver valuable protection through targeted intelligence operations, covert surveillance, and by regularly referring evidence to law enforcement agencies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border p-8 hover:border-primary transition-all duration-300 group"
              >
                <Icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider">
            Learn More About Our Services
          </Button>
        </div>
      </div>
    </section>
  );
};
