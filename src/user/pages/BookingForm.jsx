import React from "react";
import {
  FiCalendar,
  FiMessageSquare,
  FiAlertTriangle,
  FiUpload,
  FiSend,
} from "react-icons/fi";
import { Link } from "react-router-dom";

function BookingForm() {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center bg-gray-50 py-10">
        <div className="w-full max-w-4xl px-4">
          <form className="w-full space-y-8">
            {/* Heading */}
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
                Service Request Details
              </h1>
              <p className="text-xl text-gray-500">
                Provide the worker with details for the job.
              </p>
            </div>

            {/* 1. Schedule & Location */}
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
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Time Slot
                  </label>
                  <input
                    type="time"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>

                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service Address
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* 2. Contact & Payment */}
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
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Payment Method
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg bg-white">
                    <option>Online</option>
                    <option>Cash</option>
                  </select>

                  <p className="text-xs text-gray-500 mt-1">
                    You selected Cash in Hand. Pay the worker directly after the
                    service.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Description */}
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
                className="w-full p-3 border border-gray-300 rounded-lg resize-none"
              />

              {/* Upload */}
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Picture{" "}
                  <span className="text-gray-400">(Optional)</span>
                </label>

                <input
                  type="file"
                  accept="image/*"
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
            <Link to={"/request-confirm"}>
              <button
                type="button"
                className="w-full px-6 py-4 text-xl font-bold rounded-xl shadow-lg text-white bg-orange-600 hover:bg-orange-700"
              >
                Send Booking Request to Alex Johnson
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default BookingForm;
