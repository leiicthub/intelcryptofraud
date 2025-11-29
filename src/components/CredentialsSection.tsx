import { Shield, Award } from "lucide-react";

export const CredentialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Before Choosing Any Recovery Service
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Always verify licensing, company registration, and credentials with law enforcement authorities
          </p>
          <p className="text-foreground font-medium">
            Our expertise is trusted and recognized by leading state, federal, and international law enforcement agencies
          </p>
          <div className="mt-6 space-y-2">
            <p className="text-primary font-bold">Master Investigation License: 410843633</p>
            <p className="text-primary font-bold">Florida License Number: A1900003</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-card border border-border p-8 text-center hover:border-primary transition-colors">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">
              Law Enforcement Recognition
            </h3>
            <p className="text-sm text-muted-foreground">
              Multiple commendations and certificates of appreciation from national police forces
            </p>
          </div>

          <div className="bg-card border border-border p-8 text-center hover:border-primary transition-colors">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">
              Licensed Investigators Association
            </h3>
            <p className="text-sm text-muted-foreground">
              Certificate of appreciation from international licensed investigator associations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
