import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Import all event images
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
import teamGroup1 from "@/assets/team-group-1.jpg";
import teamGroup2 from "@/assets/team-group-2.jpg";
import teamGroup3 from "@/assets/team-group-3.jpg";

const EventHighlights = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const highlights = [
    {
      image: summitEvent,
      caption: "Our esteemed Speakers at Global Financial Crimes Summit"
    },
    {
      image: conferenceAudience,
      caption: "A glimpse of the Delegates and Speakers as GFCS draws to a close"
    },
    {
      image: panelDiscussion,
      caption: "Co-Conference Chairs at the Summit"
    },
    {
      image: teamGroup1,
      caption: "CFI Team at the Global Financial Crimes Summit"
    },
    {
      image: teamGroup2,
      caption: "International collaboration at the summit"
    },
    {
      image: teamGroup3,
      caption: "Global experts gathering for financial crime prevention"
    },
    {
      image: eventBooth,
      caption: "CFI Exhibition Booth at the Summit"
    },
    {
      image: awardCeremony1,
      caption: "Award Ceremony - Excellence in Investigation"
    },
    {
      image: awardCeremony2,
      caption: "Recognition for outstanding achievements"
    },
    {
      image: awardCeremony3,
      caption: "Industry Awards Night"
    },
    {
      image: awardCeremony4,
      caption: "Celebrating milestones in financial crime investigation"
    },
    {
      image: mediaCoverage1,
      caption: "Media Coverage - Press Conference"
    },
    {
      image: mediaCoverage2,
      caption: "International media attention on successful recovery cases"
    },
    {
      image: mediaCoverage3,
      caption: "Global recognition for breakthrough investigations"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link to="/events">
              <Button variant="ghost" className="mb-6 text-gray-300 hover:text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Events
              </Button>
            </Link>
            <div className="flex justify-center mb-6">
              <Camera className="h-12 w-12 text-amber-500" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
              Event Highlights
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Global Financial Crimes Summit 2024
            </p>
            <p className="text-lg text-gray-400 mt-4">
              Explore highlights from the two-day summit. Click on an image to see a larger view.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <div className="relative overflow-hidden aspect-[4/3] bg-muted">
                    <img 
                      src={item.image} 
                      alt={item.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                      <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-sm font-medium">
                          {item.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {item.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 text-4xl font-light"
          >
            ×
          </button>
          <img 
            src={selectedImage} 
            alt="Event highlight"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default EventHighlights;
