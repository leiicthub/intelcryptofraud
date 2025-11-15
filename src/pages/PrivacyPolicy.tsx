import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ShieldCheck } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <ShieldCheck className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Privacy Policy
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
                  At Crypto Fraud Intel (CFI), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
                </p>
              </div>

              {/* Section 1 */}
              <div className="p-6 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl border border-border">
                <h2 className="text-2xl font-bold mb-4 text-foreground">1. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground mt-6">Personal Information</h3>
                <p className="text-muted-foreground mb-4">
                  We may collect personal information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Name and contact information (email, phone number, address)</li>
                  <li>Case details and fraud incident information</li>
                  <li>Financial information related to your case</li>
                  <li>Blockchain addresses and transaction data</li>
                  <li>Communication records with our team</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-foreground mt-6">Automatically Collected Information</h3>
                <p className="text-muted-foreground mb-4">
                  When you visit our website, we may automatically collect:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referral sources</li>
                </ul>
              </div>

              {/* Section 2 */}
              <div className="p-6 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl border border-border">
                <h2 className="text-2xl font-bold mb-4 text-foreground">2. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Provide and manage our investigation and recovery services</li>
                  <li>Conduct blockchain forensic analysis</li>
                  <li>Communicate with you about your case</li>
                  <li>Coordinate with exchanges, law enforcement, and relevant authorities</li>
                  <li>Improve our services and website functionality</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect against fraud and unauthorized activity</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="p-6 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl border border-border">
                <h2 className="text-2xl font-bold mb-4 text-foreground">3. Information Sharing and Disclosure</h2>
                <p className="text-muted-foreground mb-4">
                  We may share your information with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong>Cryptocurrency Exchanges:</strong> To facilitate fund recovery and investigations</li>
                  <li><strong>Law Enforcement:</strong> When required by law or to support criminal investigations</li>
                  <li><strong>Service Providers:</strong> Third-party vendors who assist in our operations</li>
                  <li><strong>Legal Authorities:</strong> In response to legal processes or government requests</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  We will never sell your personal information to third parties for marketing purposes.
                </p>
              </div>

              {/* Section 4 */}
              <div className="p-6 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl border border-border">
                <h2 className="text-2xl font-bold mb-4 text-foreground">4. Data Security</h2>
                <p className="text-muted-foreground mb-4">
                  We implement industry-standard security measures to protect your information, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Secure storage systems with restricted access</li>
                  <li>Regular security audits and updates</li>
                  <li>Employee training on data protection</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              {/* Section 5 */}
              <div className="p-6 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl border border-border">
                <h2 className="text-2xl font-bold mb-4 text-foreground">5. Data Retention</h2>
                <p className="text-muted-foreground">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Case-related data may be retained for legal and compliance purposes even after case closure.
                </p>
              </div>

              {/* Section 6 */}
              <div className="p-6 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl border border-border">
                <h2 className="text-2xl font-bold mb-4 text-foreground">6. Your Rights</h2>
                <p className="text-muted-foreground mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Access your personal information</li>
                  <li>Request corrections to inaccurate data</li>
                  <li>Request deletion of your data (subject to legal requirements)</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Lodge a complaint with a data protection authority</li>
                </ul>
              </div>

              {/* Section 7 */}
              <div className="p-6 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl border border-border">
                <h2 className="text-2xl font-bold mb-4 text-foreground">7. International Data Transfers</h2>
                <p className="text-muted-foreground">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
                </p>
              </div>

              {/* Section 8 */}
              <div className="p-6 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl border border-border">
                <h2 className="text-2xl font-bold mb-4 text-foreground">8. Changes to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last Updated" date.
                </p>
              </div>

              {/* Contact Section */}
              <div className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>Email:</strong> privacy@cryptofraudintel.com</li>
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

export default PrivacyPolicy;
