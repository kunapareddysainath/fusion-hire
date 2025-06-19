import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Award, Heart } from "lucide-react";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import directorImage from "../assets/director-placeholder.png";

export const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "We strive for excellence in every placement, ensuring the perfect match between talent and opportunity.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description:
        "Our business is built on trust, transparency, and ethical practices in all our interactions.",
    },
    {
      icon: Users,
      title: "Partnership",
      description:
        "We build lasting relationships with our clients and candidates, becoming true strategic partners.",
    },
    {
      icon: Award,
      title: "Innovation",
      description:
        "We continuously evolve our methods and technology to stay ahead in the recruitment industry.",
    },
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
              About Fusion Hire Technologies
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a premier IT and staffing recruitment company dedicated to
              connecting exceptional talent with outstanding opportunities
              across diverse industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <AnimatedSection>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  At Fusion Hire Technologies, we believe that the right talent
                  in the right role can transform organizations and drive
                  extraordinary results. Our mission is to bridge the gap
                  between exceptional talent and visionary companies.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We leverage cutting-edge technologies, deep industry
                  expertise, and a personalized approach to deliver recruitment
                  solutions that exceed expectations and create lasting value
                  for all stakeholders.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg"
                  alt="Team collaboration"
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Values Section */}
      <AnimatedSection>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do and define who we are
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Our Approach
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine human expertise with advanced technology to deliver
                personalized, efficient, and effective recruitment solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-500">1</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  Understanding
                </h3>
                <p className="text-gray-600">
                  We deeply understand your unique requirements, culture, and
                  long-term objectives.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-500">2</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  Sourcing
                </h3>
                <p className="text-gray-600">
                  We leverage our extensive network and advanced tools to
                  identify top talent.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-500">3</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  Matching
                </h3>
                <p className="text-gray-600">
                  We ensure perfect alignment between candidate skills and
                  organizational needs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Culture Section */}
      <AnimatedSection>
        <section className="py-20 bg-primary-500">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Culture
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              We foster a culture of collaboration, continuous learning, and
              innovation. Our diverse team brings together expertise from
              various industries and backgrounds, creating a dynamic environment
              where ideas flourish and excellence thrives.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-primary-100">Support Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">Global</div>
                <div className="text-primary-100">Reach & Network</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-primary-100">Client Focused</div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Director's Note Section */}
      <AnimatedSection>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                  Director’s Note
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Welcome to <strong>Fusion Hire Technologies</strong>.
                </p>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  At Fusion Hire, we believe that the right people can transform
                  organizations and that meaningful careers can transform lives.
                  In today’s ever-evolving workforce, finding the perfect match
                  between talent and opportunity requires more than just filling
                  positions — it demands insight, dedication, and genuine
                  partnership.
                </p>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Since our founding, we have built our reputation on integrity,
                  personalized service, and a deep understanding of both our
                  clients’ needs and our candidates’ aspirations. Whether you
                  are a business seeking exceptional talent or a professional
                  pursuing your next career opportunity, our team is committed
                  to guiding you every step of the way.
                </p>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  <strong>Our mission is simple:</strong> connecting people to
                  possibilities. <br />
                  <strong>Our vision is clear:</strong> building lasting
                  relationships that drive success.
                </p>
                <p className="text-lg text-gray-700 mt-8 leading-relaxed">
                  Thank you for trusting Fusion Hire Technologies as your
                  staffing and recruiting partner. We look forward to being part
                  of your journey.
                </p>
                <div className="mt-6">
                  <p className="text-lg text-blue-900 font-semibold">
                    Warm regards,
                  </p>
                  <p className="text-lg text-blue-900 font-semibold">
                    Eshita Kandikonda
                  </p>
                  <p className="text-lg text-gray-600 italic">
                    Director, Fusion Hire Technologies
                  </p>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img
                  src={directorImage}
                  alt="Director at work"
                  className="rounded-2xl shadow-xl w-full"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};
