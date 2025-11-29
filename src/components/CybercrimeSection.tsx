import { Shield, AlertTriangle, DollarSign, Coins, TrendingDown, Scale } from "lucide-react";
import internetFraud from "@/assets/cfi-arrest.jpg";
import investmentScams from "@/assets/investment-scam-arrest.jpg";
import cryptoTheft from "@/assets/crypto-arrest.jpg";
import forexFraud from "@/assets/forex-fraud.jpg";
import securitiesViolations from "@/assets/securities-violations.jpg";
import assetRecovery from "@/assets/asset-recovery.jpg";

const categories = [
  {
    icon: Shield,
    title: "Internet Fraud",
    description: "Investigation and recovery services for online scams and digital fraud",
    image: internetFraud,
  },
  {
    icon: DollarSign,
    title: "Investment Scams",
    description: "Asset recovery for fraudulent investment schemes and Ponzi schemes",
    image: investmentScams,
  },
  {
    icon: Coins,
    title: "Cryptocurrency Theft",
    description: "Blockchain forensics and crypto asset tracing services",
    image: cryptoTheft,
  },
  {
    icon: TrendingDown,
    title: "Forex Trading Fraud",
    description: "Recovery assistance for foreign exchange trading scams",
    image: forexFraud,
  },
  {
    icon: AlertTriangle,
    title: "Securities Violations",
    description: "Investigation of securities fraud and regulatory violations",
    image: securitiesViolations,
  },
  {
    icon: Scale,
    title: "Asset Recovery",
    description: "International asset tracing and recovery services",
    image: assetRecovery,
  },
];

export const CybercrimeSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-sm mb-4">
            Experts in cybercrime intelligence and covert surveillance
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Select a cybercrime to learn more
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group relative bg-card border border-border hover:border-primary transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
                  <Icon className="absolute bottom-4 left-4 h-10 w-10 text-primary" />
                </div>
                <div className="relative p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
