import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Shield, CheckCircle2 } from "lucide-react";

export default function Consultation() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Refund Policy Section */}
          <div className="mb-16 bg-card border-2 border-primary/20 rounded-lg p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-full">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Refund Assurance – 100% Money-Back Guarantee
              </h2>
            </div>

            <div className="space-y-6 text-foreground/90 leading-relaxed">
              <p className="text-lg font-medium">
                At Crypto Fraud Intel (CFI), your trust comes first.
              </p>
              
              <p>
                We believe in complete transparency, ethical practice, and delivering real results through legitimate recovery methods.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
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

              <p className="text-center pt-6 border-t border-border mt-8 font-medium">
                Our goal is to provide a safe, trustworthy path to recovery, and our refund assurance is a direct reflection of our integrity and confidence in the work we do.
              </p>
            </div>
          </div>

          {/* Consultation Form */}
          <div className="bg-card border border-border rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              Book Your Consultation
            </h2>
            <p className="text-muted-foreground mb-8 text-center">
              Take the first step towards recovering your assets. Fill out the form below and our team will contact you within 24 hours.
            </p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name *
                  </label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last Name *
                  </label>
                  <Input id="lastName" placeholder="Doe" required />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <Input id="email" type="email" placeholder="john.doe@example.com" required />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number *
                </label>
                <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" required />
              </div>

              <div>
                <label htmlFor="caseType" className="block text-sm font-medium text-foreground mb-2">
                  Type of Case *
                </label>
                <select 
                  id="caseType" 
                  className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                  required
                >
                  <option value="">Select case type</option>
                  <option value="crypto">Cryptocurrency Theft</option>
                  <option value="investment">Investment Scams</option>
                  <option value="forex">Forex Trading Fraud</option>
                  <option value="securities">Securities Violations</option>
                  <option value="internet">Internet Fraud</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-foreground mb-2">
                  Estimated Loss Amount (USD)
                </label>
                <Input id="amount" type="text" placeholder="$50,000" />
              </div>

              <div>
                <label htmlFor="details" className="block text-sm font-medium text-foreground mb-2">
                  Case Details *
                </label>
                <Textarea 
                  id="details" 
                  placeholder="Please provide details about your case, including dates, parties involved, and any relevant information..."
                  rows={6}
                  required
                />
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" id="terms" className="mt-1" required />
                <label htmlFor="terms" className="text-sm text-muted-foreground">
                  I agree to the terms and conditions and understand the refund policy outlined above. I consent to being contacted by Crypto Fraud Intel regarding my case.
                </label>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider"
              >
                Submit Consultation Request
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Or call us directly: HQ: 1300 439 456 | AUS: +61 (02) 8328 0402 | USA: +1 (833) 202 7333
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}