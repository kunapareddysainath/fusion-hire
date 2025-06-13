import React from 'react';
import { Users, Target, Heart, Award, TrendingUp, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Fusion Hire Tech
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Creating meaningful connections between talent and opportunity through innovative, inclusive staffing solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="bg-primary-600 p-3 rounded-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-neutral-900 ml-4">Our Vision</h2>
              </div>
              <p className="text-lg text-neutral-700 leading-relaxed">
                To be the leading force in transforming the staffing industry by creating a world where every individual has equal access to meaningful career opportunities, regardless of their background, identity, or circumstances.
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent-50 to-primary-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="bg-accent-600 p-3 rounded-lg">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-neutral-900 ml-4">Our Mission</h2>
              </div>
              <p className="text-lg text-neutral-700 leading-relaxed">
                To revolutionize talent acquisition through inclusive hiring practices, innovative technology, and a deep commitment to empowering underrepresented groups, particularly women in technology and leadership roles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEI Practices */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Diversity, Equity & Inclusion Practices
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our commitment to DEI isn't just a policy—it's the foundation of everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-primary-100 p-3 rounded-lg w-fit mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Inclusive Sourcing
              </h3>
              <p className="text-neutral-600">
                We actively source candidates from diverse backgrounds and underrepresented communities, ensuring equal representation in our talent pipeline.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-accent-100 p-3 rounded-lg w-fit mb-4">
                <Award className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Bias-Free Screening
              </h3>
              <p className="text-neutral-600">
                Our recruitment process is designed to eliminate unconscious bias, focusing on skills, potential, and cultural fit rather than traditional markers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-emerald-100 p-3 rounded-lg w-fit mb-4">
                <TrendingUp className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Career Development
              </h3>
              <p className="text-neutral-600">
                We provide ongoing mentorship and career development opportunities to help underrepresented professionals advance in their careers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mb-4">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Community Partnerships
              </h3>
              <p className="text-neutral-600">
                We partner with diversity-focused organizations, educational institutions, and community groups to expand our reach and impact.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-pink-100 p-3 rounded-lg w-fit mb-4">
                <Heart className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Women in Tech Initiative
              </h3>
              <p className="text-neutral-600">
                Special programs and partnerships focused on placing women in technology and leadership roles, helping to close the gender gap in tech.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-indigo-100 p-3 rounded-lg w-fit mb-4">
                <Target className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Measurable Impact
              </h3>
              <p className="text-neutral-600">
                We track and report on diversity metrics, ensuring transparency and accountability in our commitment to inclusive hiring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-neutral-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-primary-100 p-2 rounded-lg">
                <Users className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Inclusion First</h3>
                <p className="text-neutral-600">
                  Every decision we make is filtered through the lens of inclusion and equity.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-accent-100 p-2 rounded-lg">
                <Target className="h-6 w-6 text-accent-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Excellence Always</h3>
                <p className="text-neutral-600">
                  We strive for excellence in every interaction, placement, and partnership.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-emerald-100 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Authentic Relationships</h3>
                <p className="text-neutral-600">
                  We build genuine, long-lasting relationships based on trust and mutual respect.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-2 rounded-lg">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Continuous Innovation</h3>
                <p className="text-neutral-600">
                  We continuously evolve our methods and technology to better serve our clients and candidates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Journey
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Whether you're a company looking for exceptional talent or a professional seeking your next opportunity, we're here to make meaningful connections happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Partner With Us
            </a>
            <a
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;