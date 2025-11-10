export const MediaSection = () => {
  const mediaLogos = [
    { name: "Wall Street Journal", width: "w-32" },
    { name: "60 Minutes", width: "w-24" },
    { name: "CNN", width: "w-20" },
    { name: "ABC", width: "w-20" },
    { name: "Network 10", width: "w-24" },
    { name: "Bloomberg", width: "w-28" },
    { name: "7NEWS", width: "w-20" },
  ];

  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground text-sm mb-8 uppercase tracking-wider">
          As featured on
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
          {mediaLogos.map((logo, index) => (
            <div 
              key={index} 
              className={`${logo.width} h-12 bg-muted/30 rounded flex items-center justify-center hover:opacity-100 transition-opacity`}
            >
              <span className="text-xs text-muted-foreground font-medium">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
