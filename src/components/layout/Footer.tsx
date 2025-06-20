import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "../../assets/footer-logo.png";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logo} className="h-16 w-42" alt="Logo" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading IT and staffing recruitment company providing
              comprehensive hiring solutions across multiple industries with
              excellence and integrity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Industries", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-primary-500 transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {[
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms of Use", path: "/terms-of-use" },
                { name: "Data Security", path: "/data-security" },
                { name: "Cookie Policy", path: "/cookie-policy" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-primary-500 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact, Partnership, Social */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Mail className="h-4 w-4 text-primary-500 mt-0.5" />
                  <span className="text-gray-300 text-sm">
                    Info@fusionhiretech.com
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <Phone className="h-4 w-4 text-primary-500 mt-0.5" />
                  <span className="text-gray-300 text-sm">+91 8977719721</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-primary-500 mt-0.5" />
                  <span className="text-gray-300 text-sm">
                    RAM SVR, Plot No 4/2, Sector 1, Madhapur, HUDA Techno
                    Enclave, Hi-tech City, Hyderabad, Telangana - 500081
                  </span>
                </div>
              </div>
            </div>

            {/* Partnership */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-sm font-medium mb-2">Partner</h4>
              <a
                href="https://www.azistaindustries.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors"
              >
                <span className="text-sm font-medium">Azista Industries</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-neutral-800 mt-8 pt-8">
          <div className="flex flex-col items-center space-y-4">
            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/company/105025438/admin/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="text-neutral-400 text-center text-sm">
              © {new Date().getFullYear()} Fusion Hire Tech. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
