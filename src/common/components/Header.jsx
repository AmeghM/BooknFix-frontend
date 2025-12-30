import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import { toast } from "react-toastify";
import { userProfileUpdateContext } from "../../context/ContextShare";
import SERVER_URL from "../../services/serverURL";
function Header() {
  const [MenuOpen, setMenuOpen] = useState(false);
  const [dropdownStatus, setDropdownStatus] = useState(false);
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [userProfile, setUserProfile] = useState("");
  const { userProfileUpdateStatus } = useContext(userProfileUpdateContext);

  console.log(username);
  const toggleNavbar = () => {
    setMenuOpen(!MenuOpen);
  };
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    toast.success("Logout Successfull");
    navigate("/");
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    }
    if (sessionStorage.getItem("existingUser")) {
      setUsername(JSON.parse(sessionStorage.getItem("existingUser")).username);
      setUserProfile(
        JSON.parse(sessionStorage.getItem("existingUser")).profile
      );
    }
  }, [userProfileUpdateStatus]);
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
              {token && (
                <li className="relative group">
                  <Link
                    to={"/my-bookings"}
                    className="font-semibold text-gray-700"
                  >
                    Bookings
                  </Link>
                  <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-linear-to-r  from-orange-500 to-yellow-400 transition-all group-hover:w-full duration-300 "></span>
                </li>
              )}
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
              {/* <button className="cursor-pointer">
                <IoIosNotifications className="text-xl text-amber-400" />
              </button> */}
              {!token ? (
                <>
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
                </>
              ) : (
                <div className="relative inline-block text-left">
                  <button
                    onClick={() => setDropdownStatus(!dropdownStatus)}
                    className="w-full flex items-center bg-white px-3 py-2 shadow-xs hover:bg-orange-100 rounded"
                  >
                    <img
                      src={
                        userProfile == ""
                          ? "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
                          : `${SERVER_URL}/imguploads/${userProfile}`
                      }
                      alt=""
                      className="w-[50px] h-[50px] rounded-full object-cover"
                    />
                    <p className="ms-2">{username}</p>
                  </button>
                  {dropdownStatus && (
                    <div className="absolute right-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-lg">
                      <Link
                        to={"/user-profile"}
                        className="block px-4 py-2 text-sm text-gray-70"
                      >
                        Profile
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block px-4 py-2 text-sm text-gray-70"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}
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
                  <Link to={"/"} className="font-semibold">
                    Home
                  </Link>
                </li>
                <li className="py-4">
                  <Link to={"/services"} className="font-semibold ">
                    Services
                  </Link>
                </li>
                <li className="py-4">
                  <Link to={"/contact"} className="font-semibold">
                    Contact
                  </Link>
                </li>
                <li className="py-4">
                  <Link to={"/about"} className="font-semibold">
                    About
                  </Link>
                </li>
              </ul>
              <div className="flex flex-col space-y-4">
                <Link
                  to="/login"
                  className="bg-linear-to-r from-orange-500 to-yellow-400 py-2 px-6 rounded-3xl text-white text-center"
                >
                  User Login
                </Link>

                <Link
                  to="/worker-login"
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
