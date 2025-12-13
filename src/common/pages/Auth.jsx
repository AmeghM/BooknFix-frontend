import React, { useState } from "react";
import "../../../src/index.css";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { loginAPI, registerAPI } from "../../services/allAPI";

function Auth({ register }) {
  const [showPassword, setShowPassword] = useState(false);
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleRegister = async () => {
    const { username, email, phone, password } = userDetails;
    if (!username || !email || !phone || !password) {
      alert("Fill all the fields!!");
    } else {
      const result = await registerAPI(userDetails);
      console.log(result);
      if (result.status == 200) {
        alert("Registered Successfully");
        setUserDetails({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        navigate("/login");
      } else if (result.status == 404) {
        alert(result.response.data);
        setUserDetails({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
      } else {
        alert("Somethin went wrong");
        setUserDetails({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
      }
    }
  };

  const handleLogin = async () => {
    const { email, password } = userDetails;

    if (!email || !password) {
      alert("Fill all the fields!!");
    } else {
      try {
        const result = await loginAPI(userDetails);
        console.log(result);
        if (result.status == 200) {
          alert("Login Successfull");
          setUserDetails({
            username: "",
            email: "",
            phone: "",
            password: "",
          });
          navigate("/");
        } else if (result.status == 404) {
          alert(result.response.data);
          setUserDetails({
            username: "",
            email: "",
            phone: "",
            password: "",
          });
        } else if (result.status == 401) {
          alert(result.response.data);
        } else {
          alert("Something went wrong");
          setUserDetails({
            username: "",
            email: "",
            phone: "",
            password: "",
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  console.log(userDetails);
  return (
    <div
      className={`content w-full min-h-screen flex justify-center items-center bg-orange-100 ${
        register ? "active" : ""
      }`}
    >
      <div className="p-4 w-full flex justify-center">
        <div
          className="
            w-full 
            max-w-5xl 
            rounded-4xl 
            shadow-xl 
            relative 
            overflow-hidden
            bg-orange-200/70
            flex 
            flex-col md:flex-row
            min-h-screen md:min-h-fit
          "
        >
          {/* REGISTER FORM */}
          <div className="w-full md:w-1/2 p-6 md:p-10 flex justify-center items-center">
            <form className="w-full max-w-sm space-y-4">
              <div className="text-center mb-2 md:mb-4">
                <h1 className="font-bold text-3xl md:text-2xl">
                  Create Account
                </h1>
              </div>

              <input
                type="text"
                placeholder="Username"
                onChange={(e) => {
                  setUserDetails({ ...userDetails, username: e.target.value });
                }}
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-lg"
              />

              <input
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setUserDetails({ ...userDetails, email: e.target.value });
                }}
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-lg"
              />

              <input
                type="text"
                placeholder="Phone"
                onChange={(e) => {
                  setUserDetails({ ...userDetails, phone: e.target.value });
                }}
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-lg"
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      password: e.target.value,
                    });
                  }}
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-lg"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-4"
                >
                  {showPassword ? (
                    <FaRegEye className="text-black text-xl" />
                  ) : (
                    <FaRegEyeSlash className="text-black text-xl" />
                  )}
                </button>
              </div>

              <button
                onClick={handleRegister}
                type="button"
                className="w-full rounded-lg px-4 py-3 bg-orange-500 text-white text-xl shadow hover:bg-white hover:text-orange-500 hover:border hover:border-orange-400 transition-all"
              >
                Register
              </button>
              <div>
                <p>
                  Are you Already a user?
                  <Link
                    className="ms-1 font-medium text-blue-400 hover:underline transition "
                    to={"/login"}
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>

          <div className="w-full md:w-1/2 p-6 md:p-10 flex justify-center items-center border-t md:border-t-0 md:border-l border-orange-300/50">
            <form className="w-full max-w-sm space-y-4">
              <div className="text-center mb-2 md:mb-4">
                <h1 className="font-bold text-3xl md:text-2xl">Sign In</h1>
              </div>

              <input
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setUserDetails({ ...userDetails, email: e.target.value });
                }}
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-lg"
                required
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      password: e.target.value,
                    });
                  }}
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-lg"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-4"
                >
                  {showPassword ? (
                    <FaRegEye className="text-black text-xl" />
                  ) : (
                    <FaRegEyeSlash className="text-black text-xl" />
                  )}
                </button>
              </div>

              <button
                onClick={handleLogin}
                type="button"
                className="w-full rounded-lg px-4 py-3 bg-orange-500 text-white text-xl shadow hover:bg-white hover:text-orange-500 hover:border hover:border-orange-400 transition-all"
              >
                Login
              </button>

              <div>
                <p>
                  Are you a new user?
                  <Link
                    className="ms-1 font-medium text-blue-400 hover:underline transition "
                    to={"/register"}
                  >
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>

          <div
            className="
            switch-content 
            hidden md:block 
            absolute 
            top-0 
            right-1/2 
            w-1/2 
            h-full 
            overflow-hidden 
            transition-all 
            duration-500 
            rounded-tr-3xl 
            rounded-br-3xl 
            z-50
          "
          >
            <div className="switch-box bg-orange-400 relative w-[200%] h-full flex transition-all duration-500 -left-full">
              <div className="switch-panel switch-left absolute w-1/2 h-full flex flex-col items-center justify-center text-center text-white">
                <h1 className="font-medium text-2xl">Hello, Again</h1>
                <p className="text-xl">We are happy to see you back</p>

                <Link
                  className="font-medium rounded px-4 py-2 border border-white mt-3 hover:bg-orange-300/75 hover:text-orange-500"
                  to="/login"
                >
                  Login
                </Link>
              </div>

              <div className="switch-panel switch-right absolute w-1/2 h-full flex flex-col items-center justify-center text-center text-white">
                <h1 className="text-2xl font-medium">Welcome</h1>
                <p className="text-xl">Join us and Explore a New Experience</p>

                <Link
                  className="font-medium rounded px-4 py-2 border border-white mt-3 hover:bg-orange-300/75 hover:text-orange-500"
                  to="/register"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
