import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Newspaper, Tv, Radio, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import mediaCoverage1 from "@/assets/media-coverage-1.jpg";
import mediaCoverage2 from "@/assets/media-coverage-2.jpg";
import mediaCoverage3 from "@/assets/media-coverage-3.jpg";
import teamGroup1 from "@/assets/team-group-1.jpg";
import teamGroup2 from "@/assets/team-group-2.jpg";
import teamGroup3 from "@/assets/team-group-3.jpg";

const Media = () => {
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null);
  const [generatedContent, setGeneratedContent] = useState<Record<number, string>>({});
  const [loadingArticle, setLoadingArticle] = useState<number | null>(null);
  const pressReleases = [
    {
      date: "March 2025",
      title: "CryptoFraudIntel Recovers $50M in International Crypto Scam",
      excerpt: "Our team successfully traced and recovered $50 million in stolen cryptocurrency across multiple jurisdictions...",
      category: "Press Release"
    },
    {
      date: "February 2025",
      title: "Partnership with Global Law Enforcement Agencies Announced",
      excerpt: "CryptoFraudIntel expands collaboration with Interpol and FBI to combat cross-border financial fraud...",
      category: "Press Release"
    },
    {
      date: "January 2025",
      title: "New AI-Powered Fraud Detection System Launched",
      excerpt: "Revolutionary technology enables real-time detection and prevention of sophisticated fraud schemes...",
      category: "Technology"
    },
    {
      date: "December 2024",
      title: "Year in Review: 2,500+ Cases Successfully Resolved",
      excerpt: "Record-breaking year sees unprecedented success in asset recovery and fraud prevention...",
      category: "Annual Report"
    }
  ];

  const mediaFeatures = [
    {
      icon: Tv,
      outlet: "Financial Times",
      title: "Leading Firm in Cryptocurrency Fraud Investigation",
      description: "Comprehensive profile of our breakthrough cases and innovative investigation techniques",
      image: teamGroup1
    },
    {
      icon: Radio,
      outlet: "BBC World News",
      title: "Exposing International Investment Scams",
      description: "Documentary feature on our work dismantling a $100M Ponzi scheme operation",
      image: teamGroup2
    },
    {
      icon: Newspaper,
      outlet: "Bloomberg Radio",
      title: "The Future of Financial Crime Prevention",
      description: "Expert interview discussing emerging fraud trends and prevention strategies",
      image: teamGroup3
    }
  ];

  const generateArticle = async (index: number, title: string, excerpt: string) => {
    if (generatedContent[index]) {
      setExpandedArticle(expandedArticle === index ? null : index);
      return;
    }

    setLoadingArticle(index);
    try {
      const { data, error } = await supabase.functions.invoke('chat', {
        body: { 
          messages: [
            {
              role: "user",
              content: `Write a detailed, engaging 400-word news article about: "${title}". Context: ${excerpt}. Write in a professional journalism style for CryptoFraudIntel, a cryptocurrency fraud investigation firm. Include specific details, quotes, and impact.`
            }
          ]
        }
      });

      if (error) throw error;

      const reader = data.body?.getReader();
      const decoder = new TextDecoder();
      let fullContent = "";

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          
          const text = decoder.decode(value);
          const lines = text.split('\n');
          
          for (const line of lines) {
            if (line.startsWith('data: ') && line !== 'data: [DONE]') {
              try {
                const json = JSON.parse(line.slice(6));
                const content = json.choices?.[0]?.delta?.content;
                if (content) fullContent += content;
              } catch (e) {
                console.error('Parse error:', e);
              }
            }
          }
        }
      }

      setGeneratedContent(prev => ({ ...prev, [index]: fullContent }));
      setExpandedArticle(index);
    } catch (error) {
      console.error('Error generating article:', error);
      toast.error("Failed to generate article content");
    } finally {
      setLoadingArticle(null);
    }
  };

  const awards = [
    { year: "2025", title: "Excellence in Financial Investigation", organization: "International Association of Financial Crimes Investigators" },
    { year: "2024", title: "Top Cybersecurity Investigation Firm", organization: "Global Security Awards" },
    { year: "2024", title: "Innovation in Blockchain Forensics", organization: "Crypto Crime Association" },
    { year: "2023", title: "Client Service Excellence Award", organization: "Better Business Bureau" }
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
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => generateArticle(100 + index, feature.title, feature.description)}
                    disabled={loadingArticle === 100 + index}
                  >
                    {loadingArticle === 100 + index ? "Loading..." : "Read More"}
                  </Button>
                  {expandedArticle === 100 + index && generatedContent[100 + index] && (
                    <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                      <p className="text-foreground text-sm whitespace-pre-wrap">{generatedContent[100 + index]}</p>
                    </div>
                  )}
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
                {expandedArticle === index && generatedContent[index] && (
                  <div className="mb-4 p-4 bg-muted/30 rounded-lg">
                    <p className="text-foreground whitespace-pre-wrap">{generatedContent[index]}</p>
                  </div>
                )}
                <Button 
                  variant="link" 
                  className="p-0 text-primary"
                  onClick={() => generateArticle(index, release.title, release.excerpt)}
                  disabled={loadingArticle === index}
                >
                  {loadingArticle === index ? "Generating..." : expandedArticle === index ? "Show Less ←" : "Read Full Release →"}
                </Button>
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
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider" asChild>
            <a href="mailto:info@cryptofraudintel.com">Contact Press Office</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Media;
