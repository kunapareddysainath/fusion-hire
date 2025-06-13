import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import IndustryGrid from "../components/IndustryGrid";
import ServiceCard from "../components/ServiceCard";
import {
  Search,
  Users,
  Clock,
  Target,
  Star,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const Home = () => {
  const services = [
    {
      title: "Executive Search",
      description:
        "Find exceptional leadership talent for C-suite and senior management positions.",
      icon: Search,
      features: [
        "Executive assessment",
        "Cultural fit analysis",
        "Succession planning",
        "Leadership development",
      ],
      color: "bg-gradient-to-br from-primary-600 to-primary-700",
    },
    {
      title: "Direct Hire Solutions",
      description:
        "Full-time permanent placements for core team positions across all industries.",
      icon: Users,
      features: [
        "Comprehensive screening",
        "Skills assessment",
        "Background verification",
        "Onboarding support",
      ],
      color: "bg-gradient-to-br from-accent-500 to-accent-600",
    },
    {
      title: "Temporary & Contract",
      description:
        "Flexible workforce solutions for project-based and seasonal staffing needs.",
      icon: Clock,
      features: [
        "Rapid deployment",
        "Scalable teams",
        "Project management",
        "Flexible contracts",
      ],
      color: "bg-gradient-to-br from-emerald-500 to-emerald-600",
    },
    {
      title: "Specialized Recruiting",
      description:
        "Expert recruitment for niche, technical, and hard-to-fill specialized roles.",
      icon: Target,
      features: [
        "Industry expertise",
        "Technical assessment",
        "Niche market access",
        "Specialized networks",
      ],
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechFlow Solutions",
      content:
        "Fusion Hire Tech found us the perfect CTO within just 3 weeks. Their understanding of our culture and technical needs was exceptional.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "HR Director, AeroSpace Dynamics",
      content:
        "Their commitment to diversity and inclusion aligns perfectly with our values. Great candidates, great service.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, MedTech Innovations",
      content:
        "The specialized recruiting service helped us build our entire R&D team. Professional, efficient, and results-driven.",
      rating: 5,
    },
  ];

  return (
    <div>
      <Hero />

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              About Fusion Hire Tech
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We're revolutionizing the staffing industry through innovative
              technology, inclusive practices, and deep industry expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Inclusive Hiring
              </h3>
              <p className="text-neutral-600">
                Committed to diversity, equity, and inclusion in every placement
                we make.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Precision Matching
              </h3>
              <p className="text-neutral-600">
                Advanced algorithms combined with human insight for perfect
                fits.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Proven Results
              </h3>
              <p className="text-neutral-600">
                95% success rate with long-term placements and satisfied
                clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <IndustryGrid />

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Comprehensive staffing solutions tailored to your unique business
              needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-accent-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <span>Explore All Services</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* DEI Mission */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Our Commitment to Diversity & Inclusion
              </h2>
              <p className="text-xl text-neutral-600 max-w-4xl mx-auto">
                At Fusion Hire Tech, we believe that diverse teams drive
                innovation and success. Our mission is to create meaningful
                connections between talent and opportunity while championing
                equality in the workplace.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="md:col-span-2 flex justify-center">
                <div className="bg-gradient-to-br from-primary-500 to-accent-500 text-white p-8 rounded-xl text-center max-w-xl">
                  <h3 className="text-2xl font-bold mb-4">Join Our Journey</h3>
                  <p className="mb-6">
                    Together, we're building a more inclusive future where
                    talent knows no boundaries and opportunity is accessible to
                    all.
                  </p>
                  <Link
                    to="/about"
                    aria-label="Learn more about our commitment to diversity"
                    className="inline-flex items-center space-x-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-16 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proud Collaboration with Azista Aerospace
            </h2>
            <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
              We're honored to partner with Azista Aerospace, a leader in
              aerospace innovation, to provide specialized talent solutions for
              the aerospace industry.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
              <div className="flex items-center space-x-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">A</span>
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white">
                    Azista Aerospace
                  </h3>
                  <p className="text-neutral-300">
                    Innovation in Aerospace Technology
                  </p>
                </div>
              </div>

              <a
                href="https://azista-aerospace.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <span>Visit Azista Aerospace</span>
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
