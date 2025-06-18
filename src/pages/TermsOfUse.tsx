import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react';
import { AnimatedSection } from '../components/ui/AnimatedSection';

export const TermsOfUse: React.FC = () => {
  const sections = [
    {
      icon: CheckCircle,
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using our website and services, you accept and agree to be bound by these Terms of Use.',
        'If you do not agree to these terms, please do not use our services.',
        'We reserve the right to modify these terms at any time without prior notice.',
        'Your continued use of our services after changes constitutes acceptance of the new terms.'
      ]
    },
    {
      icon: FileText,
      title: 'Use of Services',
      content: [
        'Our services are intended for legitimate business and professional purposes only.',
        'You must provide accurate and complete information when using our services.',
        'You are responsible for maintaining the confidentiality of your account information.',
        'You agree not to use our services for any unlawful or prohibited activities.',
        'We reserve the right to terminate access for violations of these terms.'
      ]
    },
    {
      icon: Scale,
      title: 'Intellectual Property',
      content: [
        'All content on our website is protected by copyright and other intellectual property laws.',
        'You may not reproduce, distribute, or create derivative works without permission.',
        'Trademarks and logos are the property of Fusion Hire Technologies or their respective owners.',
        'User-generated content remains your property, but you grant us license to use it.',
        'We respect intellectual property rights and expect users to do the same.'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Limitations and Disclaimers',
      content: [
        'Our services are provided "as is" without warranties of any kind.',
        'We do not guarantee job placement or successful recruitment outcomes.',
        'We are not liable for indirect, incidental, or consequential damages.',
        'Our liability is limited to the amount paid for services in the preceding 12 months.',
        'Some jurisdictions do not allow certain limitations, so these may not apply to you.'
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Terms of Use
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Please read these terms carefully before using our services. They govern your use of our website and services.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Effective date: {new Date().toLocaleDateString()}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <AnimatedSection key={section.title}>
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <section.icon className="h-6 w-6 text-primary-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-blue-900">
                      {section.title}
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Additional Terms */}
          <AnimatedSection>
            <div className="mt-12 space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms of Use are governed by and construed in accordance with the laws of the State of New York, 
                  without regard to its conflict of law principles. Any disputes arising under these terms shall be 
                  subject to the exclusive jurisdiction of the courts located in New York, NY.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms of Use, please contact us:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700">Email: Info@fusionhiretech.com</p>
                  <p className="text-gray-700">Phone: +91 8977719721</p>
                  <p className="text-gray-700">Address: RAM SVR, Plot No 4/2, Sector 1, Madhapur, HUDA Techno Enclave,
                  Hi-tech City, Hyderabad, Telangana - 500081</p>
                </div>
              </div>

              <div className="bg-primary-50 rounded-xl border border-primary-200 p-8">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Important Notice</h2>
                <p className="text-primary-700 leading-relaxed">
                  These terms constitute the entire agreement between you and Fusion Hire Technologies regarding 
                  the use of our services. If any provision is found to be unenforceable, the remaining provisions 
                  will remain in full force and effect.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};