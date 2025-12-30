import React, { useEffect, useState } from "react";
import {
  FiCalendar,
  FiMessageSquare,
  FiAlertTriangle,
  FiUpload,
  FiSend,
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { createBookingAPI } from "../../services/allAPI";
import { toast } from "react-toastify";
function BookingForm() {
  const [token, setToken] = useState("");
  const [bookingDetails, setBookingDetails] = useState({
    workerEmail: "",
    serviceDate: "",
    timeSlot: "",
    serviceAddress: "",
    customerName: "",
    customerPhone: "",
    paymentMethod: "Online",
    description: "",
    issueImage: "",
  });
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setBookingDetails({ ...bookingDetails, issueImage: e.target.files[0] });
  };

  const handleBooking = async () => {
    const {
      serviceDate,
      timeSlot,
      serviceAddress,
      customerName,
      customerPhone,
      paymentMethod,
      description,
    } = bookingDetails;

    if (
      !serviceDate ||
      !timeSlot ||
      !serviceAddress ||
      !customerName ||
      !customerPhone ||
      !paymentMethod ||
      !description
    ) {
      toast.info("Fill the details");
    } else {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };
      const reqBody = new FormData();
      for (let key in bookingDetails) {
        reqBody.append(key, bookingDetails[key]);
      }
      try {
        const result = await createBookingAPI(reqBody, reqHeader);
        if (result.status == 200) {
          toast.success("Booking successfull");
          navigate("/request-confirm");
        } else {
          toast.error("something went wrong");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  console.log(bookingDetails);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    }
    const workerEmail = sessionStorage.getItem("selectedWorkerEmail");
    if (workerEmail) {
      setBookingDetails((prev) => ({ ...prev, workerEmail }));
    }
  }, []);
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center bg-gray-50 py-10">
        <div className="w-full max-w-4xl px-4">
          <form className="w-full space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
                Service Request Details
              </h1>
              <p className="text-xl text-gray-500">
                Provide the worker with details for the job.
              </p>
            </div>

            {/* Schedule & Location */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FiCalendar className="w-6 h-6 mr-2 text-orange-600" />
                1. Schedule & Location
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="">
                  <label className="block text-sm font-medium text-gray-700 mb-1 ">
                    Service Date
                  </label>
                  <input
                    type="date"
                    name="serviceDate"
                    min={new Date().toISOString().split("T")[0]}
                    value={bookingDetails.serviceDate}
                    onChange={(e) =>
                      setBookingDetails({
                        ...bookingDetails,
                        serviceDate: e.target.value,
                      })
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Time Slot
                  </label>
                  <input
                    type="time"
                    name="timeSlot"
                    min="08:00"
                    max="20:00"
                    value={bookingDetails.timeSlot}
                    onChange={(e) =>
                      setBookingDetails({
                        ...bookingDetails,
                        timeSlot: e.target.value,
                      })
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>

                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service Address
                  </label>
                  <input
                    type="text"
                    name="serviceAddress"
                    value={bookingDetails.serviceAddress}
                    onChange={(e) =>
                      setBookingDetails({
                        ...bookingDetails,
                        serviceAddress: e.target.value,
                      })
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* contact & Payment */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FiMessageSquare className="w-6 h-6 mr-2 text-orange-600" />
                2. Contact & Payment
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="customerName"
                    value={bookingDetails.customerName}
                    onChange={(e) =>
                      setBookingDetails({
                        ...bookingDetails,
                        customerName: e.target.value,
                      })
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="customerPhone"
                    value={bookingDetails.customerPhone}
                    onChange={(e) =>
                      setBookingDetails({
                        ...bookingDetails,
                        customerPhone: e.target.value,
                      })
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Payment Method
                  </label>
                  <select
                    name="paymentMethod"
                    value={bookingDetails.paymentMethod}
                    onChange={(e) =>
                      setBookingDetails({
                        ...bookingDetails,
                        paymentMethod: e.target.value,
                      })
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg bg-white"
                  >
                    <option>Online</option>
                  </select>
                </div>
              </div>
            </div>

            {/*  description */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FiAlertTriangle className="w-6 h-6 mr-2 text-orange-600" />
                3. Describe the Issue
              </h2>

              <label className="block text-sm font-medium text-gray-700 mb-1">
                Detailed Description (Required)
              </label>

              <textarea
                rows="4"
                name="description"
                value={bookingDetails.description}
                onChange={(e) =>
                  setBookingDetails({
                    ...bookingDetails,
                    description: e.target.value,
                  })
                }
                className="w-full p-3 border border-gray-300 rounded-lg resize-none"
              />

              {/* upload */}
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Picture{" "}
                  <span className="text-gray-400">(Optional)</span>
                </label>

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-gray-700 
              file:mr-4 file:py-2 file:px-4
              file:rounded-lg file:border-0
              file:text-sm file:font-semibold
              file:bg-orange-600 file:text-white
              hover:file:bg-orange-700 cursor-pointer"
                />
              </div>
            </div>

            {/*Button */}

            <button
              type="button"
              onClick={handleBooking}
              className="w-full px-6 py-4 text-xl font-bold rounded-xl shadow-lg text-white bg-orange-600 hover:bg-orange-700"
            >
              Send Booking Request to Alex Johnson
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default BookingForm;
