import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Handshake, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/ui/AnimatedSection';

export const Services: React.FC = () => {
  const services = [
    {
      icon: Target,
      title: 'Executive Search',
      subtitle: 'C-Level & Senior Management',
      description: 'Specialized recruitment for executive positions requiring exceptional leadership and strategic vision.',
      features: [
        'Confidential search process',
        'Comprehensive candidate assessment',
        'Leadership competency evaluation',
        'Cultural fit analysis',
        'Reference verification',
        '90-day placement guarantee'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Direct Hire',
      subtitle: 'Permanent Placement Solutions',
      description: 'Full-time permanent staffing solutions tailored to your specific organizational requirements.',
      features: [
        'Thorough candidate screening',
        'Skills and competency testing',
        'Background verification',
        'Salary negotiation support',
        'Onboarding assistance',
        '6-month replacement guarantee'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Award,
      title: 'Temporary & Contract',
      subtitle: 'Flexible Staffing Solutions',
      description: 'Short-term and project-based staffing to meet your immediate and seasonal demands.',
      features: [
        'Rapid deployment capability',
        'Scalable workforce solutions',
        'Project-specific expertise',
        'Flexible contract terms',
        'Performance monitoring',
        'Seamless transition support'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Handshake,
      title: 'Specialist Recruiting',
      subtitle: 'Niche Talent Acquisition',
      description: 'Targeted recruitment for specialized roles requiring unique skills and expertise.',
      features: [
        'Industry-specific expertise',
        'Specialized skill assessment',
        'Niche market knowledge',
        'Technical competency validation',
        'Compliance verification',
        'Long-term partnership approach'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We begin by understanding your unique requirements, company culture, and long-term objectives.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'We develop a customized recruitment strategy tailored to your specific needs and market conditions.'
    },
    {
      step: '03',
      title: 'Sourcing',
      description: 'We leverage our extensive network and advanced tools to identify and attract top talent.'
    },
    {
      step: '04',
      title: 'Screening',
      description: 'We conduct thorough assessments to ensure candidates meet your technical and cultural requirements.'
    },
    {
      step: '05',
      title: 'Presentation',
      description: 'We present qualified candidates with detailed profiles and our professional recommendations.'
    },
    {
      step: '06',
      title: 'Support',
      description: 'We provide ongoing support throughout the interview process and successful placement integration.'
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
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive recruitment solutions designed to meet your unique hiring needs 
              with precision, efficiency, and exceptional results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <AnimatedSection>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} flex flex-col lg:flex-row items-center gap-12`}
                >
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mr-4`}>
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-blue-900">{service.title}</h3>
                        <p className="text-primary-500 font-medium">{service.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className={`relative h-80 rounded-2xl overflow-hidden bg-gradient-to-r ${service.color}`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <service.icon className="h-24 w-24 text-white/30" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Process Section */}
      <AnimatedSection>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Our Process
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A systematic approach to ensure we deliver the right talent for your organization
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative bg-white p-6 rounded-xl shadow-lg"
                >
                  <div className="absolute -top-4 left-6">
                    <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3 mt-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20 bg-primary-500">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Let us help you find the perfect talent solution for your organization's needs
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-500 font-medium text-lg rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};