import { Tv, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import mediaCoverage1 from "@/assets/panel-discussion.jpg";
import mediaCoverage2 from "@/assets/event-booth.jpg";

const mediaItems = [
  {
    icon: Tv,
    title: "International TV Coverage",
    description: "Featured on major news networks worldwide",
    image: mediaCoverage1,
  },
  {
    icon: Newspaper,
    title: "Press Recognition",
    description: "Covered by leading financial publications",
    image: mediaCoverage2,
  },
];

export const MediaSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary text-sm tracking-widest uppercase mb-4 font-medium">
            Media Coverage
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Featured In Leading Media
          </h2>
          <Link to="/events">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              View All Events
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {mediaItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-card border border-border hover:border-primary transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-primary/90 rounded-full flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
