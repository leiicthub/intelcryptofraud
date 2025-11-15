import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FileText } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <FileText className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Terms of Service
              </h1>
              <p className="text-lg text-muted-foreground">
                Last Updated: November 15, 2025
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  These Terms of Service ("Terms") govern your use of Crypto Fraud Intel (CFI) services. By engaging our services, you agree to be bound by these Terms.
                </p>
              </div>

              {/* Section 1 */}
              <div className="p-6 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl border border-border">
                <h2 className="text-2xl font-bold mb-4 text-foreground">1. Services Provided</h2>
                <p className="text-muted-foreground mb-4">
                  CFI provides the following services:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Blockchain forensic investigation and fund tracing</li>
                  <li>Communication with cryptocurrency exchanges and service providers</li>
                  <li>Assistance with law enforcement reporting and case escalation</li>
                  <li>Recovery support for victims of cryptocurrency fraud</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  All services are conducted through legal, ethical, and compliant methods only.
                </p>
              </div>

              {/* Section 2 */}
              <div className="p-6 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl border border-border">
                <h2 className="text-2xl font-bold mb-4 text-foreground">2. Service Limitations</h2>
                <p className="text-muted-foreground mb-4">
                  You understand and agree that:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Recovery success cannot be guaranteed</li>
                  <li>We do not engage in hacking, unauthorized access, or illegal activities</li>
                  <li>Results depend on multiple factors including cooperation from exchanges and authorities</li>
                  <li>Timeline for recovery varies based on case complexity</li>
                  <li>We cannot control decisions made by third-party exchanges or law enforcement</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="p-6 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl border border-border">
                <h2 className="text-2xl font-bold mb-4 text-foreground">3. Client Responsibilities</h2>
                <p className="text-muted-foreground mb-4">
                  As a client, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Provide accurate and complete information about your case</li>
                  <li>Respond promptly to requests for additional information or documentation</li>
                  <li>Cooperate with law enforcement when required</li>
                  <li>Not engage in any illegal activities during the recovery process</li>
                  <li>Maintain confidentiality of case details and investigation methods</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="p-6 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl border border-border">
                <h2 className="text-2xl font-bold mb-4 text-foreground">4. Fees and Payment</h2>
                <p className="text-muted-foreground mb-4">
                  Payment terms are outlined in your individual service agreement. Generally:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Fees may include upfront assessment costs and success-based fees</li>
                  <li>Payment schedules will be clearly communicated</li>
                  <li>Our 100% Money-Back Guarantee applies as stated in our Refund Policy</li>
                  <li>All fees are subject to the terms in your signed agreement</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div className="p-6 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl border border-border">
                <h2 className="text-2xl font-bold mb-4 text-foreground">5. Confidentiality</h2>
                <p className="text-muted-foreground">
                  We maintain strict confidentiality of all client information and case details. Information will only be shared with relevant parties (exchanges, law enforcement) as necessary for case resolution, or as required by law. You also agree to maintain confidentiality of our investigation methods and proprietary processes.
                </p>
              </div>

              {/* Section 6 */}
              <div className="p-6 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl border border-border">
                <h2 className="text-2xl font-bold mb-4 text-foreground">6. Intellectual Property</h2>
                <p className="text-muted-foreground">
                  All content, materials, methodologies, and tools used by CFI remain our exclusive intellectual property. You may not reproduce, distribute, or use our proprietary information without written permission.
                </p>
              </div>

              {/* Section 7 */}
              <div className="p-6 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl border border-border">
                <h2 className="text-2xl font-bold mb-4 text-foreground">7. Limitation of Liability</h2>
                <p className="text-muted-foreground mb-4">
                  To the maximum extent permitted by law:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>CFI is not liable for unsuccessful recovery attempts beyond our refund guarantee</li>
                  <li>We are not responsible for actions taken by third parties (exchanges, authorities)</li>
                  <li>Our liability is limited to the fees paid for services</li>
                  <li>We are not liable for indirect, consequential, or punitive damages</li>
                </ul>
              </div>

              {/* Section 8 */}
              <div className="p-6 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl border border-border">
                <h2 className="text-2xl font-bold mb-4 text-foreground">8. Termination</h2>
                <p className="text-muted-foreground">
                  Either party may terminate services with written notice. Upon termination, you remain obligated to pay for services rendered up to the termination date. Our refund policy applies to eligible cases as outlined in our Refund Policy.
                </p>
              </div>

              {/* Section 9 */}
              <div className="p-6 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl border border-border">
                <h2 className="text-2xl font-bold mb-4 text-foreground">9. Dispute Resolution</h2>
                <p className="text-muted-foreground">
                  Any disputes arising from these Terms will be resolved through good-faith negotiation. If negotiation fails, disputes will be settled through binding arbitration in accordance with applicable arbitration rules, or through the courts of our jurisdiction.
                </p>
              </div>

              {/* Section 10 */}
              <div className="p-6 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl border border-border">
                <h2 className="text-2xl font-bold mb-4 text-foreground">10. Governing Law</h2>
                <p className="text-muted-foreground">
                  These Terms are governed by and construed in accordance with the laws of the jurisdiction in which CFI operates, without regard to conflict of law principles.
                </p>
              </div>

              {/* Section 11 */}
              <div className="p-6 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl border border-border">
                <h2 className="text-2xl font-bold mb-4 text-foreground">11. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these Terms at any time. Material changes will be communicated to active clients. Continued use of our services after changes constitutes acceptance of the new Terms.
                </p>
              </div>

              {/* Contact Section */}
              <div className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have questions about these Terms of Service, please contact us:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>Email:</strong> legal@cryptofraudintel.com</li>
                  <li><strong>Phone:</strong> 1300 439 456</li>
                </ul>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
