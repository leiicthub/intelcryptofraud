import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Search, Building2, FileText, Shield, CheckCircle2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      <section className="bg-gradient-to-br from-primary/10 via-background to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Us – Crypto Fraud Intel (CFI)
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At Crypto Fraud Intel (CFI), we specialize in helping victims of cryptocurrency scams recover their lost digital assets through legitimate, transparent, and evidence-driven methods. With crypto-related fraud increasing worldwide, we provide victims with a professional, structured, and ethically compliant recovery process—built on advanced blockchain analysis and direct cooperation with exchanges, compliance teams, and relevant authorities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Our mission is simple: <span className="font-semibold text-foreground">To support victims of crypto fraud with ethical, trace-based recovery solutions that bring clarity, confidence, and direction.</span>
            </p>
            <p className="text-lg text-muted-foreground">
              We guide every client through each stage of the recovery journey—offering transparency, expert insight, and unwavering commitment to responsible action.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">How We Work</h2>
          
          <div className="max-w-5xl mx-auto space-y-12">
            {/* 1. Blockchain Investigation */}
            <div className="bg-background rounded-lg p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">1. Blockchain Investigation & Fund Tracing</h3>
                  <p className="text-muted-foreground mb-4">
                    We use advanced blockchain-forensic technology to trace stolen cryptocurrency across networks and wallets. Our investigations allow us to identify:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Where the funds were moved</li>
                    <li>Which wallets they interacted with</li>
                    <li>Whether they reached centralized exchanges or service providers</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    This detailed tracing forms the foundation of every recovery case.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Direct Outreach */}
            <div className="bg-background rounded-lg p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">2. Direct Outreach to Exchanges & Crypto Companies</h3>
                  <p className="text-muted-foreground mb-4">
                    When our analysis confirms that stolen funds traveled through a regulated exchange, we begin formal communication on the client's behalf. We regularly work with major industry platforms such as:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                    {exchanges.map((exchange, index) => (
                      <div key={index} className="bg-muted/50 rounded px-3 py-2 text-sm text-foreground">
                        {exchange}
                      </div>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-3">Our communication includes:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Submitting blockchain-trace evidence</li>
                    <li>Notifying compliance and fraud-prevention teams</li>
                    <li>Requesting account reviews, freezes, or transaction flags (when possible)</li>
                    <li>Providing all necessary documentation to support action</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    Many exchanges have established fraud-response protocols and collaborate when presented with verified evidence.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Coordinated Case Escalation */}
            <div className="bg-background rounded-lg p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">3. Coordinated Case Escalation</h3>
                  <p className="text-muted-foreground mb-4">
                    If required, we help clients:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>File official reports with law enforcement</li>
                    <li>Pair those reports with our blockchain analysis</li>
                    <li>Escalate cases to agencies or exchange compliance teams for further review</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    This significantly increases the chances of internal investigations, fund freezes, or extended review procedures by the platforms involved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Our Commitment</h2>
            <p className="text-lg text-muted-foreground text-center mb-8">
              At CFI, we operate with full integrity and zero compromise:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {commitments.map((commitment, index) => (
                <div key={index} className="flex items-center gap-3 bg-muted/30 rounded-lg p-4">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{commitment}</span>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
              <p className="text-muted-foreground mb-3">All recovery efforts are based strictly on:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Professional blockchain forensics</li>
                <li>Verified documentation</li>
                <li>Direct communication with legitimate channels</li>
                <li>Compliance-aligned procedures</li>
                <li>Ethical recovery practices</li>
              </ul>
              <p className="text-foreground font-semibold mt-4">
                Our goal is to deliver a trusted, safe, and effective recovery experience for every victim we assist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose CFI Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Choose CFI?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whyChoose.map((item, index) => (
              <div key={index} className="bg-background rounded-lg p-6 shadow-sm">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
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
            Need Our Expertise?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team is ready to help you recover your assets and fight fraud
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider">
            Submit an Enquiry
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
