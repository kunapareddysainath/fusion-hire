import React from "react";
import { Cookie, Settings, BarChart, Target, Shield, Eye } from "lucide-react";

const CookiePolicy = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Learn about how we use cookies and similar technologies to improve
              your experience on our website.
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="text-neutral-600 mb-6">
                <strong>Effective Date:</strong> January 1,{" "}
                {new Date().getFullYear()}
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                This Cookie Policy explains how Fusion Hire Tech uses cookies
                and similar technologies when you visit our website. It
                describes what these technologies are, why we use them, and your
                rights to control their use.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cookie className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-neutral-900">
                  Essential Cookies
                </h3>
              </div>
              <div className="text-center">
                <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="h-8 w-8 text-accent-600" />
                </div>
                <h3 className="font-semibold text-neutral-900">Analytics</h3>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-neutral-900">Marketing</h3>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-neutral-900">Preferences</h3>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-neutral-900">Security</h3>
              </div>
              <div className="text-center">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="font-semibold text-neutral-900">Tracking</h3>
              </div>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  What Are Cookies?
                </h2>
                <p className="text-neutral-700 mb-4">
                  Cookies are small text files that are placed on your device
                  (computer, smartphone, or tablet) when you visit a website.
                  They are widely used to make websites work more efficiently
                  and to provide information to website owners about user
                  behavior and preferences.
                </p>
                <p className="text-neutral-700 mb-4">
                  Cookies can be "persistent" (remaining on your device until
                  they expire or are deleted) or "session" cookies (deleted when
                  you close your browser). They can also be "first-party" (set
                  by the website you're visiting) or "third-party" (set by other
                  websites).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  How We Use Cookies
                </h2>
                <p className="text-neutral-700 mb-4">
                  We use cookies for several purposes to enhance your experience
                  on our website:
                </p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Essential Cookies
                </h3>
                <p className="text-neutral-700 mb-4">
                  These cookies are necessary for the website to function
                  properly and cannot be disabled:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Authentication and security</li>
                  <li>Form submission and data validation</li>
                  <li>Shopping cart functionality (if applicable)</li>
                  <li>Load balancing and performance optimization</li>
                  <li>Remembering your privacy preferences</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Analytics Cookies
                </h3>
                <p className="text-neutral-700 mb-4">
                  These cookies help us understand how visitors interact with
                  our website:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Page views and user journey tracking</li>
                  <li>Time spent on pages and bounce rates</li>
                  <li>Popular content and search terms</li>
                  <li>Device and browser information</li>
                  <li>Geographic location (general area only)</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Functional Cookies
                </h3>
                <p className="text-neutral-700 mb-4">
                  These cookies enable enhanced functionality and
                  personalization:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Language and region preferences</li>
                  <li>Font size and accessibility settings</li>
                  <li>Remembered form inputs</li>
                  <li>Customized content recommendations</li>
                  <li>Social media integration</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Marketing Cookies
                </h3>
                <p className="text-neutral-700 mb-4">
                  These cookies are used to deliver relevant advertisements:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Targeted advertising based on interests</li>
                  <li>Retargeting campaigns</li>
                  <li>Measuring advertising effectiveness</li>
                  <li>Cross-platform tracking (with consent)</li>
                  <li>Frequency capping for ads</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  Third-Party Cookies
                </h2>
                <p className="text-neutral-700 mb-4">
                  We may allow third-party service providers to place cookies on
                  your device through our website:
                </p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Google Analytics
                </h3>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Website traffic and user behavior analysis</li>
                  <li>Performance metrics and optimization insights</li>
                  <li>Demographic and interest reporting</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Social Media Platforms
                </h3>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>LinkedIn, Facebook, Twitter integration</li>
                  <li>Social sharing functionality</li>
                  <li>Social login options</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Marketing and Advertising
                </h3>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Google Ads and remarketing</li>
                  <li>LinkedIn advertising campaigns</li>
                  <li>Email marketing platforms</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  Cookie Consent and Control
                </h2>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Your Consent
                </h3>
                <p className="text-neutral-700 mb-4">
                  When you first visit our website, you'll see a cookie banner
                  asking for your consent to use non-essential cookies. You can:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Accept all cookies</li>
                  <li>Reject non-essential cookies</li>
                  <li>Customize your cookie preferences</li>
                  <li>Change your preferences at any time</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Browser Controls
                </h3>
                <p className="text-neutral-700 mb-4">
                  You can control cookies through your browser settings:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Block all cookies</li>
                  <li>Block third-party cookies only</li>
                  <li>Delete existing cookies</li>
                  <li>Set up automatic cookie deletion</li>
                  <li>Receive notifications when cookies are set</li>
                </ul>

                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-4">
                  <p className="text-yellow-800 text-sm">
                    <strong>Note:</strong> Disabling cookies may affect the
                    functionality of our website and limit your user experience.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  Browser-Specific Instructions
                </h2>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Google Chrome
                </h3>
                <ol className="list-decimal list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Click the three dots menu → Settings</li>
                  <li>
                    Go to Privacy and Security → Cookies and other site data
                  </li>
                  <li>Choose your preferred cookie settings</li>
                </ol>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Mozilla Firefox
                </h3>
                <ol className="list-decimal list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Click the menu button → Options</li>
                  <li>Select Privacy & Security</li>
                  <li>Under Cookies and Site Data, adjust your settings</li>
                </ol>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Safari
                </h3>
                <ol className="list-decimal list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Go to Safari → Preferences</li>
                  <li>Click the Privacy tab</li>
                  <li>Adjust your cookie and website data settings</li>
                </ol>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Microsoft Edge
                </h3>
                <ol className="list-decimal list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Click the three dots menu → Settings</li>
                  <li>Go to Cookies and site permissions</li>
                  <li>Manage cookies and site data</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  Other Tracking Technologies
                </h2>
                <p className="text-neutral-700 mb-4">
                  In addition to cookies, we may use other tracking
                  technologies:
                </p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Web Beacons
                </h3>
                <p className="text-neutral-700 mb-4">
                  Small transparent images used to track user behavior and email
                  engagement.
                </p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Local Storage
                </h3>
                <p className="text-neutral-700 mb-4">
                  Browser storage for maintaining user preferences and
                  application state.
                </p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Pixels and Tags
                </h3>
                <p className="text-neutral-700 mb-4">
                  Code snippets that collect information about your interactions
                  with our content.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  Data Retention
                </h2>
                <p className="text-neutral-700 mb-4">
                  Different types of cookies have different retention periods:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>
                    <strong>Session cookies:</strong> Deleted when you close
                    your browser
                  </li>
                  <li>
                    <strong>Functional cookies:</strong> Typically 1-2 years
                  </li>
                  <li>
                    <strong>Analytics cookies:</strong> Usually 2 years
                  </li>
                  <li>
                    <strong>Marketing cookies:</strong> Generally 30 days to 2
                    years
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  Updates to This Policy
                </h2>
                <p className="text-neutral-700 mb-4">
                  We may update this Cookie Policy from time to time to reflect
                  changes in our practices or applicable laws. We will notify
                  you of any material changes by:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Posting the updated policy on our website</li>
                  <li>Updating the "Last Updated" date</li>
                  <li>Sending email notifications for significant changes</li>
                  <li>Displaying a notice on our website</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  Contact Information
                </h2>
                <p className="text-neutral-700">
                  If you have questions about this Privacy Policy or our data
                  practices, please contact us:
                </p>
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <p className="text-neutral-700">
                    <strong>Fusion Hire Tech Security Team</strong>
                    <br />
                    Email: Info@fusionhiretech.com
                    <br />
                    Emergency Hotline: +91 8977719721
                    <br />
                    Address: RAM SVR, Plot No 4/2, Sector 1, Madhapur, HUDA
                    Techno Enclave, Hi-tech City, Hyderabad, Telangana - 500081
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;
