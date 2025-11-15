import { Phone, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import logo from "@/assets/cfi-logo.jpg";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img src={logo} alt="CryptoFraudIntel Logo" className="h-12 md:h-16 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/about" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              About Us
            </a>
            <a href="/services" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Services
            </a>
            <a href="/media" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Media
            </a>
            <a href="/events" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Events
            </a>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="text-right text-sm">
              <div className="flex items-center gap-2 text-foreground">
                <span className="font-medium">Australia:</span>
                <a href="tel:+61283280402" className="hover:text-primary transition-colors">
                  +61 (02) 8328 0402
                </a>
              </div>
              <div className="flex items-center gap-2 text-foreground mt-1">
                <span className="font-medium">USA:</span>
                <a href="tel:+18332027333" className="hover:text-primary transition-colors">
                  +1 (833) 202 7333
                </a>
              </div>
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider">
              Submit an Enquiry
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="/about" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
                About Us
              </a>
              <a href="/services" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
                Services
              </a>
              <a href="/media" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
                Media
              </a>
              <a href="/events" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
                Events
              </a>
              <div className="pt-4 border-t border-border">
                <div className="text-sm text-foreground mb-2">
                  <div className="mb-1">Australia: +61 (02) 8328 0402</div>
                  <div>USA: +1 (833) 202 7333</div>
                </div>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider w-full">
                  Submit an Enquiry
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
