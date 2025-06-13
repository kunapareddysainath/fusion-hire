import React from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-primary-600 to-accent-500 p-2 rounded-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">Fusion</span>
                <span className="text-xl font-bold text-primary-400 ml-1">
                  Hire Tech
                </span>
              </div>
            </Link>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Creating meaningful connections between talent and opportunity
              through inclusive hiring practices.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-neutral-300">
                <Mail className="h-4 w-4" />
                <span>Info@fusionhiretech.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-neutral-300">
                <Phone className="h-4 w-4" />
                <span>+91 8977719721</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-neutral-300">
                <MapPin className="h-4 w-4" />
                <span>RAM SVR, Plot No 4/2, Sector 1, Madhapur, HUDA Techno Enclave, Hi-tech City, Hyderabad, Telangana - 500081</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/industries"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  to="/data-security"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Data Security
                </Link>
              </li>
              <li>
                <Link
                  to="/cookie-policy"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Partnership */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Partnership</h3>
            <div className="bg-neutral-800 p-4 rounded-lg border border-neutral-700">
              <p className="text-sm text-neutral-300 mb-3">
                Proud Collaboration with
              </p>
              <div className="flex items-center space-x-2">
                <div className="bg-white p-2 rounded">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">A</span>
                  </div>
                </div>
                <div>
                  <a
                    href="https://www.azistaindustries.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium hover:text-primary-400 transition-colors flex items-center space-x-1"
                  >
                    <span>Azista Aerospace</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  <p className="text-xs text-neutral-400">
                    Aerospace Innovation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
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
                href="https://www.twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-neutral-800 mt-8 pt-8">
          <div className="flex justify-center">
            <p className="text-neutral-400 text-sm text-center">
              © {new Date().getFullYear()} Fusion Hire Tech. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
