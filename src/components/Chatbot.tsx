import { useState } from "react";
import { MessageCircle, X, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg z-50"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 bg-card border border-border rounded-lg shadow-2xl flex flex-col z-50">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-secondary">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">Contact Us</span>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="icon"
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Contact Information */}
          <div className="p-6 space-y-6">
            <div className="text-center">
              <p className="text-foreground font-semibold mb-4">
                Thank you for your interest!
              </p>
              <p className="text-muted-foreground text-sm mb-6">
                Please contact us directly for immediate assistance:
              </p>
            </div>

            <div className="space-y-4">
              <a 
                href="mailto:info@cryptofraudintel.com"
                className="flex items-center gap-3 p-4 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors group"
              >
                <div className="bg-primary/20 p-2 rounded-full group-hover:bg-primary/30 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left flex-1">
                  <p className="font-semibold text-foreground text-sm">Email Us</p>
                  <p className="text-xs text-muted-foreground">info@cryptofraudintel.com</p>
                </div>
              </a>

              <a 
                href="tel:+12818325219"
                className="flex items-center gap-3 p-4 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors group"
              >
                <div className="bg-primary/20 p-2 rounded-full group-hover:bg-primary/30 transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left flex-1">
                  <p className="font-semibold text-foreground text-sm">Call Us</p>
                  <p className="text-xs text-muted-foreground">+1 (281) 832 5219</p>
                </div>
              </a>
            </div>

            <p className="text-center text-xs text-muted-foreground pt-4 border-t border-border">
              Available 24/7 for urgent matters
            </p>
          </div>
        </div>
      )}
    </>
  );
};
