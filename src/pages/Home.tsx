import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Users, Target, Award, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { ServiceCard } from "../components/ui/ServiceCard";
import { StatCard } from "../components/ui/StatCard";

export const Home: React.FC = () => {
  const services = [
    {
      icon: Target,
      title: "Executive Search",
      description:
        "Premium executive placement services for C-level and senior management positions.",
    },
    {
      icon: Users,
      title: "Direct Hire",
      description:
        "Permanent staffing solutions tailored to your specific organizational needs.",
    },
    {
      icon: Award,
      title: "Temporary & Contract",
      description:
        "Flexible staffing solutions for short-term projects and seasonal demands.",
    },
    {
      icon: Handshake,
      title: "Specialist Recruiting",
      description:
        "Niche talent acquisition for specialized roles across various industries.",
    },
  ];

  const stats = [
    { number: "100+", label: "Successful Placements" },
    { number: "15+", label: "Industry served" },
    { number: "98%", label: "Client Satisfaction" },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg')] bg-cover bg-center opacity-25"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
              Discover the Power of
              <span className="text-primary-500 block">
                {" "}
                Exceptional Talent
              </span>
            </h1>
            <p className="text-xl text-dark-600 mb-8 max-w-3xl mx-auto">
              At Fusion Hire Techology, we craft innovative staffing experiences
              that match top-tier professionals with visionary companies,
              fostering growth, diversity, and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-primary-500 text-primary-500 font-medium rounded-lg hover:bg-primary-50 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collaboration Banner */}
      <AnimatedSection>
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 text-center">
                Proud Partners
              </h2>
              <p className="text-center text-gray-600 mt-2">
                Collaborating with industry leaders to deliver innovative
                solutions
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {/* Partner Azista */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2 text-center">
                    Azista Industries
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Azista is a technology company focused on improving people’s
                    lives by providing innovative products across a continuum of
                    daily needs from food and nutrition to medical devices and
                    crop advisory using earth observatory satellites.
                  </p>
                </div>
                <a
                  href="https://www.azistaindustries.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors mt-auto"
                >
                  Visit Azista
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
              {/* Add more partner cards here as needed */}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive recruitment solutions tailored to meet your unique
                business needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  {...service}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection>
        <section className="py-20 bg-primary-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Impact
              </h2>
              <p className="text-xl text-primary-100">
                Numbers that reflect our commitment to excellence
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <StatCard key={stat.label} {...stat} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let us help you find the perfect talent or connect you with your
              dream opportunity
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-white font-medium text-lg rounded-lg hover:bg-primary-600 transition-colors"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};
