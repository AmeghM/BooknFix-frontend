import React from "react";
import { FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";
import { RiMailSendLine } from "react-icons/ri";

function RequestConfirm() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full text-center">
          <div className="bg-white rounded-2xl shadow-2xl p-10 border-t-8 border-orange-500">
            <RiMailSendLine className="w-20 h-20 text-orange-500 mx-auto mb-4 animate-bounce transition-all" />

            <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
              Request Sent Successfully!
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              Your service request has been sent to <span>selected worker</span>
              .
            </p>

            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <p className="text-base text-gray-800 font-medium">
                Please check your
                <span className="font-bold text-orange-600"> My Bookings </span>
                page or your email for status updates. Usually responds within
                1–2 hours.
              </p>
            </div>

            <Link
              to="/my-bookings"
              className="inline-block mt-8 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-orange-600 transition"
            >
              Go to My Bookings
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default RequestConfirm;
