import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Users } from 'lucide-react';
import { AnimatedSection } from '../components/ui/AnimatedSection';

export const PrivacyPolicy: React.FC = () => {
  const sections = [
    {
      icon: Shield,
      title: 'Information We Collect',
      content: [
        'Personal identification information (Name, email address, phone number)',
        'Professional information (Resume, work history, skills)',
        'Communication records and preferences',
        'Website usage data and analytics',
        'Technical information (IP address, browser type, device information)'
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'To provide recruitment and staffing services',
        'To match candidates with suitable job opportunities',
        'To communicate about job openings and career opportunities',
        'To improve our services and website functionality',
        'To comply with legal obligations and regulations'
      ]
    },
    {
      icon: Lock,
      title: 'Data Protection',
      content: [
        'Industry-standard encryption for data transmission',
        'Secure servers with regular security updates',
        'Limited access to personal information on a need-to-know basis',
        'Regular security audits and vulnerability assessments',
        'Compliance with GDPR and other applicable data protection laws'
      ]
    },
    {
      icon: Users,
      title: 'Information Sharing',
      content: [
        'We do not sell personal information to third parties',
        'Information may be shared with potential employers (with consent)',
        'Data may be shared with trusted service providers',
        'Legal disclosure when required by law or court order',
        'Anonymous, aggregated data for statistical purposes'
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
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: {new Date().toLocaleDateString()}
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

          {/* Additional Sections */}
          <AnimatedSection>
            <div className="mt-12 space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Your Rights</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">Under GDPR and other applicable laws, you have the right to:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="text-gray-700">• Access your personal data</li>
                    <li className="text-gray-700">• Correct inaccurate information</li>
                    <li className="text-gray-700">• Request deletion of your data</li>
                    <li className="text-gray-700">• Object to processing of your data</li>
                    <li className="text-gray-700">• Data portability</li>
                    <li className="text-gray-700">• Withdraw consent at any time</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy or wish to exercise your rights, 
                  please contact us:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700">Email: Info@fusionhiretech.com</p>
                  <p className="text-gray-700">Phone: +91 8977719721</p>
                  <p className="text-gray-700">Address: RAM SVR, Plot No 4/2, Sector 1, Madhapur, HUDA Techno Enclave,
                  Hi-tech City, Hyderabad, Telangana - 500081</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};