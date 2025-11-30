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
import summitHero from "@/assets/summit-hero-2025-final.jpg";
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
      
      {/* Hero Section with Banner */}
      <section className="relative">
        <div className="relative w-full">
          <img 
            src={summitHero} 
            alt="Global Financial Crimes Summit 2025"
            className="w-full h-auto object-cover"
          />
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {eventGallery.map((event, index) => (
                <div key={index} className="relative overflow-hidden group aspect-[4/3]">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="font-bold text-sm">
                        {event.title}
                      </h3>
                    </div>
                  </div>
                </div>
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