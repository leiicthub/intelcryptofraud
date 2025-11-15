import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Shield, CheckCircle } from "lucide-react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Refund Assurance
              </h1>
              <p className="text-xl text-muted-foreground">
                100% Money-Back Guarantee
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Intro */}
              <div className="mb-12 p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-border">
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  At Crypto Fraud Intel (CFI), your trust comes first.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  We believe in complete transparency, ethical practice, and delivering real results through legitimate recovery methods.
                </p>
              </div>

              {/* Guarantee Statement */}
              <div className="mb-12 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border-2 border-primary/20">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Our 100% Refund Guarantee</h2>
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  To protect every client we work with, we offer a full 100% refund guarantee:
                </p>
                <div className="p-6 bg-background/50 rounded-xl border border-border">
                  <p className="text-xl font-semibold text-primary mb-2">
                    If your funds are not recovered, you are entitled to a complete refund—no hidden conditions, no complications.
                  </p>
                </div>
              </div>

              {/* Core Message */}
              <div className="mb-12 text-center">
                <p className="text-2xl font-bold text-foreground mb-8">
                  We only succeed when you succeed.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Zero Financial Risk</h3>
                      <p className="text-muted-foreground">
                        You take no financial risk when working with us
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Pay for Results Only</h3>
                      <p className="text-muted-foreground">
                        You only pay for successful results
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Clear Updates</h3>
                      <p className="text-muted-foreground">
                        You receive clear, reliable updates throughout the process
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Client-First Guarantee</h3>
                      <p className="text-muted-foreground">
                        You remain protected under our client-first guarantee
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Closing Statement */}
              <div className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-border text-center">
                <p className="text-lg text-foreground leading-relaxed">
                  Our goal is to provide a safe, trustworthy path to recovery—and our refund assurance is a direct reflection of our integrity and confidence in the work we do.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RefundPolicy;
