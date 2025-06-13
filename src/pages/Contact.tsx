import React from 'react';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin, MessageSquare, Clock, Users } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'Info@fusionhiretech.com',
      description: 'Send us an email and we\'ll respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 8977719721',
      description: 'Speak directly with our staffing experts'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'RAM SVR, Plot No 4/2, Sector 1, Madhapur, HUDA Techno Enclave, Hi-tech City, Hyderabad, Telangana - 500081',
      description: 'Schedule an in-person consultation'
    },
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:30 AM - 6:30 PM IST' },
    { day: 'Saturday & Sunday', hours: 'Closed' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to find exceptional talent or take the next step in your career? Let's start the conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                  Get In Touch
                </h2>
                <p className="text-lg text-neutral-600">
                  Fill out the form below and our team will get back to you within 24 hours. For urgent matters, please call us directly.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                  Contact Information
                </h2>
                <p className="text-lg text-neutral-600 mb-8">
                  Multiple ways to reach our team of staffing professionals.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-primary-100 p-3 rounded-lg">
                        <Icon className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                          {info.title}
                        </h3>
                        <p className="text-neutral-900 font-medium mb-1">
                          {info.details}
                        </p>
                        <p className="text-neutral-600 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Office Hours */}
              <div className="mt-8 bg-neutral-50 p-6 rounded-xl">
                <div className="flex items-center space-x-2 mb-4">
                  <Clock className="h-6 w-6 text-primary-600" />
                  <h3 className="text-lg font-semibold text-neutral-900">
                    Office Hours
                  </h3>
                </div>
                <div className="space-y-2">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-neutral-700">{schedule.day}</span>
                      <span className="text-neutral-900 font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="mt-6 bg-accent-50 p-6 rounded-xl border border-accent-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Users className="h-5 w-5 text-accent-600" />
                  <h4 className="font-semibold text-neutral-900">
                    Emergency Staffing Needs
                  </h4>
                </div>
                <p className="text-sm text-neutral-600">
                  For urgent staffing requirements outside business hours, please use our WhatsApp contact for immediate assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Integration Notice */}
      <section className="py-12 bg-gradient-to-r from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Instant Communication
            </h3>
            <p className="text-lg text-neutral-600 mb-6 max-w-2xl mx-auto">
              When you submit our contact form, our team receives an immediate WhatsApp notification, ensuring rapid response to your staffing needs.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-neutral-500">
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Real-time notifications</span>
              </span>
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>24-hour response guarantee</span>
              </span>
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Direct team access</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-neutral-600">
              Common questions about our staffing services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  How quickly can you fill a position?
                </h3>
                <p className="text-neutral-600">
                  Our average time to placement is 14 days, but we can provide temporary solutions within 24-48 hours for urgent needs.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  What industries do you specialize in?
                </h3>
                <p className="text-neutral-600">
                  We serve 17 industries with particular expertise in technology, aerospace, and executive search across all sectors.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  Do you offer placement guarantees?
                </h3>
                <p className="text-neutral-600">
                  Yes, we provide 90-day placement guarantees for direct hire positions and ongoing support for all placements.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  What makes your DEI approach different?
                </h3>
                <p className="text-neutral-600">
                  We integrate diversity and inclusion at every step, from sourcing to screening, with special programs for underrepresented groups.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  How do you ensure candidate quality?
                </h3>
                <p className="text-neutral-600">
                  Our comprehensive screening includes skills assessment, background verification, and cultural fit evaluation.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  What are your fees?
                </h3>
                <p className="text-neutral-600">
                  Our fees are competitive and transparent, varying by service type and placement level. Contact us for detailed pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;