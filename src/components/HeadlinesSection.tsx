import { Button } from "@/components/ui/button";
import mediaCoverage1 from "@/assets/media-coverage-1.jpg";
import mediaCoverage2 from "@/assets/media-coverage-2.jpg";
import mediaCoverage3 from "@/assets/media-coverage-3.jpg";

const mediaFeatures = [
  { image: mediaCoverage1, title: "Global News Network Feature" },
  { image: mediaCoverage2, title: "International Press Coverage" },
  { image: mediaCoverage3, title: "Digital Media Recognition" },
  { image: mediaCoverage1, title: "Financial Times Investigation" },
  { image: mediaCoverage2, title: "BBC Cybercrime Documentary" },
  { image: mediaCoverage3, title: "Forbes Asset Recovery Article" },
];

export const HeadlinesSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Making Global Headlines
          </h2>
          <p className="text-xl text-muted-foreground">
            We have the expertise and proven capability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {mediaFeatures.map((item, index) => (
            <div 
              key={index}
              className="group aspect-video bg-muted/50 border border-border hover:border-primary transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="relative w-full h-full">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-sm text-foreground font-medium">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-foreground mb-6 leading-relaxed">
            We offer a comprehensive range of intelligence, investigative, and asset recovery services across all international jurisdictions. If you have been a victim of internet fraud, investment scams, cryptocurrency theft, forex trading fraud, or securities violations, our international team has successfully recovered millions in assets for clients worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href="tel:1300439456" className="text-primary hover:text-primary/80 font-medium">HQ: 1300 439 456</a>
            <span className="text-muted-foreground">|</span>
            <a href="tel:+61283280402" className="text-primary hover:text-primary/80 font-medium">AUS: +61 (02) 8328 0402</a>
            <span className="text-muted-foreground">|</span>
            <a href="tel:+18332027333" className="text-primary hover:text-primary/80 font-medium">USA: +1 (833) 202 7333</a>
          </div>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider" asChild>
            <a href="/consultation">Submit an Enquiry</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
