import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { AnimatedSection } from "../components/ui/AnimatedSection";

// Contact data storage
export let contactData: {
  name: string;
  email: string;
  phone: string;
  message: string;
}[] = [];

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "Info@fusionhiretech.com",
      link: "mailto:Info@fusionhiretech.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 8977719721",
      link: "tel:+918977719721",
    },
    {
      icon: MapPin,
      title: "Address",
      value:
        "RAM SVR, Plot No 4/2, Sector 1, Madhapur, HUDA Techno Enclave, Hi-tech City, Hyderabad, Telangana - 500081",
      link: "https://maps.google.com/?q=123+Business+Ave,+New+York,+NY+10001",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      contactData.push({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });

      console.log("Contact data stored:", contactData);
      // Create WhatsApp link
      const message = `Hello, my name is ${formData.name}. I would like to get in touch regarding your services. My email is ${formData.email} and my phone number is ${formData.phone}. Here is my message: ${formData.message}`;

      const whatsappURL = `https://wa.me/${"+918977719721"}?text=${encodeURIComponent(
        message
      )}`;

      window.open(whatsappURL, "_blank");

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error creating WhatsApp link:", error);
      alert("There was a problem redirecting to WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your hiring process? Get in touch with our team
              of recruitment experts.
            </p>
          </motion.div>
        </div>
      </section>

      <AnimatedSection>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-8">
                  Get in Touch
                </h2>
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.title}
                      href={info.link}
                      target={info.title === "Address" ? "_blank" : undefined}
                      rel={
                        info.title === "Address"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                        <info.icon className="h-6 w-6 text-primary-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-1">
                          {info.title}
                        </h3>
                        <p className="text-gray-600">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-800 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-green-700">
                      Your message has been sent via WhatsApp. We’ll get back to
                      you soon.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 text-green-600 hover:text-green-800 font-medium"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-blue-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-blue-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-blue-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-blue-700 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 resize-none"
                        placeholder="Tell us about your requirements..."
                      ></textarea>
                    </div>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-primary-500 text-white py-3 px-8 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                          <span>Redirecting...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          <span>Send via WhatsApp</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Urgent Hiring Needs?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              For immediate assistance with critical positions, call us directly
              at +91 8977719721
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+918977719721"
                className="inline-flex items-center px-8 py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
              <a
                href="mailto:info@fusionhire.tech"
                className="inline-flex items-center px-8 py-3 border border-primary-500 text-primary-500 font-medium rounded-lg hover:bg-primary-50"
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};
