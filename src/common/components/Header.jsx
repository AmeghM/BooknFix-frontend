import React from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { IoIosNotifications } from "react-icons/io";

function Header() {
  const [MenuOpen, setMenuOpen] = useState(false);

  const toggleNavbar = () => {
    setMenuOpen(!MenuOpen);
  };
  return (
    <>
      <nav className="sticky top-0 z-150 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center shrink-0">
              <h2 className="text-2xl font-bold text-orange-400">BooknFix</h2>
            </div>
            <ul className="hidden lg:flex ml-20 space-x-12">
              <li className="relative group">
                <Link to={"/"} className="font-semibold text-gray-700">
                  Home
                </Link>
                <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-linear-to-r  from-orange-500 to-yellow-400 transition-all group-hover:w-full duration-300 "></span>
              </li>
              <li className="relative group">
                <Link to={"/services"} className="font-semibold text-gray-700">
                  Services
                </Link>
                <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-linear-to-r  from-orange-500 to-yellow-400 transition-all group-hover:w-full duration-300 "></span>
              </li>
              <li className="relative group">
                <Link to={"/contact"} className="font-semibold text-gray-700">
                  Contact
                </Link>
                <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-linear-to-r  from-orange-500 to-yellow-400 transition-all group-hover:w-full duration-300 "></span>
              </li>
              <li className="relative group">
                <Link to={"/about"} className="font-semibold text-gray-700">
                  About
                </Link>
                <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-linear-to-r  from-orange-500 to-yellow-400 transition-all group-hover:w-full duration-300 "></span>
              </li>
            </ul>
            <div className="hidden lg:flex justify-center space-x-4 items-center">
              <button className="cursor-pointer">
                <IoIosNotifications className="text-xl text-amber-400" />
              </button>
              <Link to={"/worker-login"}>
                <button className="bg-linear-to-r border border-black py-1 px-3 rounded text-black text-sm  font-medium hover:bg-black hover:text-white transition ">
                  Get Jobs
                </button>
              </Link>

              <Link to={"/login"}>
                <button className="bg-linear-to-r from-orange-500 to-yellow-400 py-1 px-5 rounded-lg  text-white text-lg  font-medium hover:from-orange-600 hover:to-yellow-500 hover:shadow-yellow-500 shadow-orange-500">
                  Login
                </button>
              </Link>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {MenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {MenuOpen && (
            <div className="fixed right-0 z-100 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul className="text-gray-200">
                <li className="py-4">
                  <a href="">Home</a>
                </li>
                <li className="py-4">
                  <a href="">Services</a>
                </li>
                <li className="py-4">
                  <a href="">Contact</a>
                </li>
                <li className="py-4">
                  <a href="">About</a>
                </li>
              </ul>
              <div className="flex flex-col space-y-4">
                <Link
                  to="/login/user"
                  className="bg-linear-to-r from-orange-500 to-yellow-400 py-2 px-6 rounded-3xl text-white text-center"
                >
                  User Login
                </Link>

                <Link
                  to="/login/worker"
                  className="bg-linear-to-r from-orange-500 to-yellow-400 py-2 px-6 rounded-3xl text-white text-center"
                >
                  Worker Login
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Header;
