import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FiSearch } from "react-icons/fi";
// import bgImage from "../../assets/images/bgimage.png";
import backgroundImage from "../../assets/images/backgroundImage.jpg";
import {
  HiOutlineUserGroup,
  HiOutlineCurrencyDollar,
  HiOutlineCheckBadge,
} from "react-icons/hi2";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <Header />
      <section className="relative h-[650px] md:h-[750px] flex items-center justify-center overflow-hidden">
        {/* Background Image Container */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              // "url(https://omfax.co.uk/wp-content/uploads/2022/03/Housing-Repairs-with-SORs-scaled-1.jpeg)",

              // `url(${bgImage})`,
              `url(${backgroundImage})`,
          }}
        >
          {/*Overlay*/}
          <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
        </div>

        <div className="relative z-10 text-center p-4 max-w-4xl w-full">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
            The Right Expert for Every Home Project.
          </h1>

          <p className="text-xl md:text-2xl font-normal text-orange-300 mb-10 drop-shadow-md">
            Book verified local professionals with guaranteed quality.
          </p>

          {/*  Search Bar */}
          {/* <div className="mt-8 flex justify-center">
            <div className="flex w-full max-w-xl bg-white p-2 rounded-xl shadow-2xl">
              <input
                type="text"
                placeholder="What service do you need? (e.g., Plumbing, Cleaning, Carpentry)"
                className="grow p-3 text-gray-800 placeholder-gray-500 bg-transparent focus:outline-none"
              />
              <button className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition duration-300 flex items-center">
                <FiSearch className="h-5 w-5 mr-2" />
                Search
              </button>
            </div>
          </div> */}

          <div className="mt-5">
            <p className="text-sm  text-white">
              Are you a professional?
              <Link
                to={"/worker-login"}
                className="font-medium text-orange-400 hover:text-orange-600 transition duration-300 underline ml-1"
              >
                Join our network and get jobs today.
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold text-orange-600 tracking-wide uppercase">
              Why Choose Us?
            </h2>
            <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Your Home Projects, Simplified.
            </p>
            <p className="mt-4 text-xl text-gray-500">
              We connect you with vetted, skilled professionals for any task,
              big or small.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <div className="bg-white p-8 rounded-2xl shadow-xl transition duration-500 hover:shadow-2xl hover:scale-[1.02]">
              <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-orange-100 text-orange-600 mb-6">
                <HiOutlineUserGroup className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Vetted Professionals
              </h3>
              <p className="text-gray-500">
                Every expert in our network is background-checked, insured, and
                verified for quality. No guesswork, just great work.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl transition duration-500 hover:shadow-2xl hover:scale-[1.02]">
              <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-orange-100 text-orange-600 mb-6">
                <HiOutlineCurrencyDollar className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Upfront Pricing
              </h3>
              <p className="text-gray-500">
                Say goodbye to surprise fees and hidden charges.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl transition duration-500 hover:shadow-2xl hover:scale-[1.02]">
              <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-orange-100 text-orange-600 mb-6">
                <HiOutlineCheckBadge className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Satisfaction Guaranteed
              </h3>
              <p className="text-gray-500">
                We stand by the quality of work. If you're not satisfied, we'll
                make it right—guaranteed.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a
              href="/login"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-lg font-medium rounded-full shadow-lg text-white bg-orange-600 hover:bg-orange-700 transition duration-300 transform hover:scale-[1.05]"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </section>
      <section className="md:px-40 p-5 py-20 flex flex-col justify-center items-center">
        <div className="text-center">
          <h2 className="text-base font-semibold text-orange-600 tracking-wide uppercase">
            Testimonials
          </h2>
          <h2 className="text-2xl font-medium">See What Others Are Saying</h2>
        </div>
        <div className="md:grid grid-cols-3 w-full mt-5">
          <div className="p-3">
            <div className="flex flex-col justify-center items-center shadow-md p-3 rounded">
              <img
                height={"200px"}
                width={"45%"}
                src="https://mockmind-api.uifaces.co/content/human/80.jpg"
                alt=""
                className="rounded-full"
              />
              <div className="text-center mt-3 space-y-2">
                <p className=" text-xl">John</p>
                <p className="text-gray-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="p-3">
            <div className="flex flex-col justify-center items-center shadow-md p-3 rounded">
              <img
                height={"200px"}
                width={"45%"}
                src="https://mockmind-api.uifaces.co/content/human/104.jpg"
                alt=""
                className="rounded-full"
              />
              <div className="text-center mt-3 space-y-2">
                <p className=" text-xl">Jack</p>
                <p className="text-gray-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="p-3">
            <div className="flex flex-col justify-center items-center shadow-md p-3 rounded">
              <img
                width={"45%"}
                src="https://mockmind-api.uifaces.co/content/human/222.jpg"
                alt=""
                className="rounded-full"
              />
              <div className="text-center mt-3 space-y-2">
                <p className=" text-xl font-medium">Max</p>
                <p className="text-gray-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default LandingPage;
