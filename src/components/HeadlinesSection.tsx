import { Button } from "@/components/ui/button";

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
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div 
              key={item}
              className="aspect-video bg-muted/50 border border-border hover:border-primary transition-colors overflow-hidden group cursor-pointer"
            >
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-background to-secondary group-hover:from-primary/10 group-hover:to-primary/5 transition-all">
                <div className="text-center p-6">
                  <p className="text-sm text-muted-foreground font-medium">
                    Media Feature {item}
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
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider">
            Submit an Enquiry
          </Button>
        </div>
      </div>
    </section>
  );
};
