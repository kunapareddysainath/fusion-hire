import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Heart, Plane } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 text-white">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Connect With
                <span className="block text-accent-300">Talent Today</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                Fusion Hire Tech bridges the gap between exceptional talent and
                forward-thinking companies through inclusive, innovative
                staffing solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                Our Services
              </Link>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-300">17</div>
                <div className="text-sm text-blue-100">Industries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-300">95%</div>
                <div className="text-sm text-blue-100">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <Users className="h-8 w-8 text-accent-300 mb-3" />
                  <h3 className="font-semibold mb-2">Inclusive Hiring</h3>
                  <p className="text-sm text-blue-100">
                    Empowering diversity in every placement
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <Target className="h-8 w-8 text-accent-300 mb-3" />
                  <h3 className="font-semibold mb-2">Precision Matching</h3>
                  <p className="text-sm text-blue-100">
                    Advanced algorithms meet human insight
                  </p>
                </div>
              </div>
              <div className="space-y-6 mt-8">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <Heart className="h-8 w-8 text-accent-300 mb-3" />
                  <h3 className="font-semibold mb-2">Culture Fit</h3>
                  <p className="text-sm text-blue-100">
                    Building lasting professional relationships
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <a
                    href="https://www.azistaindustries.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Plane className="h-8 w-8 text-accent-300 mb-3" />{" "}
                    <div className="text-lg font-semibold mb-1">
                      Partnered with
                    </div>
                    <div className="text-accent-300 font-bold">
                      Azista Aerospace
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
