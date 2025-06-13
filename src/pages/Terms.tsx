import React from "react";
import { FileText, Scale, Shield, AlertTriangle } from "lucide-react";

const Terms = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of Use
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Please read these terms carefully before using our website and
              services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
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
                These Terms of Use ("Terms") govern your access to and use of
                the Fusion Hire Tech website and services. By accessing or using
                our services, you agree to be bound by these Terms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-neutral-900">Usage Terms</h3>
              </div>
              <div className="text-center">
                <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="h-8 w-8 text-accent-600" />
                </div>
                <h3 className="font-semibold text-neutral-900">Legal Rights</h3>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-neutral-900">Limitations</h3>
              </div>
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-semibold text-neutral-900">Disclaimers</h3>
              </div>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-neutral-700 mb-4">
                  By accessing and using the Fusion Hire Tech website and
                  services, you acknowledge that you have read, understood, and
                  agree to be bound by these Terms of Use and our Privacy
                  Policy. If you do not agree to these terms, please do not use
                  our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  2. Description of Services
                </h2>
                <p className="text-neutral-700 mb-4">
                  Fusion Hire Tech provides professional staffing and recruiting
                  services, including:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Executive search and leadership recruitment</li>
                  <li>Direct hire and permanent placement services</li>
                  <li>Temporary and contract staffing solutions</li>
                  <li>Specialized recruiting for niche and technical roles</li>
                  <li>Diversity and inclusion consulting</li>
                  <li>Career coaching and professional development</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  3. User Responsibilities
                </h2>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Account Information
                </h3>
                <p className="text-neutral-700 mb-4">
                  You are responsible for:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Providing accurate and complete information</li>
                  <li>Maintaining the confidentiality of your account</li>
                  <li>Updating information when necessary</li>
                  <li>Notifying us of any unauthorized use</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Prohibited Uses
                </h3>
                <p className="text-neutral-700 mb-4">
                  You agree not to use our services to:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Transmit harmful or malicious content</li>
                  <li>Interfere with service functionality</li>
                  <li>Attempt unauthorized access to systems</li>
                  <li>Engage in discriminatory practices</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  4. Client Terms
                </h2>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Service Agreements
                </h3>
                <p className="text-neutral-700 mb-4">
                  Client relationships are governed by separate service
                  agreements that outline:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Scope of services and deliverables</li>
                  <li>Fees and payment terms</li>
                  <li>Placement guarantees and warranties</li>
                  <li>Confidentiality and non-disclosure terms</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Payment Terms
                </h3>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Fees are due as specified in service agreements</li>
                  <li>Late payments may incur additional charges</li>
                  <li>Disputes must be raised within 30 days</li>
                  <li>Refunds are subject to guarantee terms</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  5. Candidate Terms
                </h2>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Representation
                </h3>
                <p className="text-neutral-700 mb-4">
                  By using our services as a candidate, you:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Authorize us to represent you to potential employers</li>
                  <li>
                    Agree to provide accurate information about your background
                  </li>
                  <li>
                    Consent to background checks and verification processes
                  </li>
                  <li>
                    Understand that we may share your information with clients
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Exclusivity
                </h3>
                <p className="text-neutral-700 mb-4">
                  Unless otherwise agreed, our representation is non-exclusive,
                  and you may work with other recruiters.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  6. Intellectual Property
                </h2>
                <p className="text-neutral-700 mb-4">
                  All content on our website, including text, graphics, logos,
                  and software, is the property of Fusion Hire Tech or our
                  licensors and is protected by copyright and other intellectual
                  property laws.
                </p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Limited License
                </h3>
                <p className="text-neutral-700 mb-4">
                  We grant you a limited, non-exclusive license to access and
                  use our website for personal and business purposes related to
                  our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  7. Privacy and Data Protection
                </h2>
                <p className="text-neutral-700 mb-4">
                  Your privacy is important to us. Our collection and use of
                  personal information is governed by our Privacy Policy, which
                  is incorporated into these Terms by reference.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  8. Disclaimers
                </h2>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Service Disclaimer
                </h3>
                <p className="text-neutral-700 mb-4">
                  Our services are provided "as is" without warranties of any
                  kind. We do not guarantee:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Successful placement or employment</li>
                  <li>Specific outcomes or results</li>
                  <li>Continuous or error-free service availability</li>
                  <li>Compatibility with all systems or devices</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Third-Party Content
                </h3>
                <p className="text-neutral-700 mb-4">
                  We are not responsible for third-party content, websites, or
                  services that may be linked to or referenced on our platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  9. Limitation of Liability
                </h2>
                <p className="text-neutral-700 mb-4">
                  To the maximum extent permitted by law, Fusion Hire Tech shall
                  not be liable for:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Damages exceeding the fees paid for our services</li>
                  <li>Issues arising from third-party actions or services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  10. Indemnification
                </h2>
                <p className="text-neutral-700 mb-4">
                  You agree to indemnify and hold harmless Fusion Hire Tech from
                  any claims, damages, or expenses arising from your use of our
                  services or violation of these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  11. Termination
                </h2>
                <p className="text-neutral-700 mb-4">
                  We may terminate or suspend your access to our services at any
                  time for violation of these Terms or for any other reason.
                  Upon termination, your right to use our services ceases
                  immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  12. Governing Law
                </h2>
                <p className="text-neutral-700 mb-4">
                  These Terms are governed by the laws of the State of New York,
                  without regard to conflict of law principles. Any disputes
                  will be resolved in the courts of New York.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  13. Changes to Terms
                </h2>
                <p className="text-neutral-700 mb-4">
                  We reserve the right to modify these Terms at any time. We
                  will notify users of material changes by posting updated Terms
                  on our website. Continued use of our services constitutes
                  acceptance of the modified Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  14. Contact Information
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

export default Terms;
