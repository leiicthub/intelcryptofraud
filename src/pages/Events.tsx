import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { EventSection } from "@/components/EventSection";
import { Calendar, Users, Award, Camera } from "lucide-react";
import { Card } from "@/components/ui/card";

import awardCeremony1 from "@/assets/award-ceremony-1.jpg";
import awardCeremony2 from "@/assets/award-ceremony-2.jpg";
import awardCeremony3 from "@/assets/award-ceremony-3.jpg";
import awardCeremony4 from "@/assets/award-ceremony-4.jpg";
import conferenceAudience from "@/assets/conference-audience.jpg";
import eventBooth from "@/assets/event-booth.jpg";
import panelDiscussion from "@/assets/panel-discussion.jpg";
import summitEvent from "@/assets/summit-event.jpg";
import mediaCoverage1 from "@/assets/media-coverage-1.jpg";
import mediaCoverage2 from "@/assets/media-coverage-2.jpg";
import mediaCoverage3 from "@/assets/media-coverage-3.jpg";

const Events = () => {
  const eventGallery = [
    {
      title: "Global Financial Crimes Summit",
      image: summitEvent,
      description: "Major international gathering of cybercrime prevention experts"
    },
    {
      title: "Award Ceremony - Excellence in Investigation",
      image: awardCeremony1,
      description: "Recognition for outstanding achievements in crypto fraud recovery"
    },
    {
      title: "Award Recognition Event",
      image: awardCeremony2,
      description: "Celebrating milestones in financial crime investigation"
    },
    {
      title: "Industry Awards Night",
      image: awardCeremony3,
      description: "Honoring leaders in cybercrime prevention"
    },
    {
      title: "Achievement Awards Ceremony",
      image: awardCeremony4,
      description: "Acknowledging excellence in client recovery services"
    },
    {
      title: "Conference Keynote Presentation",
      image: conferenceAudience,
      description: "Addressing industry professionals on emerging fraud trends"
    },
    {
      title: "Industry Exhibition Booth",
      image: eventBooth,
      description: "Showcasing our services and expertise to the global community"
    },
    {
      title: "Expert Panel Discussion",
      image: panelDiscussion,
      description: "Industry leaders discussing cryptocurrency fraud prevention"
    },
    {
      title: "Media Coverage - Press Conference",
      image: mediaCoverage1,
      description: "International media attention on successful recovery cases"
    },
    {
      title: "Media Interview Session",
      image: mediaCoverage2,
      description: "Sharing insights on combating financial cybercrime"
    },
    {
      title: "News Media Coverage",
      image: mediaCoverage3,
      description: "Global recognition for breakthrough investigations"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-4 mb-6">
              <Calendar className="h-12 w-12 text-amber-500" />
              <Users className="h-12 w-12 text-amber-500" />
              <Award className="h-12 w-12 text-amber-500" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-tight">
              Our Events
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Global Recognition & Industry Leadership in Cybercrime Prevention
            </p>
          </div>
        </div>
      </section>

      {/* Featured Event Section */}
      <EventSection />

      {/* Event Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-4">
                <Camera className="h-12 w-12 text-primary" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 uppercase">
                Event Gallery
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Highlights from our international conferences, award ceremonies, and industry events
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventGallery.map((event, index) => (
                <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {event.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground text-lg">International Events</p>
              </div>
              <div className="p-6">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
                <p className="text-muted-foreground text-lg">Industry Awards</p>
              </div>
              <div className="p-6">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">30+</div>
                <p className="text-muted-foreground text-lg">Countries Represented</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;