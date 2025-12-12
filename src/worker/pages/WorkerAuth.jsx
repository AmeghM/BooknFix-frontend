import React, { useState } from "react";
import workers from "../../assets/images/workers.png";

function WorkerAuth() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-orange-100 via-orange-200 to-orange-300 flex items-center justify-center p-4">
        <div className="w-full max-w-5xl bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden flex flex-col lg:flex-row">
          {/* LEFT */}
          <div className="lg:w-1/2 bg-linear-to-br from-orange-500 to-orange-700 p-10 flex flex-col justify-center text-white">
            <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">
              {isLogin ? "Worker Login" : "Worker Registration"}
            </h2>

            <p className="text-lg opacity-90 leading-relaxed">
              {isLogin
                ? "Login to access your dashboard, manage bookings, and update your services."
                : "Register to join our professional network and get service bookings from customers."}
            </p>

            <img
              src={workers}
              alt="Worker"
              className="w-72 drop-shadow-2xl mx-auto mt-10"
            />
          </div>

          {/* RIGHT SECTION */}
          <div className="lg:w-1/2 p-10 bg-white flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              {isLogin ? "Welcome Back!" : "Create Your Worker Account"}
            </h3>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* LOGIN  */}
              {isLogin ? (
                <>
                  <div className="md:col-span-2">
                    <label className="font-semibold text-gray-700">
                      Email / Mobile
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 rounded-xl mt-1 border focus:ring-2 focus:ring-orange-400 outline-none"
                      placeholder="Enter your email or phone"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="font-semibold text-gray-700">
                      Password
                    </label>
                    <input
                      type="password"
                      className="w-full p-3 rounded-xl mt-1 border focus:ring-2 focus:ring-orange-400 outline-none"
                      placeholder="Enter your password"
                    />
                  </div>
                </>
              ) : (
                <>
                  {/* REGISTER*/}
                  <div>
                    <label className="font-semibold text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 rounded-xl mt-1 border focus:ring-2 focus:ring-orange-400 outline-none"
                      placeholder="Enter your Full Name"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-gray-700">Email</label>
                    <input
                      type="email"
                      className="w-full p-3 rounded-xl mt-1 border focus:ring-2 focus:ring-orange-400 outline-none"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-gray-700">
                      Mobile Number
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 rounded-xl mt-1 border focus:ring-2 focus:ring-orange-400 outline-none"
                      placeholder="Enter phone number"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-gray-700">
                      Password
                    </label>
                    <input
                      type="password"
                      className="w-full p-3 rounded-xl mt-1 border focus:ring-2 focus:ring-orange-400 outline-none"
                      placeholder="Create a password"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-gray-700">
                      Service Category
                    </label>
                    <select className="w-full p-3 rounded-xl mt-1 border focus:ring-2 focus:ring-orange-400 outline-none">
                      <option>Plumber</option>
                      <option>Electrician</option>
                      <option>Carpenter</option>
                      <option>Painter</option>
                      <option>Gardener</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-semibold text-gray-700">
                      Experience (Years)
                    </label>
                    <input
                      type="number"
                      className="w-full p-3 rounded-xl mt-1 border focus:ring-2 focus:ring-orange-400 outline-none"
                      placeholder="e.g., 5"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="font-semibold text-gray-700">
                      Service Area / Pincode
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 rounded-xl mt-1 border focus:ring-2 focus:ring-orange-400 outline-none"
                      placeholder="Enter the area"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="font-semibold text-gray-700">
                      Government ID Upload
                    </label>
                    <input
                      type="file"
                      className="w-full p-3 rounded-xl mt-1 border"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="font-semibold text-gray-700">
                      Certificates / Licenses
                    </label>
                    <input
                      type="file"
                      className="w-full p-3 rounded-xl mt-1 border"
                    />
                  </div>
                </>
              )}

              {/* BUTTON */}
              <button className="md:col-span-2 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-xl shadow-lg mt-2 transition">
                {isLogin ? "Login" : "Register"}
              </button>
            </form>

            <p className="text-center mt-6">
              {isLogin ? "Don't have an account?" : "Already registered?"}{" "}
              <span
                className="text-orange-600 font-semibold cursor-pointer hover:underline"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Register" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkerAuth;
