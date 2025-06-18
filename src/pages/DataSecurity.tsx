import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Server, Eye, CheckCircle, AlertTriangle } from 'lucide-react';
import { AnimatedSection } from '../components/ui/AnimatedSection';

export const DataSecurity: React.FC = () => {
  const securityMeasures = [
    {
      icon: Lock,
      title: 'Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard AES-256 encryption.',
      features: ['SSL/TLS encryption', 'Database encryption', 'Secure file storage', 'Encrypted backups']
    },
    {
      icon: Server,
      title: 'Infrastructure Security',
      description: 'Our systems are hosted on secure, compliant cloud infrastructure with multiple layers of protection.',
      features: ['SOC 2 certified data centers', 'Network firewalls', 'DDoS protection', 'Regular security updates']
    },
    {
      icon: Eye,
      title: 'Access Controls',
      description: 'Strict access controls ensure only authorized personnel can access sensitive information.',
      features: ['Multi-factor authentication', 'Role-based permissions', 'Audit logging', 'Regular access reviews']
    },
    {
      icon: Shield,
      title: 'Compliance',
      description: 'We maintain compliance with major data protection regulations and industry standards.',
      features: ['GDPR compliance', 'CCPA compliance', 'ISO 27001 practices', 'Regular compliance audits']
    }
  ];

  const policies = [
    {
      title: 'Data Retention',
      content: 'Personal data is retained only as long as necessary for business purposes or as required by law. We have established retention schedules for different types of data and regularly purge outdated information.'
    },
    {
      title: 'Incident Response',
      content: 'We have a comprehensive incident response plan that includes immediate containment, assessment, notification procedures, and remediation steps to minimize any potential impact on your data.'
    },
    {
      title: 'Employee Training',
      content: 'All employees undergo regular security awareness training and are required to follow strict data handling procedures. Background checks are conducted for employees with access to sensitive data.'
    },
    {
      title: 'Third-Party Security',
      content: 'We carefully vet all third-party vendors and service providers to ensure they meet our security standards. Contracts include specific data protection clauses and security requirements.'
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
              Data Security
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your data security is our top priority. Learn about the comprehensive measures we take to protect your information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Security Measures
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Multi-layered security approach to protect your sensitive information
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityMeasures.map((measure, index) => (
              <AnimatedSection key={measure.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <measure.icon className="h-6 w-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-2">{measure.title}</h3>
                      <p className="text-gray-600">{measure.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {measure.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Security Policies */}
      <AnimatedSection>
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Security Policies
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive policies governing how we handle and protect your data
              </p>
            </div>
            
            <div className="space-y-8">
              {policies.map((policy, index) => (
                <motion.div
                  key={policy.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                >
                  <h3 className="text-xl font-bold text-blue-900 mb-4">{policy.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{policy.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Certifications */}
      <AnimatedSection>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Certifications & Standards
              </h2>
              <p className="text-xl text-gray-600">
                We adhere to industry-leading security standards and regulations
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {['GDPR', 'CCPA', 'ISO 27001', 'SOC 2'].map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary-500" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-900">{cert}</h3>
                  <p className="text-sm text-gray-600 mt-1">Compliant</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection>
        <section className="py-20 bg-primary-500">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Security Questions?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Our security team is available to address any questions or concerns about data protection.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <AlertTriangle className="h-6 w-6 text-primary-200" />
              <span className="text-primary-100">
                Report security issues to: Info@fusionhiretech.com
              </span>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};