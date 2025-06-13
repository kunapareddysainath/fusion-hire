import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { Search, Users, Clock, Target, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Executive Search',
      description: 'Find exceptional leadership talent for C-suite and senior management positions with our comprehensive executive search services.',
      icon: Search,
      features: [
        'Confidential executive search process',
        'Comprehensive leadership assessment',
        'Cultural fit and values alignment analysis',
        'Succession planning consultation',
        'Executive onboarding support',
        'Performance milestone tracking'
      ],
      color: 'bg-gradient-to-br from-primary-600 to-primary-700'
    },
    {
      title: 'Direct Hire Solutions',
      description: 'Full-time permanent placements for core team positions across all industries with thorough vetting and cultural fit assessment.',
      icon: Users,
      features: [
        'Comprehensive candidate screening',
        'Skills and competency assessment',
        'Background verification and reference checks',
        'Cultural fit evaluation',
        'Salary negotiation support',
        '90-day placement guarantee'
      ],
      color: 'bg-gradient-to-br from-accent-500 to-accent-600'
    },
    {
      title: 'Temporary & Contract Staffing',
      description: 'Flexible workforce solutions for project-based, seasonal, and contract-to-hire staffing needs with rapid deployment capabilities.',
      icon: Clock,
      features: [
        'Rapid candidate deployment (24-48 hours)',
        'Scalable team solutions',
        'Project-based staffing',
        'Contract-to-hire options',
        'Flexible engagement terms',
        'Ongoing performance management'
      ],
      color: 'bg-gradient-to-br from-emerald-500 to-emerald-600'
    },
    {
      title: 'Specialized Recruiting',
      description: 'Expert recruitment for niche, technical, and hard-to-fill specialized roles requiring specific industry knowledge and expertise.',
      icon: Target,
      features: [
        'Deep industry expertise and networks',
        'Technical skill assessment',
        'Niche market access and sourcing',
        'Specialized role consultation',
        'Hard-to-fill position solutions',
        'Industry-specific candidate pipeline'
      ],
      color: 'bg-gradient-to-br from-purple-500 to-purple-600'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Consultation',
      description: 'We begin by understanding your unique needs, company culture, and specific requirements for the role.'
    },
    {
      step: '02',
      title: 'Strategic Sourcing',
      description: 'Our team leverages extensive networks and innovative sourcing strategies to identify top candidates.'
    },
    {
      step: '03',
      title: 'Comprehensive Screening',
      description: 'Every candidate undergoes thorough vetting, including skills assessment and cultural fit evaluation.'
    },
    {
      step: '04',
      title: 'Presentation & Interview',
      description: 'We present qualified candidates with detailed profiles and coordinate the interview process.'
    },
    {
      step: '05',
      title: 'Placement & Follow-up',
      description: 'We facilitate the hiring process and provide ongoing support to ensure successful placement.'
    }
  ];

  const differentiators = [
    {
      title: 'Diversity & Inclusion Focus',
      description: 'Every search includes diverse candidate pools and bias-free screening processes.'
    },
    {
      title: 'Industry Expertise',
      description: 'Deep knowledge across 17 industries with specialized recruiting teams.'
    },
    {
      title: 'Technology-Driven',
      description: 'Advanced matching algorithms combined with human insight for optimal results.'
    },
    {
      title: 'Guaranteed Results',
      description: 'Placement guarantees and ongoing support to ensure long-term success.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive staffing solutions tailored to your unique business needs, from executive search to specialized recruiting.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Complete Staffing Solutions
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From C-suite executives to specialized technical roles, we have the expertise to find the right talent for your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              A systematic approach that ensures we find the right candidates for your organization.
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="bg-gradient-to-r from-primary-600 to-accent-500 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Why Choose Fusion Hire Tech?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              What sets us apart in the competitive staffing landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-primary-100 p-2 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-neutral-600">
              Numbers that speak to our success and commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-600 mb-2">95%</div>
              <div className="text-lg font-semibold text-neutral-900 mb-1">Success Rate</div>
              <div className="text-neutral-600">Long-term placement success</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">14</div>
              <div className="text-lg font-semibold text-neutral-900 mb-1">Average Days</div>
              <div className="text-neutral-600">Time to placement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-lg font-semibold text-neutral-900 mb-1">Client Satisfaction</div>
              <div className="text-neutral-600">Based on client feedback</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Hiring?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our comprehensive staffing solutions can help you find the exceptional talent your organization needs to thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <span>Get Started Today</span>
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="/industries"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300"
            >
              View Industries
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;