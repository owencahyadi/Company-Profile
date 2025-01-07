import React from "react";
import {
  Mail,
  MapPin,
  Phone,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Twitter", url: "https://twitter.com", icon: Twitter },
    { name: "Facebook", url: "https://facebook.com", icon: Facebook },
    { name: "Instagram", url: "https://instagram.com", icon: Instagram },
    { name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
  ];

  const quickLinks = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Services", url: "/services" },
    { name: "Portfolio", url: "/portfolio" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                Owen Corp
              </span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Transforming digital visions into reality. We create innovative
              solutions that help businesses thrive in the digital age.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="w-5 h-5 text-slate-300 hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-slate-300 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center text-slate-300">
                <Phone className="w-5 h-5 mr-3 text-violet-400" />
                <span>+62 123-4567-8910</span>
              </li>
              <li className="flex items-center text-slate-300">
                <Mail className="w-5 h-5 mr-3 text-violet-400" />
                <span>info@company.com</span>
              </li>
              <li className="flex items-center text-slate-300">
                <MapPin className="w-5 h-5 mr-3 text-violet-400" />
                <span>
                  123 Business Street, Suite 100
                  <br />
                  Tangerang, Banten
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Newsletter
            </h3>
            <p className="text-slate-300">
              Subscribe to our newsletter for updates and insights.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-violet-400 text-white placeholder-slate-400 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {currentYear} Owen Corp. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="/privacy"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
