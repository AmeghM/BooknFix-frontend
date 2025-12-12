import React from "react";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { HiOutlineMapPin } from "react-icons/hi2";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Header />
      <div className="bg-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900">
              Get In Touch
            </h1>
            <p className="mt-2 text-xl text-gray-500">
              We're here to help you with your booking needs.
            </p>
          </div>

          <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2 bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>

              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 p-3"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 p-3"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 p-3"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-white bg-orange-600 hover:bg-orange-700 transition duration-300"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

            <div className="lg:col-span-1 mt-10 lg:mt-0 space-y-8">
              {/* Email */}
              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-orange-500">
                <HiOutlineMail className="h-8 w-8 text-orange-600 mb-3" />
                <h3 className="text-lg font-bold text-gray-900">
                  Email Support
                </h3>
                <p className="text-gray-600">
                  Our team will respond within 24 hours.
                </p>
                <a
                  href="mailto:booknfix@gmail.com"
                  className="mt-2 block text-orange-500 hover:text-orange-700 font-semibold"
                >
                  booknfix@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-orange-500">
                <HiOutlinePhone className="h-8 w-8 text-orange-600 mb-3" />
                <h3 className="text-lg font-bold text-gray-900">
                  Phone Support
                </h3>
                <p className="text-gray-600">
                  Available Mon-Fri, 9 AM - 5 PM EST.
                </p>
                <a
                  href="tel:9087654312"
                  className="mt-2 block text-orange-500 hover:text-orange-700 font-semibold"
                >
                  +91 9087654312
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
