import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Cookie } from "lucide-react";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <Cookie className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Cookie Policy
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
                  This Cookie Policy explains how Crypto Fraud Intel (CFI) uses cookies and similar technologies on our website. By using our website, you consent to the use of cookies as described in this policy.
                </p>
              </div>

              {/* Section 1 */}
              <div className="p-6 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl border border-border">
                <h2 className="text-2xl font-bold mb-4 text-foreground">1. What Are Cookies?</h2>
                <p className="text-muted-foreground">
                  Cookies are small text files that are placed on your device when you visit a website. They help the website remember your preferences and understand how you use the site, enabling us to provide a better user experience.
                </p>
              </div>

              {/* Section 2 */}
              <div className="p-6 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl border border-border">
                <h2 className="text-2xl font-bold mb-4 text-foreground">2. Types of Cookies We Use</h2>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground mt-6">Essential Cookies</h3>
                <p className="text-muted-foreground mb-4">
                  These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Session management</li>
                  <li>Security features</li>
                  <li>Load balancing</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-foreground mt-6">Performance Cookies</h3>
                <p className="text-muted-foreground mb-4">
                  These cookies collect information about how visitors use our website, such as which pages are visited most often. This helps us improve website performance.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Analytics data</li>
                  <li>Page load times</li>
                  <li>Error tracking</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-foreground mt-6">Functionality Cookies</h3>
                <p className="text-muted-foreground mb-4">
                  These cookies allow the website to remember choices you make and provide enhanced features.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Language preferences</li>
                  <li>User interface customization</li>
                  <li>Form data retention</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-foreground mt-6">Targeting/Advertising Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies may be used to deliver relevant advertisements and track campaign effectiveness. We only use these with your consent.
                </p>
              </div>

              {/* Section 3 */}
              <div className="p-6 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl border border-border">
                <h2 className="text-2xl font-bold mb-4 text-foreground">3. Third-Party Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  We may use third-party services that set cookies on our website, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
                  <li><strong>Social Media Platforms:</strong> To enable social sharing features</li>
                  <li><strong>Security Services:</strong> To protect against fraud and abuse</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  These third parties have their own privacy policies governing their use of cookies.
                </p>
              </div>

              {/* Section 4 */}
              <div className="p-6 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl border border-border">
                <h2 className="text-2xl font-bold mb-4 text-foreground">4. Cookie Duration</h2>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground mt-4">Session Cookies</h3>
                <p className="text-muted-foreground mb-4">
                  These are temporary cookies that expire when you close your browser.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-foreground mt-4">Persistent Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies remain on your device for a set period or until you delete them. They help us recognize you when you return to our website.
                </p>
              </div>

              {/* Section 5 */}
              <div className="p-6 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl border border-border">
                <h2 className="text-2xl font-bold mb-4 text-foreground">5. How We Use Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  We use cookies to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Ensure our website functions properly</li>
                  <li>Remember your preferences and settings</li>
                  <li>Understand how you use our website</li>
                  <li>Improve website performance and user experience</li>
                  <li>Analyze trends and gather demographic information</li>
                  <li>Provide secure access to our services</li>
                  <li>Detect and prevent fraud</li>
                </ul>
              </div>

              {/* Section 6 */}
              <div className="p-6 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl border border-border">
                <h2 className="text-2xl font-bold mb-4 text-foreground">6. Managing Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  You have several options to manage cookies:
                </p>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground mt-4">Browser Settings</h3>
                <p className="text-muted-foreground mb-4">
                  Most browsers allow you to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>View cookies stored on your device</li>
                  <li>Delete existing cookies</li>
                  <li>Block all cookies</li>
                  <li>Block third-party cookies</li>
                  <li>Clear cookies when closing the browser</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-foreground mt-6">Cookie Preferences</h3>
                <p className="text-muted-foreground">
                  You can adjust your cookie preferences through our cookie banner or settings panel. Note that disabling certain cookies may affect website functionality.
                </p>
              </div>

              {/* Section 7 */}
              <div className="p-6 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl border border-border">
                <h2 className="text-2xl font-bold mb-4 text-foreground">7. Do Not Track Signals</h2>
                <p className="text-muted-foreground">
                  Some browsers have a "Do Not Track" feature. Currently, there is no industry standard for responding to these signals. We do not currently respond to "Do Not Track" browser signals, but we provide you with cookie management options as described above.
                </p>
              </div>

              {/* Section 8 */}
              <div className="p-6 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl border border-border">
                <h2 className="text-2xl font-bold mb-4 text-foreground">8. Updates to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Cookie Policy to reflect changes in technology, legislation, or our practices. We will post the updated policy on our website with a revised "Last Updated" date.
                </p>
              </div>

              {/* Section 9 */}
              <div className="p-6 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl border border-border">
                <h2 className="text-2xl font-bold mb-4 text-foreground">9. More Information</h2>
                <p className="text-muted-foreground mb-4">
                  For more information about cookies and how to manage them, visit:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>www.allaboutcookies.org</li>
                  <li>www.youronlinechoices.eu</li>
                </ul>
              </div>

              {/* Contact Section */}
              <div className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have questions about our use of cookies, please contact us:
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

export default CookiePolicy;
