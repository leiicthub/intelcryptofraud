import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Newspaper, Tv, Radio, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import mediaCoverage1 from "@/assets/media-coverage-1.jpg";
import mediaCoverage2 from "@/assets/media-coverage-2.jpg";
import mediaCoverage3 from "@/assets/media-coverage-3.jpg";

const Media = () => {
  const pressReleases = [
    {
      date: "March 2024",
      title: "CryptoFraudIntel Recovers $50M in International Crypto Scam",
      excerpt: "Our team successfully traced and recovered $50 million in stolen cryptocurrency across multiple jurisdictions...",
      category: "Press Release"
    },
    {
      date: "February 2024",
      title: "Partnership with Global Law Enforcement Agencies Announced",
      excerpt: "CryptoFraudIntel expands collaboration with Interpol and FBI to combat cross-border financial fraud...",
      category: "Press Release"
    },
    {
      date: "January 2024",
      title: "New AI-Powered Fraud Detection System Launched",
      excerpt: "Revolutionary technology enables real-time detection and prevention of sophisticated fraud schemes...",
      category: "Technology"
    },
    {
      date: "December 2023",
      title: "Year in Review: 2,500+ Cases Successfully Resolved",
      excerpt: "Record-breaking year sees unprecedented success in asset recovery and fraud prevention...",
      category: "Annual Report"
    }
  ];

  const mediaFeatures = [
    {
      icon: Newspaper,
      outlet: "Financial Times",
      title: "Leading Firm in Cryptocurrency Fraud Investigation",
      description: "Comprehensive profile of our breakthrough cases and innovative investigation techniques",
      image: mediaCoverage1
    },
    {
      icon: Tv,
      outlet: "BBC World News",
      title: "Exposing International Investment Scams",
      description: "Documentary feature on our work dismantling a $100M Ponzi scheme operation",
      image: mediaCoverage2
    },
    {
      icon: Radio,
      outlet: "Bloomberg Radio",
      title: "The Future of Financial Crime Prevention",
      description: "Expert interview discussing emerging fraud trends and prevention strategies",
      image: mediaCoverage3
    }
  ];

  const awards = [
    { year: "2024", title: "Excellence in Financial Investigation", organization: "International Association of Financial Crimes Investigators" },
    { year: "2023", title: "Top Cybersecurity Investigation Firm", organization: "Global Security Awards" },
    { year: "2023", title: "Innovation in Blockchain Forensics", organization: "Crypto Crime Association" },
    { year: "2022", title: "Client Service Excellence Award", organization: "Better Business Bureau" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Media & Press
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our work recognized by leading global media outlets
            </p>
          </div>
        </div>
      </section>

      {/* Featured Media Coverage */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Featured Media Coverage</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {mediaFeatures.map((feature, index) => (
              <div key={index} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img src={feature.image} alt={feature.outlet} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <feature.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-semibold text-primary">{feature.outlet}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <Button variant="outline" className="w-full">Read More</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Latest Press Releases</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {pressReleases.map((release, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <span className="text-sm text-primary font-semibold mb-2 md:mb-0">{release.date}</span>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full w-fit">{release.category}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{release.title}</h3>
                <p className="text-muted-foreground mb-4">{release.excerpt}</p>
                <Button variant="link" className="p-0 text-primary">Read Full Release →</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Award className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Awards & Recognition</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Honored by industry leaders for our commitment to excellence and innovation
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {awards.map((award, index) => (
              <div key={index} className="flex items-start gap-6 p-6 bg-card border border-border rounded-lg hover:bg-muted/30 transition-colors">
                <div className="flex-shrink-0 text-2xl font-bold text-primary">{award.year}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{award.title}</h3>
                  <p className="text-sm text-muted-foreground">{award.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Media Inquiries
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            For press inquiries, interviews, or media partnerships, please contact our communications team
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider">
            Contact Press Office
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Media;
