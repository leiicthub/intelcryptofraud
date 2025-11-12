import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Shield, Users, Globe, Award, TrendingUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  const stats = [
    { icon: Shield, label: "Cases Solved", value: "2,500+" },
    { icon: Users, label: "Expert Investigators", value: "150+" },
    { icon: Globe, label: "Countries Served", value: "45+" },
    { icon: Award, label: "Success Rate", value: "94%" },
  ];

  const timeline = [
    { year: "2015", event: "Founded in Sydney, Australia", description: "Started with a mission to combat financial fraud" },
    { year: "2017", event: "International Expansion", description: "Opened offices in USA and UK" },
    { year: "2019", event: "Crypto Division Launch", description: "Established specialized cryptocurrency fraud unit" },
    { year: "2021", event: "AI Integration", description: "Implemented advanced AI fraud detection systems" },
    { year: "2023", event: "Global Recognition", description: "Awarded Top Financial Crime Investigation Firm" },
  ];

  const values = [
    { icon: Shield, title: "Integrity", description: "We operate with the highest ethical standards in all investigations" },
    { icon: TrendingUp, title: "Excellence", description: "Committed to delivering exceptional results for every client" },
    { icon: Users, title: "Collaboration", description: "Working closely with law enforcement and financial institutions" },
    { icon: Clock, title: "Timeliness", description: "Swift action to maximize asset recovery chances" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About CryptoFraudIntel
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Leading the fight against financial fraud and cybercrime since 2015
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              At CryptoFraudIntel, we are dedicated to protecting individuals and businesses from financial fraud and cybercrime. Our team of expert investigators combines cutting-edge technology with decades of experience to recover stolen assets and bring criminals to justice.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-24 text-right">
                    <div className="text-2xl font-bold text-primary">{item.year}</div>
                  </div>
                  <div className="flex-shrink-0 w-px bg-border"></div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{item.event}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
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
