import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2, AlertCircle, Mail, Phone } from "lucide-react";

export default function Consultation() {

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-tight">
              Submit an Enquiry
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Submit an enquiry with Crypto Fraud Intel's Fraud Recovery Team, Australia's leading cyber-crime investigation team.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            
            {/* Process Section */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Understand the process and make an informed decision about engaging Crypto Fraud Intel services.
              </h2>
              
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                What's involved with submitting an enquiry
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Crypto Fraud Intel will review and assess your case to propose the best possible actions and make recommendations on how to recover your losses based on decades of experience.
              </p>

              {/* Warning Box */}
              <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 mb-8">
                <div className="flex gap-4">
                  <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
                      Please note:
                    </p>
                    <p className="text-amber-800 dark:text-amber-200">
                      For fraud-related investigations, Crypto Fraud Intel does not accept cases involving loses below USD 100,000. The minimum fee to initiate an online fraud investigation is USD 12,000.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Refund Policy Section */}
            <div className="mb-16 bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 rounded-lg p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    Refund Assurance – 100% Money-Back Guarantee
                  </h2>
                </div>
              </div>

              <div className="space-y-6 text-foreground/90 leading-relaxed">
                <p className="text-lg font-medium">
                  At Crypto Fraud Intel (CFI), your trust comes first.
                </p>
                
                <p>
                  We believe in complete transparency, ethical practice, and delivering real results through legitimate recovery methods.
                </p>

                <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg">
                  <p className="font-semibold text-lg mb-2">
                    To protect every client we work with, we offer a full 100% refund guarantee:
                  </p>
                  <p className="text-primary font-bold text-xl">
                    If your funds are not recovered, you are entitled to a complete refund, no hidden conditions, no complications.
                  </p>
                </div>

                <p className="font-medium text-lg">
                  We only succeed when you succeed.
                </p>

                <div className="space-y-3 mt-6">
                  <p className="font-semibold text-foreground">This policy ensures that:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span>You take zero financial risk when working with us</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span>You only pay for successful results</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span>You receive clear, reliable updates throughout the process</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span>You remain protected under our client-first guarantee</span>
                    </li>
                  </ul>
                </div>

                <p className="text-center pt-6 border-t border-primary/20 mt-8 font-medium">
                  Our goal is to provide a safe, trustworthy path to recovery, and our refund assurance is a direct reflection of our integrity and confidence in the work we do.
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-background">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Ready to Start Your Investigation?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Contact us directly to discuss your case with our expert team.
                </p>
              </div>

              <div className="space-y-6 max-w-2xl mx-auto">
                <p className="text-muted-foreground text-lg text-center mb-8">
                  Please reach out to us directly to discuss your case in detail. Our team is available 24/7 for consultations.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <a 
                    href="mailto:info@cryptofraudintel.com"
                    className="flex flex-col items-center gap-4 p-8 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors group border border-primary/20"
                  >
                    <div className="bg-primary/20 p-4 rounded-full group-hover:bg-primary/30 transition-colors">
                      <Mail className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-foreground text-lg mb-2">Email Us</p>
                      <p className="text-sm text-muted-foreground">info@cryptofraudintel.com</p>
                    </div>
                  </a>

                  <a 
                    href="tel:+12818325219"
                    className="flex flex-col items-center gap-4 p-8 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors group border border-primary/20"
                  >
                    <div className="bg-primary/20 p-4 rounded-full group-hover:bg-primary/30 transition-colors">
                      <Phone className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-foreground text-lg mb-2">Call Us</p>
                      <p className="text-sm text-muted-foreground">+1 (281) 832 5219</p>
                      <p className="text-xs text-muted-foreground mt-1">Available 24/7</p>
                    </div>
                  </a>
                </div>
                
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mt-8">
                  <p className="text-center text-foreground font-semibold mb-4">
                    Include in Your Email:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground max-w-lg mx-auto">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Your full name and contact information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Type of fraud (crypto theft, investment scam, forex fraud, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Approximate amount lost</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Brief description of what happened</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Preferred communication method</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
