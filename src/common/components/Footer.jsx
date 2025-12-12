import React from "react";

// ⭐ React Icons Replacements
import {
  FaHome,
  FaTools,
  FaUsers,
  FaEnvelope,
  FaQuestionCircle,
  FaShieldAlt,
  FaFileAlt,
  FaBriefcase,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaRocket,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-orange-100 px-4 md:px-16 lg:px-28 py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-extrabold mb-4 text-orange-600">
            BooknFix
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Your trusted partner for quick and reliable home services. We
            connect you with certified professionals for all your repair and
            maintenance needs.
          </p>

          <div className="flex space-x-4 mt-6">
            <a
              href="https://facebook.com"
              className="text-gray-600 hover:text-orange-500 transition duration-300 transform hover:scale-110 text-xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-600 hover:text-orange-500 transition duration-300 transform hover:scale-110 text-xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-600 hover:text-orange-500 transition duration-300 transform hover:scale-110 text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-600 hover:text-orange-500 transition duration-300 transform hover:scale-110 text-xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="md:col-span-1">
          <h3 className="text-lg font-bold mb-4 text-gray-800">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="/"
                className="text-gray-700 hover:text-orange-500 transition duration-300 text-sm flex items-center space-x-2"
              >
                <span className="text-orange-500">
                  <FaHome size={16} />
                </span>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="text-gray-700 hover:text-orange-500 transition duration-300 text-sm flex items-center space-x-2"
              >
                <span className="text-orange-500">
                  <FaTools size={16} />
                </span>
                <span>Services</span>
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-gray-700 hover:text-orange-500 transition duration-300 text-sm flex items-center space-x-2"
              >
                <span className="text-orange-500">
                  <FaUsers size={16} />
                </span>
                <span>About Us</span>
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-gray-700 hover:text-orange-500 transition duration-300 text-sm flex items-center space-x-2"
              >
                <span className="text-orange-500">
                  <FaEnvelope size={16} />
                </span>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h3 className="text-lg font-bold mb-4 text-gray-800">Support</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="/faqs"
                className="text-gray-700 hover:text-orange-500 transition duration-300 text-sm flex items-center space-x-2"
              >
                <span className="text-orange-500">
                  <FaQuestionCircle size={16} />
                </span>
                <span>FAQs</span>
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="text-gray-700 hover:text-orange-500 transition duration-300 text-sm flex items-center space-x-2"
              >
                <span className="text-orange-500">
                  <FaShieldAlt size={16} />
                </span>
                <span>Privacy Policy</span>
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="text-gray-700 hover:text-orange-500 transition duration-300 text-sm flex items-center space-x-2"
              >
                <span className="text-orange-500">
                  <FaFileAlt size={16} />
                </span>
                <span>Terms of Service</span>
              </a>
            </li>
            <li>
              <a
                href="/careers"
                className="text-gray-700 hover:text-orange-500 transition duration-300 text-sm flex items-center space-x-2"
              >
                <span className="text-orange-500">
                  <FaBriefcase size={16} />
                </span>
                <span>Careers</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h3 className="text-lg font-bold mb-4 text-gray-800 flex items-center space-x-2">
            <FaRocket size={20} className="text-orange-500" />
            <span>Stay Connected</span>
          </h3>
          <p className="text-gray-700 text-sm mb-4">
            Subscribe to our newsletter for exclusive offers and updates.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 w-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-orange-500 text-sm rounded-l-md"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white p-2 hover:bg-orange-600 transition duration-300 text-sm font-semibold rounded-r-md"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-300 pt-6 text-gray-600 text-center mt-10">
        <p className="text-sm">
          &copy; 2025 Copyright BooknFix. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
