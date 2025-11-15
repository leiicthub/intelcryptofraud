import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Search, Building2, FileText, Shield, CheckCircle2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutHero from "@/assets/about-hero.jpg";
import blockchainInvestigation from "@/assets/blockchain-investigation.jpg";
import exchangeCommunication from "@/assets/exchange-communication.jpg";
import caseEscalation from "@/assets/case-escalation.jpg";
import commitmentTrust from "@/assets/commitment-trust.jpg";

const AboutUs = () => {
  const exchanges = [
    "Binance", "Coinbase", "Kraken", "KuCoin", "Crypto.com",
    "OKX", "Gemini", "Bitfinex", "Bybit", "Blockchain.com"
  ];

  const commitments = [
    "No hacking",
    "No wallet intrusion",
    "No unauthorized access",
    "No shortcuts"
  ];

  const whyChoose = [
    { icon: Shield, title: "Transparent Processes", description: "Clear and open communication throughout your recovery journey" },
    { icon: Search, title: "Evidence-Backed Investigations", description: "Professional blockchain forensics and verified documentation" },
    { icon: Building2, title: "Real Exchange Communication", description: "Direct outreach to legitimate platforms and compliance teams" },
    { icon: CheckCircle2, title: "Ethical Recovery Methods", description: "Compliance-aligned procedures with full integrity" },
    { icon: TrendingUp, title: "Industry-Standard Tools", description: "Advanced blockchain-forensic technology for fund tracing" },
    { icon: FileText, title: "Dedicated Support", description: "Committed assistance for every client we work with" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={aboutHero} 
            alt="Blockchain network visualization" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              About Us – Crypto Fraud Intel (CFI)
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              At Crypto Fraud Intel (CFI), we specialize in helping victims of cryptocurrency scams recover their lost digital assets through legitimate, transparent, and evidence-driven methods. With crypto-related fraud increasing worldwide, we provide victims with a professional, structured, and ethically compliant recovery process—built on advanced blockchain analysis and direct cooperation with exchanges, compliance teams, and relevant authorities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Our Mission</h2>
            <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-primary/10">
              <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed">
                Our mission is simple: <span className="font-bold text-foreground bg-primary/10 px-2 py-1 rounded">To support victims of crypto fraud with ethical, trace-based recovery solutions that bring clarity, confidence, and direction.</span>
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We guide every client through each stage of the recovery journey—offering transparency, expert insight, and unwavering commitment to responsible action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">How We Work</h2>
          
          <div className="max-w-6xl mx-auto space-y-16">
            {/* 1. Blockchain Investigation */}
            <div className="bg-background rounded-2xl overflow-hidden shadow-xl border border-primary/10 hover:shadow-2xl transition-shadow">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img 
                    src={blockchainInvestigation} 
                    alt="Blockchain investigation and fund tracing" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent"></div>
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                      <Search className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-foreground">1. Blockchain Investigation & Fund Tracing</h3>
                  </div>
                  <p className="text-muted-foreground mb-4 text-lg">
                    We use advanced blockchain-forensic technology to trace stolen cryptocurrency across networks and wallets. Our investigations allow us to identify:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Where the funds were moved</li>
                    <li>Which wallets they interacted with</li>
                    <li>Whether they reached centralized exchanges or service providers</li>
                  </ul>
                  <p className="text-muted-foreground mt-4 font-semibold">
                    This detailed tracing forms the foundation of every recovery case.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Direct Outreach */}
            <div className="bg-background rounded-2xl overflow-hidden shadow-xl border border-primary/10 hover:shadow-2xl transition-shadow">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-10 order-2 md:order-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                      <Building2 className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-foreground">2. Direct Outreach to Exchanges</h3>
                  </div>
                  <p className="text-muted-foreground mb-4 text-lg">
                    When our analysis confirms that stolen funds traveled through a regulated exchange, we begin formal communication on the client's behalf. We regularly work with major industry platforms such as:
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {exchanges.map((exchange, index) => (
                      <div key={index} className="bg-primary/5 border border-primary/20 rounded-lg px-3 py-2 text-sm text-foreground font-medium text-center">
                        {exchange}
                      </div>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-3 font-semibold">Our communication includes:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Submitting blockchain-trace evidence</li>
                    <li>Notifying compliance and fraud-prevention teams</li>
                    <li>Requesting account reviews, freezes, or transaction flags</li>
                    <li>Providing all necessary documentation to support action</li>
                  </ul>
                </div>
                <div className="relative h-64 md:h-auto order-1 md:order-2">
                  <img 
                    src={exchangeCommunication} 
                    alt="Exchange communication workspace" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-background/20 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* 3. Coordinated Case Escalation */}
            <div className="bg-background rounded-2xl overflow-hidden shadow-xl border border-primary/10 hover:shadow-2xl transition-shadow">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img 
                    src={caseEscalation} 
                    alt="Case escalation and legal coordination" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent"></div>
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                      <FileText className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-foreground">3. Coordinated Case Escalation</h3>
                  </div>
                  <p className="text-muted-foreground mb-4 text-lg">
                    If required, we help clients:
                  </p>
                  <ul className="list-disc list-inside space-y-3 text-muted-foreground ml-4 text-lg">
                    <li>File official reports with law enforcement</li>
                    <li>Pair those reports with our blockchain analysis</li>
                    <li>Escalate cases to agencies or exchange compliance teams for further review</li>
                  </ul>
                  <p className="text-muted-foreground mt-6 font-semibold text-lg">
                    This significantly increases the chances of internal investigations, fund freezes, or extended review procedures by the platforms involved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src={commitmentTrust} 
            alt="Trust and commitment" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">Our Commitment</h2>
            <p className="text-xl md:text-2xl text-muted-foreground text-center mb-12">
              At CFI, we operate with <span className="text-foreground font-bold">full integrity and zero compromise</span>
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {commitments.map((commitment, index) => (
                <div key={index} className="flex items-center gap-4 bg-background/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary/20 hover:shadow-xl transition-shadow">
                  <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0" />
                  <span className="text-foreground font-semibold text-lg">{commitment}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 md:p-10 border-2 border-primary/30 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-10 h-10 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Evidence-Based Recovery</h3>
              </div>
              <p className="text-muted-foreground mb-4 text-lg font-semibold">All recovery efforts are based strictly on:</p>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground ml-4 text-lg mb-6">
                <li>Professional blockchain forensics</li>
                <li>Verified documentation</li>
                <li>Direct communication with legitimate channels</li>
                <li>Compliance-aligned procedures</li>
                <li>Ethical recovery practices</li>
              </ul>
              <div className="bg-background/60 rounded-xl p-6 border border-primary/20">
                <p className="text-foreground font-bold text-xl text-center">
                  Our goal is to deliver a trusted, safe, and effective recovery experience for every victim we assist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose CFI Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">Why Choose CFI?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {whyChoose.map((item, index) => (
              <div key={index} className="bg-background rounded-2xl p-8 shadow-lg border border-primary/10 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl mb-6 shadow-md">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/20 via-primary/10 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Need Our Expertise?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Our team is ready to help you recover your assets and fight fraud with proven, ethical methods
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider text-lg px-10 py-6 rounded-xl shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all">
            Submit an Enquiry
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
