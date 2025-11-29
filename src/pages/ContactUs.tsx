import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-tight">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Get in touch with our expert team for confidential consultation
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Enter your full name" 
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+1 (555) 000-0000" 
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="How can we help you?" 
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Please provide details about your case..." 
                    className="w-full min-h-[150px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-14 bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold uppercase tracking-wider"
                  asChild
                >
                  <a href="/consultation">Submit Full Enquiry</a>
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Our team is available 24/7 to assist you with urgent matters. All consultations are strictly confidential.
                </p>
              </div>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Email</h3>
                    <a href="mailto:jayden@cryptofraudintel.com" className="text-muted-foreground hover:text-primary transition-colors block">
                      jayden@cryptofraudintel.com
                    </a>
                    <a href="mailto:Emmavalerie@cryptofraudintel.com" className="text-muted-foreground hover:text-primary transition-colors block">
                      Emmavalerie@cryptofraudintel.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Phone</h3>
                    <p className="text-muted-foreground mb-1">24/7 Available</p>
                    <a href="tel:+12818325219" className="text-foreground font-semibold hover:text-primary transition-colors">
                      +1 (281) 832 5219
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Office Location</h3>
                    <p className="text-muted-foreground">
                      Australia<br />
                      Serving Clients Worldwide<br />
                      Cross-Border Operations
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Sunday: 24/7<br />
                      Emergency Services: Always Available<br />
                      Immediate Response Team
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-muted-foreground mb-8">
              If you're facing an urgent situation involving financial fraud or cybercrime, don't wait. Contact our emergency response team now.
            </p>
            <Button 
              size="lg" 
              className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold uppercase tracking-wider"
              asChild
            >
              <a href="tel:+12818325219">Call Emergency Line</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
