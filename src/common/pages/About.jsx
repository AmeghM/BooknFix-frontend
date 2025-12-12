import React from "react";
import { FiZap, FiGlobe, FiMessageSquare, FiShield } from "react-icons/fi";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Header />
      <div className="space-y-10 py-10">
        <header className="text-center pb-6 border-b border-gray-200">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
            About <span className="text-orange-600">BooknFix</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            BooknFix is a digital platform designed to simplify the connection
            between local service providers and users, making home and
            professional services easy to find and book.
          </p>
        </header>

        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-orange-500 pl-3">
            Our Core Vision
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            The primary goal of BooknFix is to make local service booking
            efficient and stress-free for everyone. For <strong>users</strong>,
            this means finding reliable help quickly. For
            <strong>workers</strong>, it means managing services and handling
            bookings efficiently in one place.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            By streamlining communication and reducing the time spent searching
            and coordinating, we aim to be the definitive platform for the
            service exchange industry.
          </p>
        </section>

        <section className="bg-orange-50 p-8 rounded-xl shadow-inner">
          <h2 className="text-3xl font-bold text-orange-800 mb-6 text-center">
            Benefits and Key Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4 p-5 bg-white rounded-xl shadow">
              <FiZap className="w-10 h-10 text-orange-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Efficiency & Speed
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Streamlined booking tools reduce friction and help jobs get
                  done faster and easier.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-5 bg-white rounded-xl shadow">
              <FiGlobe className="w-10 h-10 text-orange-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Local Connection
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  We connect users with verified local professionals for quicker
                  response times.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-5 bg-white rounded-xl shadow">
              <FiMessageSquare className="w-10 h-10 text-orange-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Seamless Communication
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Real-time chat ensures clear and easy coordination with
                  service providers.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-5 bg-white rounded-xl shadow">
              <FiShield className="w-10 h-10 text-orange-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Trust & Transparency
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Ratings, reviews, and clear pricing build trust across the
                  entire platform.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default About;
