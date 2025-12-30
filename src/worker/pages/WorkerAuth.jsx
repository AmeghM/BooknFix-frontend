import React, { useState } from "react";
import workers from "../../assets/images/workers.png";
import { useNavigate } from "react-router-dom";
import { workerLoginAPI, workerRegisterAPI } from "../../services/allAPI";
import { toast } from "react-toastify";

function WorkerAuth() {
  const [isLogin, setIsLogin] = useState(false);
  const [workerDetails, setWorkerDetails] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    profile: "",
    serviceCategory: "",
    experienceYears: "",
    minPrice: "",
    serviceArea: "",
    govId: "",
    certificates: "",
  });

  console.log(workerDetails);

  const navigate = useNavigate();

  const handleWorkerRegister = async () => {
    const {
      fullName,
      email,
      mobile,
      password,
      profile,
      serviceCategory,
      experienceYears,
      minPrice,
      serviceArea,
      govId,
      certificates,
    } = workerDetails;
    if (
      !fullName ||
      !email ||
      !mobile ||
      !password ||
      !profile ||
      !serviceCategory ||
      !experienceYears ||
      !minPrice ||
      !serviceArea ||
      !govId ||
      !certificates
    ) {
      toast.info("Fill all the fields");
    } else {
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("email", email);
      formData.append("mobile", mobile);
      formData.append("password", password);
      formData.append("profile", profile);
      formData.append("serviceCategory", serviceCategory);
      formData.append("experienceYears", experienceYears);
      formData.append("minPrice", minPrice);
      formData.append("serviceArea", serviceArea);
      formData.append("govId", govId);
      formData.append("certificates", certificates);
      const result = await workerRegisterAPI(formData);
      console.log(result);
      if (result.status == 200) {
        toast.success("Registered Successfully!!. Check mail for confirmation");
        setWorkerDetails({
          fullName: "",
          email: "",
          mobile: "",
          password: "",
          profile: "",
          serviceCategory: "",
          experienceYears: "",
          minPrice: "",
          serviceArea: "",
          govId: "",
          certificates: "",
        });
      } else if (result.status == 404) {
        toast.warning(result.response.data);
        setWorkerDetails({
          fullName: "",
          email: "",
          mobile: "",
          password: "",
          profile: "",
          serviceCategory: "",
          experienceYears: "",
          minPrice: "",
          serviceArea: "",
          govId: "",
          certificates: "",
        });
      } else {
        toast.error("Something went wrong");
        setWorkerDetails({
          fullName: "",
          email: "",
          mobile: "",
          password: "",
          profile: "",
          serviceCategory: "",
          experienceYears: "",
          minPrice: "",
          serviceArea: "",
          govId: "",
          certificates: "",
        });
      }
    }
  };

  const handleWorkerLogin = async () => {
    const { email, password } = workerDetails;

    if (!email || !password) {
      toast.info("fill the fields");
    } else {
      try {
        const result = await workerLoginAPI(workerDetails);
        if (result.status == 200) {
          sessionStorage.setItem(
            "existingWorker",
            JSON.stringify(result.data.existingWorker)
          );
          sessionStorage.setItem("token", result.data.token);
          toast.success("Login Successfull");
          setWorkerDetails({
            fullName: "",
            email: "",
            mobile: "",
            password: "",
            profile: "",
            serviceCategory: "",
            experienceYears: "",
            minPrice: "",
            serviceArea: "",
            govId: "",
            certificates: "",
          });
          navigate("/worker-home");
        } else if (result.status == 404) {
          toast.warning(result.response.data);
          setWorkerDetails({
            fullName: "",
            email: "",
            mobile: "",
            password: "",
            profile: "",
            serviceCategory: "",
            experienceYears: "",
            minPrice: "",
            serviceArea: "",
            govId: "",
            certificates: "",
          });
        } else if (result.status == 401) {
          toast.warning(result.response.data);
        } else {
          toast.error("Something went wrong");
          setWorkerDetails({
            fullName: "",
            email: "",
            mobile: "",
            password: "",
            profile: "",
            serviceCategory: "",
            experienceYears: "",
            minPrice: "",
            serviceArea: "",
            govId: "",
            certificates: "",
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

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
                    <label className="font-semibold text-gray-700">Email</label>
                    <input
                      type="text"
                      onChange={(e) => {
                        setWorkerDetails({
                          ...workerDetails,
                          email: e.target.value,
                        });
                      }}
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
                      onChange={(e) => {
                        setWorkerDetails({
                          ...workerDetails,
                          password: e.target.value,
                        });
                      }}
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
                      onChange={(e) => {
                        setWorkerDetails({
                          ...workerDetails,
                          fullName: e.target.value,
                        });
                      }}
                      className="w-full p-3 rounded-xl mt-1 border focus:ring-2 focus:ring-orange-400 outline-none"
                      placeholder="Enter your Full Name"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-gray-700">Email</label>
                    <input
                      type="email"
                      onChange={(e) => {
                        setWorkerDetails({
                          ...workerDetails,
                          email: e.target.value,
                        });
                      }}
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
                      onChange={(e) => {
                        setWorkerDetails({
                          ...workerDetails,
                          mobile: e.target.value,
                        });
                      }}
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
                      onChange={(e) => {
                        setWorkerDetails({
                          ...workerDetails,
                          password: e.target.value,
                        });
                      }}
                      className="w-full p-3 rounded-xl mt-1 border focus:ring-2 focus:ring-orange-400 outline-none"
                      placeholder="Create a password"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="font-semibold text-gray-700">
                      Upload Profile Pic
                    </label>
                    <input
                      type="file"
                      onChange={(e) => {
                        setWorkerDetails({
                          ...workerDetails,
                          profile: e.target.files[0],
                        });
                      }}
                      className="w-full p-3 rounded-xl mt-1 border"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-gray-700">
                      Service Category
                    </label>
                    <select
                      onChange={(e) =>
                        setWorkerDetails({
                          ...workerDetails,
                          serviceCategory: e.target.value,
                        })
                      }
                      className="w-full p-3 rounded-xl mt-1 border focus:ring-2 focus:ring-orange-400 outline-none"
                    >
                      <option value="">Select service</option>
                      <option value="Plumber">Plumber</option>
                      <option value="Electrician">Electrician</option>
                      <option value="Carpenter">Carpenter</option>
                      <option value="Painter">Painter</option>
                      <option value="Gardener">Gardener</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-semibold text-gray-700">
                      Experience (Years)
                    </label>
                    <input
                      type="number"
                      onChange={(e) => {
                        setWorkerDetails({
                          ...workerDetails,
                          experienceYears: Number(e.target.value),
                        });
                      }}
                      className="w-full p-3 rounded-xl mt-1 border focus:ring-2 focus:ring-orange-400 outline-none"
                      placeholder="e.g., 5"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-gray-700">
                      Minimum Service Price (₹)
                    </label>
                    <input
                      type="number"
                      onChange={(e) => {
                        setWorkerDetails({
                          ...workerDetails,
                          minPrice: Number(e.target.value),
                        });
                      }}
                      className="w-full p-3 rounded-xl mt-1 border focus:ring-2 focus:ring-orange-400 outline-none"
                      placeholder="e.g., 300"
                      min="0"
                    />
                  </div>

                  <div className="">
                    <label className="font-semibold text-gray-700">
                      Service Area
                    </label>
                    <input
                      type="text"
                      onChange={(e) => {
                        setWorkerDetails({
                          ...workerDetails,
                          serviceArea: e.target.value,
                        });
                      }}
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
                      onChange={(e) => {
                        setWorkerDetails({
                          ...workerDetails,
                          govId: e.target.files[0],
                        });
                      }}
                      className="w-full p-3 rounded-xl mt-1 border"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="font-semibold text-gray-700">
                      Certificates / Licenses
                    </label>
                    <input
                      type="file"
                      onChange={(e) => {
                        setWorkerDetails({
                          ...workerDetails,
                          certificates: e.target.files[0],
                        });
                      }}
                      className="w-full p-3 rounded-xl mt-1 border"
                    />
                  </div>
                </>
              )}

              {/* BUTTON */}
              <div className="md:col-span-2">
                {!isLogin ? (
                  <button
                    type="button"
                    onClick={handleWorkerRegister}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-xl shadow-lg mt-2 transition"
                  >
                    Register
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleWorkerLogin}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-xl shadow-lg mt-2 transition"
                  >
                    Login
                  </button>
                )}
              </div>
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
