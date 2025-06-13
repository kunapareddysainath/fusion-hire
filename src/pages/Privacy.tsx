import React from "react";
import { Shield, Eye, Lock, FileText } from "lucide-react";

const Privacy = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and
              protect your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="text-neutral-600 mb-6">
                <strong>Effective Date:</strong> January 1, 2024
                <br />
                <strong>Last Updated:</strong> January 1, 2024
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Fusion Hire Tech ("we," "our," or "us") is committed to
                protecting your privacy and ensuring the security of your
                personal information. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                use our website and services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-neutral-900">
                  Data Protection
                </h3>
              </div>
              <div className="text-center">
                <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-accent-600" />
                </div>
                <h3 className="font-semibold text-neutral-900">Transparency</h3>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-neutral-900">Security</h3>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-neutral-900">Compliance</h3>
              </div>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  1. Information We Collect
                </h2>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Personal Information
                </h3>
                <p className="text-neutral-700 mb-4">
                  We collect personal information that you voluntarily provide
                  when you:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Submit contact forms or inquiries</li>
                  <li>Apply for positions through our services</li>
                  <li>Register for our services</li>
                  <li>Subscribe to our newsletters</li>
                  <li>Participate in surveys or feedback</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Information Collected
                </h3>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>
                    Name and contact information (email, phone number, address)
                  </li>
                  <li>
                    Professional information (resume, work history, skills)
                  </li>
                  <li>Educational background</li>
                  <li>Employment preferences and salary expectations</li>
                  <li>References and background check information</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Automatically Collected Information
                </h3>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>IP address and browser information</li>
                  <li>Device and operating system details</li>
                  <li>Website usage patterns and analytics</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-neutral-700 mb-4">
                  We use your personal information for the following purposes:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Provide staffing and recruiting services</li>
                  <li>Match candidates with suitable job opportunities</li>
                  <li>Communicate with clients and candidates</li>
                  <li>Process applications and conduct screenings</li>
                  <li>Improve our services and website functionality</li>
                  <li>Send relevant updates and opportunities</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Prevent fraud and ensure security</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  3. Information Sharing and Disclosure
                </h2>
                <p className="text-neutral-700 mb-4">
                  We may share your information in the following circumstances:
                </p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  With Your Consent
                </h3>
                <p className="text-neutral-700 mb-4">
                  We share candidate information with potential employers only
                  with explicit consent and for legitimate recruitment purposes.
                </p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Service Providers
                </h3>
                <p className="text-neutral-700 mb-4">
                  We may share information with trusted third-party service
                  providers who assist in our operations, including:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Background check services</li>
                  <li>IT and security providers</li>
                  <li>
                    Communication platforms (including WhatsApp integration)
                  </li>
                  <li>Analytics and marketing services</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Legal Requirements
                </h3>
                <p className="text-neutral-700 mb-4">
                  We may disclose information when required by law or to protect
                  our rights, property, or safety.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  4. Data Security
                </h2>
                <p className="text-neutral-700 mb-4">
                  We implement appropriate technical and organizational measures
                  to protect your personal information:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication measures</li>
                  <li>Employee training on data protection</li>
                  <li>Secure storage and backup systems</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  5. Cookie Policy
                </h2>
                <p className="text-neutral-700 mb-4">
                  Our website uses cookies and similar technologies to:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Provide personalized content and advertisements</li>
                  <li>Improve website functionality and user experience</li>
                </ul>
                <p className="text-neutral-700 mb-4">
                  You can control cookie settings through your browser
                  preferences. However, disabling cookies may limit some website
                  functionality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  6. Your Rights and Choices
                </h2>
                <p className="text-neutral-700 mb-4">
                  Depending on your location, you may have the following rights
                  regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>
                    <strong>Access:</strong> Request access to your personal
                    information
                  </li>
                  <li>
                    <strong>Correction:</strong> Request correction of
                    inaccurate information
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your personal
                    information
                  </li>
                  <li>
                    <strong>Portability:</strong> Request transfer of your data
                  </li>
                  <li>
                    <strong>Opt-out:</strong> Unsubscribe from marketing
                    communications
                  </li>
                  <li>
                    <strong>Restriction:</strong> Request restriction of
                    processing
                  </li>
                </ul>
                <p className="text-neutral-700 mb-4">
                  To exercise these rights, please contact us using the
                  information provided below.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  7. Data Retention
                </h2>
                <p className="text-neutral-700 mb-4">
                  We retain personal information for as long as necessary to:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>
                    Provide our services and maintain business relationships
                  </li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Resolve disputes and enforce agreements</li>
                  <li>Maintain records for legitimate business purposes</li>
                </ul>
                <p className="text-neutral-700 mb-4">
                  Candidate information is typically retained for up to 7 years
                  or as required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  8. International Data Transfers
                </h2>
                <p className="text-neutral-700 mb-4">
                  If you are located outside the United States, please note that
                  your information may be transferred to and processed in the
                  United States. We ensure appropriate safeguards are in place
                  for international transfers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  9. Children's Privacy
                </h2>
                <p className="text-neutral-700 mb-4">
                  Our services are not intended for individuals under 18 years
                  of age. We do not knowingly collect personal information from
                  children under 18.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  10. Changes to This Policy
                </h2>
                <p className="text-neutral-700 mb-4">
                  We may update this Privacy Policy periodically. We will notify
                  you of material changes by posting the updated policy on our
                  website and updating the "Last Updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  11. Contact Information
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

export default Privacy;
