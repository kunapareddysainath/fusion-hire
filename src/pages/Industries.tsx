import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { IndustryCard } from '../components/ui/IndustryCard';
import { 
  FileText, 
  Heart, 
  Plane, 
  Laptop, 
  Pill, 
} from 'lucide-react';

export const Industries: React.FC = () => {
  const industries = [
    {
      icon: FileText,
      title: 'Administration',
      description: 'Administrative support, office management, and executive assistance roles.',
      skills: ['Project Management', 'Communication', 'Organization', 'Microsoft Office', 'Scheduling']
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Medical professionals, healthcare administration, and clinical support staff.',
      skills: ['Patient Care', 'Medical Records', 'Clinical Skills']
    },
    {
      icon: Plane,
      title: 'Aerospace',
      description: 'Aerospace engineering, aviation, and defense industry professionals.',
      skills: ['CAD Design', 'Systems Engineering', 'Quality Assurance', 'FAA Regulations']
    },
    {
      icon: Laptop,
      title: 'Technology',
      description: 'IT infrastructure, cybersecurity, data analysis, and technical support.',
      skills: ['Network Administration', 'Cybersecurity', 'Database Management', 'Cloud Services']
    },
    {
      icon: Pill,
      title: 'Pharmaceuticals',
      description: 'Pharmaceutical research, regulatory affairs, and drug development.',
      skills: ['FDA Compliance', 'Clinical Research', 'Quality Assurance', 'Regulatory Affairs']
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
              Industries We Serve
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive recruitment solutions across diverse industries, 
              connecting specialized talent with the right opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <AnimatedSection>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <IndustryCard
                  key={industry.title}
                  {...industry}
                  delay={index * 0.05}
                />
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection>
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Don't See Your Industry?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We work across many additional sectors and are always expanding our expertise. 
              Contact us to discuss your specific industry needs.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-white font-medium text-lg rounded-lg hover:bg-primary-600 transition-colors"
            >
              Contact Us Today
            </motion.a>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};