import { Calendar, Users, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

export const EventSection = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border-2 border-primary p-12 text-center">
            <div className="flex justify-center gap-8 mb-6">
              <Calendar className="h-12 w-12 text-primary" />
              <Users className="h-12 w-12 text-primary" />
              <Trophy className="h-12 w-12 text-primary" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase">
              Global Financial Crimes Summit
            </h2>
            
            <p className="text-xl text-primary font-bold mb-6">
              International Association of Cybercrime Prevention
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              The Global Financial Crimes Summit was a resounding success. We extend our heartfelt thanks to the sponsors, speakers, delegates, and everyone who contributed to making this historic event possible.
            </p>
            
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider"
            >
              View Event Highlights
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
