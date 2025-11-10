import { Shield, DollarSign, Bitcoin, TrendingUp, Heart, Mail, User, Building, Repeat, Users, Trophy } from "lucide-react";

const cybercrimes = [
  { name: "Investments", icon: TrendingUp },
  { name: "Cryptocurrency", icon: Bitcoin },
  { name: "Forex", icon: DollarSign },
  { name: "Ransomware & Malware", icon: Shield },
  { name: "Fake Charities", icon: Heart },
  { name: "Phishing", icon: Mail },
  { name: "Identity Theft", icon: User },
  { name: "Company Director", icon: Building },
  { name: "Ponzi Scheme", icon: Repeat },
  { name: "Dating & Romance", icon: Users },
  { name: "Betting & Sports", icon: Trophy },
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
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {cybercrimes.map((crime, index) => {
            const Icon = crime.icon;
            return (
              <button
                key={index}
                className="group p-6 bg-background border border-border hover:border-primary transition-all duration-300 text-left"
              >
                <Icon className="h-6 w-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-foreground text-sm font-medium group-hover:text-primary transition-colors">
                  {crime.name}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
