import React, { useEffect, useState } from "react";
import AdminSidebar from "../../admin/components/AdminSidebar";
import WorkerHeader from "../components/WorkerHeader";
import WorkerSidebar from "../components/WorkerSidebar";
import {
  FaBell,
  FaClock,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRupeeSign,
  FaFileAlt,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import {
  acceptBookingAPI,
  declineBookingAPI,
  getWorkerBookingsAPI,
} from "../../services/allAPI";
import { toast } from "react-toastify";
import SERVER_URL from "../../services/serverURL";

function WorkerRequests() {
  const [token, setToken] = useState("");
  const [showDecline, setShowDecline] = useState(false);
  const [pendingBookings, setPendingBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [declineReason, setDeclineReason] = useState("");

  const getWorkerBookings = async (workerToken) => {
    const reqHeader = { Authorization: `Bearer ${workerToken}` };

    try {
      const result = await getWorkerBookingsAPI(reqHeader);
      setPendingBookings(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(pendingBookings);

  const handleAcceptJob = async (id) => {
    const reqHeader = { Authorization: `Bearer ${token}` };

    try {
      await acceptBookingAPI(id, reqHeader);
      setPendingBookings((prev) => prev.filter((b) => b._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeclineJob = async () => {
    if (!declineReason) {
      toast.info("Please enter the reason");
      return;
    }
    const reqHeader = { Authorization: `Bearer ${token}` };
    try {
      await declineBookingAPI(
        selectedBooking._id,
        { reason: declineReason },
        reqHeader
      );
      getWorkerBookings(token);

      setDeclineReason("");
      setSelectedBooking(null);
      setShowDecline(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const workerToken = sessionStorage.getItem("token");
    if (workerToken) {
      setToken(workerToken);
      getWorkerBookings(workerToken);
    }
  }, []);
  return (
    <>
      <WorkerHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <WorkerSidebar />
        </div>
        <div className="col-span-4 p-8 ">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <FaBell className="w-7 h-7 mr-3 text-red-600" />
            New Job Requests
          </h2>

          <p className="text-gray-600 mb-8">
            Review details for incoming service requests. You must accept or
            decline them to proceed.
          </p>

          {/*  CARD  */}
          {pendingBookings?.length > 0 ? (
            pendingBookings?.map((booking) => (
              <div
                key={booking._id}
                className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500 mb-4"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 border-b pb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {booking?.customerName}
                  </h3>
                </div>

                {/* Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 mb-4">
                  <p className="flex items-start">
                    <FaClock className="w-4 h-4 mr-2 mt-1 text-orange-500" />
                    <span className="font-semibold mr-2">When:</span>{" "}
                    {new Date(booking.serviceDate).toLocaleDateString()} @{" "}
                    {booking.timeSlot}
                  </p>

                  <p className="flex items-start">
                    <FaMapMarkerAlt className="w-4 h-4 mr-2 mt-1 text-orange-500" />
                    <span className="font-semibold mr-2">Where:</span>{" "}
                    {booking?.serviceAddress}
                  </p>

                  <p className="flex items-start">
                    <FaPhoneAlt className="w-4 h-4 mr-2 mt-1 text-orange-500" />
                    <span className="font-semibold mr-2">Contact:</span> +91
                    {booking.customerPhone}
                  </p>

                  <p className="flex items-start">
                    <FaRupeeSign className="w-4 h-4 mr-2 mt-1 text-orange-500" />
                    <span className="font-semibold mr-2">Payment:</span> ₹
                    {booking.price}
                  </p>
                </div>

                {/* Issue Box */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-sm font-semibold text-gray-800 mb-1 flex items-center">
                    <FaFileAlt className="w-4 h-4 mr-2 text-indigo-500" /> Issue
                    Description:
                  </p>
                  <p className="text-sm text-gray-600">{booking.description}</p>
                </div>
                {booking.issueImage && (
                  <div className="mt-3">
                    <p className="text-sm font-semibold text-gray-700 mb-1">
                      Uploaded Image:
                    </p>

                    <a
                      href={`${SERVER_URL}/imguploads/${booking.issueImage}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 underline text-sm"
                    >
                      View full image
                    </a>
                  </div>
                )}

                {/* Buttons */}
                <div className="flex space-x-3 justify-end">
                  <button
                    onClick={() => handleAcceptJob(booking?._id)}
                    className="px-4 py-2 text-sm font-semibold rounded-lg text-white bg-green-600 hover:bg-green-700 transition shadow-md flex items-center"
                  >
                    <FaCheckCircle className="w-4 h-4 mr-2" /> Accept Job
                  </button>

                  <button
                    onClick={() => {
                      setSelectedBooking(booking);
                      setShowDecline(true);
                    }}
                    className="px-4 py-2 text-sm font-semibold rounded-lg text-red-600 bg-red-100 hover:bg-red-200 transition flex items-center"
                  >
                    <FaTimesCircle className="w-4 h-4 mr-2" /> Decline
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No new job requests</p>
          )}
        </div>
        {showDecline && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 font-sans">
            <div className="bg-white w-full max-w-md rounded-xl shadow-2xl p-6 animate-fadeIn">
              <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center">
                <FaTimesCircle className="text-red-600 w-6 h-6 mr-2" />
                Decline Request #1023
              </h3>

              <p className="mb-4 text-gray-700 leading-relaxed">
                Please provide a brief reason for declining the request from
                <span className="font-semibold text-gray-900">
                  {" "}
                  {selectedBooking?.customerName}{" "}
                </span>
                for
                <span className="font-semibold text-gray-900 ms-1">
                  {selectedBooking?.serviceCategory}
                </span>
                .
              </p>

              <textarea
                rows="3"
                value={declineReason}
                onChange={(e) => setDeclineReason(e.target.value)}
                placeholder="Enter reason for declining"
                className="w-full rounded-lg border-gray-300 p-3 shadow-sm focus:border-red-500 focus:ring-red-500 text-sm"
              ></textarea>

              {/* Buttons */}
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={() => {
                    setShowDecline(!showDecline);
                  }}
                  className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                >
                  Cancel
                </button>

                <button
                  onClick={handleDeclineJob}
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-red-600 text-white hover:bg-red-700 shadow-md transition"
                >
                  Confirm Decline
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default WorkerRequests;
