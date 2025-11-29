import { Button } from "@/components/ui/button";
import { Play, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-background overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Global intelligence network" className="w-full h-full object-cover" />
      </div>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <p className="text-primary text-sm tracking-widest uppercase mb-6 font-medium">
            Experts in Cross Border
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight uppercase tracking-tight">
            Criminal
            <br />
            Intelligence,
            <br />
            Investigations
            <br />
            and Asset
            <br />
            Recovery
          </h1>
          
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider text-sm px-8"
            asChild
          >
            <a href="/consultation">Submit an Enquiry</a>
          </Button>
          
          <div className="mt-12 flex items-center gap-4 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span>HQ: 1300 439 456</span>
          </div>
        </div>
      </div>
      
      {/* Video placeholder circle */}
      <div className="hidden lg:block absolute right-20 top-1/2 -translate-y-1/2">
        <div className="relative w-64 h-64">
          <div className="absolute inset-0 border-2 border-primary/30 rounded-full"></div>
          <div className="absolute inset-8 border border-primary/20 rounded-full"></div>
          <button className="absolute inset-0 m-auto w-16 h-16 bg-transparent border-2 border-foreground rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors group">
            <Play className="h-6 w-6 text-foreground group-hover:text-primary transition-colors ml-1" fill="currentColor" />
          </button>
        </div>
      </div>
    </section>
  );
};
