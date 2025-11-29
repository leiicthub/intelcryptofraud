import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Shield, TrendingUp, FileCheck, Search, DollarSign, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import internetFraudImg from "@/assets/cfi-arrest.jpg";
import investmentScamsImg from "@/assets/investment-scams.jpg";
import cryptoTheftImg from "@/assets/crypto-theft.jpg";
import forexFraudImg from "@/assets/forex-fraud.jpg";
import securitiesImg from "@/assets/securities-violations.jpg";
import assetRecoveryImg from "@/assets/asset-recovery.jpg";

const Services = () => {
  const services = [
    {
      id: "internet-fraud",
      icon: Shield,
      title: "Internet Fraud Investigation",
      image: internetFraudImg,
      description: "Comprehensive investigation of online scams, phishing attacks, and identity theft",
      features: [
        "Email fraud and phishing investigation",
        "Identity theft recovery",
        "Online marketplace scams",
        "Social media fraud detection",
        "Digital evidence collection"
      ]
    },
    {
      id: "investment-scams",
      icon: TrendingUp,
      title: "Investment Scam Recovery",
      image: investmentScamsImg,
      description: "Expert recovery services for Ponzi schemes, fake investment platforms, and securities fraud",
      features: [
        "Ponzi scheme investigation",
        "Fake investment platform exposure",
        "Asset tracing and recovery",
        "Investor protection",
        "Regulatory compliance support"
      ]
    },
    {
      id: "crypto-theft",
      icon: DollarSign,
      title: "Cryptocurrency Theft Recovery",
      image: cryptoTheftImg,
      description: "Specialized blockchain analysis and recovery of stolen digital assets",
      features: [
        "Blockchain transaction tracing",
        "Wallet forensics",
        "Exchange cooperation",
        "Smart contract analysis",
        "NFT fraud investigation"
      ]
    },
    {
      id: "forex-fraud",
      icon: Globe,
      title: "Forex Trading Fraud",
      image: forexFraudImg,
      description: "Investigation of fraudulent forex brokers and trading platforms",
      features: [
        "Broker verification",
        "Trading platform analysis",
        "Signal service fraud",
        "Account manipulation investigation",
        "Fund recovery assistance"
      ]
    },
    {
      id: "securities",
      icon: FileCheck,
      title: "Securities Violations",
      image: securitiesImg,
      description: "Expert investigation of securities fraud and regulatory violations",
      features: [
        "Insider trading investigation",
        "Market manipulation detection",
        "Compliance breach analysis",
        "Regulatory reporting support",
        "Civil litigation support"
      ]
    },
    {
      id: "asset-recovery",
      icon: Search,
      title: "Asset Recovery",
      image: assetRecoveryImg,
      description: "Comprehensive asset tracing and recovery services worldwide",
      features: [
        "International asset tracing",
        "Bank account investigation",
        "Real estate fraud recovery",
        "Hidden asset discovery",
        "Legal enforcement support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive fraud investigation and asset recovery solutions
            </p>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue={services[0].id} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
              {services.map((service) => (
                <TabsTrigger key={service.id} value={service.id} className="text-sm">
                  {service.title.split(' ')[0]}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {services.map((service) => (
              <TabsContent key={service.id} value={service.id}>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-4">What We Offer:</h3>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider" asChild>
                      <a href="/consultation">Request Consultation</a>
                    </Button>
                  </div>
                  
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Investigation Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Initial Consultation", description: "Free case assessment and strategy development" },
              { step: "02", title: "Evidence Collection", description: "Gathering and securing all relevant documentation" },
              { step: "03", title: "Investigation", description: "Deep analysis using advanced forensic tools" },
              { step: "04", title: "Recovery", description: "Asset tracing and legal enforcement action" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Start Your Investigation?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation with our expert investigators
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider" asChild>
              <a href="/consultation">Submit an Enquiry</a>
            </Button>
            <Button variant="outline" className="font-bold uppercase tracking-wider">
              Call Us Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
