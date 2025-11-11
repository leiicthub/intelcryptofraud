import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Calendar, MapPin, Users, Trophy, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import summitEvent from "@/assets/summit-event.jpg";

const Events = () => {
  const upcomingEvents = [
    {
      date: "June 15-17, 2024",
      title: "Global Financial Crimes Summit 2024",
      location: "Sydney Convention Centre, Australia",
      description: "Join industry leaders, law enforcement, and cybersecurity experts for three days of intensive workshops, keynote presentations, and networking opportunities focused on combating international financial fraud.",
      attendees: "500+ Professionals",
      image: summitEvent,
      highlights: [
        "Keynote: Future of Cryptocurrency Fraud Detection",
        "Workshop: Advanced Blockchain Forensics",
        "Panel: International Law Enforcement Cooperation",
        "Networking Gala Dinner"
      ]
    },
    {
      date: "August 22, 2024",
      title: "Cryptocurrency Security Webinar",
      location: "Online Event",
      description: "Free webinar exploring the latest trends in cryptocurrency theft and recovery techniques. Learn from our expert investigators about protecting your digital assets.",
      attendees: "1000+ Expected",
      highlights: [
        "Live Q&A with Investigation Team",
        "Case Study Presentations",
        "Security Best Practices",
        "Free Digital Resources"
      ]
    },
    {
      date: "October 10-11, 2024",
      title: "Investment Fraud Prevention Conference",
      location: "New York City, USA",
      description: "Two-day conference bringing together financial advisors, regulators, and fraud prevention specialists to share insights on protecting investors from sophisticated scams.",
      attendees: "300+ Professionals",
      highlights: [
        "Regulatory Updates and Compliance",
        "Red Flags in Investment Schemes",
        "Victim Recovery Support Strategies",
        "Technology Solutions Showcase"
      ]
    }
  ];

  const pastEvents = [
    {
      date: "March 2024",
      title: "Asian Cybercrime Investigation Forum",
      location: "Singapore",
      attendees: "400+ Attendees"
    },
    {
      date: "December 2023",
      title: "Annual Fraud Prevention Summit",
      location: "London, UK",
      attendees: "600+ Attendees"
    },
    {
      date: "September 2023",
      title: "Blockchain Forensics Workshop",
      location: "San Francisco, USA",
      attendees: "200+ Attendees"
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
              Events & Conferences
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join us at industry-leading events focused on financial crime prevention and investigation
            </p>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-primary/5 to-background border border-border rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="h-full">
                <img src={summitEvent} alt="Global Financial Crimes Summit" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:p-12">
                <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">Featured Event</span>
                <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">
                  Global Financial Crimes Summit 2024
                </h2>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span>June 15-17, 2024</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Sydney Convention Centre, Australia</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Users className="w-5 h-5 text-primary" />
                    <span>500+ Industry Professionals</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  The premier gathering for financial crime investigators, featuring cutting-edge workshops, expert speakers, and unparalleled networking opportunities.
                </p>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider">
                  Register Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Upcoming Events</h2>
          <div className="space-y-8 max-w-5xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-primary/10 rounded-lg flex flex-col items-center justify-center">
                      <Calendar className="w-8 h-8 text-primary mb-1" />
                      <span className="text-xs text-primary font-semibold">{event.date.split(' ')[0]}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{event.title}</h3>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        {event.attendees}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-2">Event Highlights:</h4>
                      <ul className="space-y-2">
                        {event.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Trophy className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="outline" className="font-semibold">
                      Learn More & Register
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Past Events</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 text-sm text-primary font-semibold mb-3">
                  <Clock className="w-4 h-4" />
                  {event.date}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{event.title}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4" />
                  {event.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  {event.attendees}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Stay Updated on Our Events
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive notifications about upcoming conferences, webinars, and training opportunities
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider">
            Subscribe to Newsletter
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
