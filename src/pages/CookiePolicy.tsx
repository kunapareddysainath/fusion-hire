import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, Settings, BarChart3, Shield } from 'lucide-react';
import { AnimatedSection } from '../components/ui/AnimatedSection';

export const CookiePolicy: React.FC = () => {
  const cookieTypes = [
    {
      icon: Shield,
      title: 'Essential Cookies',
      description: 'Required for basic website functionality and security.',
      purpose: 'These cookies are necessary for the website to function properly and cannot be disabled.',
      examples: ['Session management', 'Security tokens', 'Authentication', 'CSRF protection'],
      retention: 'Session or up to 1 year'
    },
    {
      icon: BarChart3,
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website.',
      purpose: 'We use these cookies to improve website performance and user experience.',
      examples: ['Google Analytics', 'Page views', 'User behavior', 'Traffic sources'],
      retention: 'Up to 2 years'
    },
    {
      icon: Settings,
      title: 'Functional Cookies',
      description: 'Remember your preferences and enhance your experience.',
      purpose: 'These cookies provide enhanced functionality and personalization.',
      examples: ['Language preferences', 'Form data', 'User settings', 'Accessibility options'],
      retention: 'Up to 1 year'
    },
    {
      icon: Cookie,
      title: 'Marketing Cookies',
      description: 'Used to track visitors and display relevant advertisements.',
      purpose: 'These cookies help us show you relevant content and measure campaign effectiveness.',
      examples: ['Ad targeting', 'Social media plugins', 'Campaign tracking', 'Conversion pixels'],
      retention: 'Up to 2 years'
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
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn about how we use cookies and similar technologies to enhance your browsing experience and provide better services.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Are Cookies */}
      <AnimatedSection>
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 mb-12">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Cookie className="h-6 w-6 text-primary-500" />
                </div>
                <h2 className="text-2xl font-bold text-blue-900">What Are Cookies?</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better, faster, and safer experience by remembering your 
                preferences and analyzing how you use our site.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We use both first-party cookies (set by our website) and third-party cookies (set by 
                external services we use) to enhance functionality and provide analytics.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Cookie Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Types of Cookies We Use
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Different types of cookies serve different purposes on our website
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cookieTypes.map((type, index) => (
              <AnimatedSection key={type.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 h-full"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <type.icon className="h-6 w-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-2">{type.title}</h3>
                      <p className="text-gray-600">{type.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Purpose:</h4>
                      <p className="text-gray-700 text-sm">{type.purpose}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Examples:</h4>
                      <ul className="space-y-1">
                        {type.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="text-gray-700 text-sm flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-1">Retention:</h4>
                      <p className="text-gray-700 text-sm">{type.retention}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Managing Cookies */}
      <AnimatedSection>
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Managing Your Cookie Preferences</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    You have several options for managing cookies on our website:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        <strong>Browser Settings:</strong> Most browsers allow you to control cookies through their settings. 
                        You can block all cookies, accept only first-party cookies, or be prompted before accepting cookies.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        <strong>Cookie Banner:</strong> When you first visit our site, you can choose which types of 
                        cookies to accept through our cookie consent banner.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        <strong>Opt-out Links:</strong> For third-party cookies, you can often opt out directly 
                        through the service provider's website.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Impact of Disabling Cookies</h2>
                <p className="text-gray-700 mb-4">
                  While you can disable cookies, please note that doing so may affect your experience on our website:
                </p>
                <ul className="space-y-2">
                  <li className="text-gray-700">• Some features may not work properly</li>
                  <li className="text-gray-700">• Your preferences won't be remembered</li>
                  <li className="text-gray-700">• You may need to re-enter information repeatedly</li>
                  <li className="text-gray-700">• The website may load more slowly</li>
                </ul>
              </div>

              <div className="bg-primary-50 rounded-xl border border-primary-200 p-8">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Contact Us</h2>
                <p className="text-primary-700 mb-4">
                  If you have questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                <div className="space-y-2">
                  <p className="text-primary-700">Email: Info@fusionhiretech.com</p>
                  <p className="text-primary-700">Phone: +91 8977719721</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};