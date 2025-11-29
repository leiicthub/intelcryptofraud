import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Shield, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const enquirySchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  phone: z.string().trim().min(1, "Phone number is required").max(50),
  countryCode: z.string(),
  email: z.string().trim().email("Invalid email address").max(255),
  amount: z.string().optional(),
  caseType: z.string().min(1, "Please select a case type"),
  details: z.string().trim().min(10, "Please provide at least 10 characters").max(5000),
});

export default function Consultation() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    countryCode: "+1",
    email: "",
    amount: "",
    caseType: "",
    details: "",
    terms: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.terms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms and conditions",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);

      // Validate form data
      const validatedData = enquirySchema.parse({
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        countryCode: formData.countryCode,
        email: formData.email,
        amount: formData.amount,
        caseType: formData.caseType,
        details: formData.details,
      });

      console.log("Submitting enquiry...");

      // Call edge function
      const { data, error } = await supabase.functions.invoke("send-enquiry", {
        body: validatedData,
      });

      if (error) throw error;

      toast({
        title: "Enquiry Submitted Successfully!",
        description: "Thank you for contacting us. We'll be in touch within 24-48 hours. You can also reach us at jayden@cryptofraudintel.com, Emmavalerie@cryptofraudintel.com or call +1 (281) 832 5219.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        countryCode: "+1",
        email: "",
        amount: "",
        caseType: "",
        details: "",
        terms: false,
      });
    } catch (error: any) {
      console.error("Error submitting enquiry:", error);
      
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0]?.message || "Please check your input",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Submission Failed",
          description: "There was an error submitting your enquiry. Please try again or call us directly.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value, type } = e.target;
    
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [id]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  };

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
                      For fraud-related investigations, Crypto Fraud Intel reviews cases of all sizes. Our team will assess your case and provide recommendations on the best course of action.
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

            {/* Form Section */}
            <div className="bg-background">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Complete our enquiry form and get started with your investigation.
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-foreground mb-2">
                      First Name <span className="text-destructive">*</span>
                    </label>
                    <Input 
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John" 
                      required 
                      className="h-12 text-base"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-foreground mb-2">
                      Last Name <span className="text-destructive">*</span>
                    </label>
                    <Input 
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe" 
                      required 
                      className="h-12 text-base"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                    Phone <span className="text-destructive">*</span>
                  </label>
                  <div className="flex gap-3">
                    <select 
                      id="countryCode"
                      value={formData.countryCode}
                      onChange={handleInputChange}
                      className="h-12 px-4 rounded-md border border-input bg-background text-foreground w-32"
                      disabled={isSubmitting}
                    >
                      <option value="+1">USA +1</option>
                      <option value="+61">AUS +61</option>
                      <option value="+44">UK +44</option>
                      <option value="+91">IND +91</option>
                    </select>
                    <Input 
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      type="tel" 
                      placeholder="(281) 832 5219" 
                      required 
                      className="h-12 text-base flex-1"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <Input 
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    type="email" 
                    placeholder="john.doe@example.com" 
                    required 
                    className="h-12 text-base"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="amount" className="block text-sm font-semibold text-foreground mb-2">
                    How much money have you lost?
                  </label>
                  <Input 
                    id="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    type="number" 
                    placeholder="Enter amount in USD" 
                    className="h-12 text-base"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="caseType" className="block text-sm font-semibold text-foreground mb-2">
                    Type of Case <span className="text-destructive">*</span>
                  </label>
                  <select 
                    id="caseType"
                    value={formData.caseType}
                    onChange={handleInputChange}
                    className="w-full h-12 px-4 rounded-md border border-input bg-background text-foreground text-base"
                    required
                    disabled={isSubmitting}
                  >
                    <option value="">Select case type</option>
                    <option value="Cryptocurrency Theft">Cryptocurrency Theft</option>
                    <option value="Investment Scams">Investment Scams</option>
                    <option value="Forex Trading Fraud">Forex Trading Fraud</option>
                    <option value="Securities Violations">Securities Violations</option>
                    <option value="Internet Fraud">Internet Fraud</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="details" className="block text-sm font-semibold text-foreground mb-2">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <Textarea 
                    id="details"
                    value={formData.details}
                    onChange={handleInputChange}
                    placeholder="Please provide details about your case, including dates, parties involved, and any relevant information..."
                    rows={6}
                    required
                    className="text-base"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <input 
                    type="checkbox" 
                    id="terms"
                    checked={formData.terms}
                    onChange={handleInputChange}
                    className="mt-1 h-4 w-4" 
                    required
                    disabled={isSubmitting}
                  />
                  <label htmlFor="terms" className="text-sm text-foreground">
                    I agree to the terms and conditions and understand the refund policy outlined above. I consent to being contacted by Crypto Fraud Intel regarding my case.
                  </label>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-14 bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold uppercase tracking-wider text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                </Button>

                <p className="text-sm text-muted-foreground text-center pt-4">
                  Or call us directly: <a href="tel:+12818325219" className="text-primary hover:underline font-medium">HQ: +1 (281) 832 5219</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
