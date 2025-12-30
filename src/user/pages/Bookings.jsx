import React, { useEffect, useState } from "react";
import { FiMessageSquare, FiXCircle } from "react-icons/fi";
import { CiWallet } from "react-icons/ci";
import Header from "../../common/components/Header";
import { IoIosClose } from "react-icons/io";
import {
  addReviewAPI,
  cancelBookingAPI,
  getAllBookingsAPI,
  makeBookingPaymentAPI,
} from "../../services/allAPI";
import SERVER_URL from "../../services/serverURL";

import socket from "../../services/socket";
import { useRef } from "react";

function Bookings() {
  const [showChat, setShowChat] = useState(false);
  const [showPay, setShowPay] = useState(false);
  const [token, setToken] = useState("");
  const [allbookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const [chatMessages, setChatMessages] = useState([]);
  const [newChatMessage, setNewChatMessage] = useState("");
  const chatEndRef = useRef(null);

  const bookingTabs = [
    { key: "pending", label: "Pending" },
    { key: "accepted", label: "Ongoing" },
    { key: "completed", label: "Completed" },
    { key: "cancelled", label: "Cancelled" },
    { key: "declined", label: "Declined" },
    { key: "paid", label: "Paid" },
  ];
  const [activeTab, setActiveTab] = useState("pending");

  const filteredBookings = allbookings.filter((booking) => {
    switch (activeTab) {
      case "pending":
        return booking.bookingStatus === "pending";
      case "accepted":
        return (
          booking.bookingStatus === "accepted" &&
          booking.workStatus !== "completed"
        );
      case "completed":
        return (
          booking.workStatus === "completed" && booking.paymentStatus !== "Paid"
        );
      case "cancelled":
        return booking.bookingStatus === "cancelled";
      case "declined":
        return booking.bookingStatus === "declined";
      case "paid":
        return booking.paymentStatus === "Paid";
      default:
        return true;
    }
  });

  const getAllBookings = async (userToken) => {
    try {
      const reqHeader = { Authorization: `Bearer ${userToken}` };
      const result = await getAllBookingsAPI(reqHeader);
      setBookings(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePayment = async () => {
    if (!selectedBooking) return;
    try {
      const reqHeader = { Authorization: `Bearer ${token}` };
      const response = await makeBookingPaymentAPI(
        { bookingId: selectedBooking._id },
        reqHeader
      );
      if (response.status === 200) {
        window.location.href = response.data.checkoutSessionUrl;
      }
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  const handleCancelBooking = async (id) => {
    try {
      const reqHeader = { Authorization: `Bearer ${token}` };
      const result = await cancelBookingAPI(id, reqHeader);
      if (result.status === 200 && result.data?.bookingStatus === "cancelled") {
        setBookings((prev) => prev.filter((b) => b._id !== id));
        setActiveTab("cancelled");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitReview = async () => {
    if (rating < 1 || rating > 5) {
      alert("Rating must be between 1 and 5");
      return;
    }
    try {
      const reqHeader = { Authorization: `Bearer ${token}` };
      const reqBody = {
        bookingId: selectedBooking._id,
        rating,
        review: reviewText,
      };
      await addReviewAPI(reqBody, reqHeader);

      alert("Review submitted successfully");

      setSelectedBooking((prev) => ({ ...prev, isReviewed: true }));
      setRating(0);
      setReviewText("");

      getAllBookings(token);
    } catch (err) {
      alert(err.response?.data || "Review submission failed");
    }
  };

  useEffect(() => {
    const userToken = sessionStorage.getItem("token");
    if (userToken) {
      setToken(userToken);
      getAllBookings(userToken);
    }
  }, []);

  useEffect(() => {
    if (showChat && selectedBooking) {
      socket.emit("joinRoom", selectedBooking._id);

      // Fetch old messages for this booking
      const fetchChatMessages = async () => {
        try {
          const res = await fetch(
            `${SERVER_URL}/api/chat/${selectedBooking._id}`
          );
          const data = await res.json();
          setChatMessages(data);
        } catch (err) {
          console.error("Failed to fetch chat messages", err);
        }
      };

      fetchChatMessages();
    }
  }, [showChat, selectedBooking]);
  useEffect(() => {
    socket.on("receiveMessage", (msg) => {
      if (selectedBooking && msg.bookingId === selectedBooking._id) {
        setChatMessages((prev) => [...prev, msg]);
      }
    });

    return () => socket.off("receiveMessage");
  }, [selectedBooking]);
  const handleSendMessage = () => {
    if (!newChatMessage.trim() || !selectedBooking) return;

    const msgData = {
      bookingId: selectedBooking._id,
      senderRole: "user",
      senderEmail: token, // or user email
      message: newChatMessage,
    };

    socket.emit("sendMessage", msgData);
    setNewChatMessage(""); // clear input
  };
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages]);

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">My Bookings</h1>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-6">
          {bookingTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                activeTab === tab.key
                  ? "bg-orange-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Bookings Table */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-md border border-gray-400">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Worker / Service
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Date / Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Price
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-500">
                  Status
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-500">
                  Work Progress
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {filteredBookings.length > 0 ? (
                filteredBookings.map((booking, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4">
                      <div className="text-sm font-semibold text-gray-900">
                        {booking?.workerName}
                      </div>
                      <div className="text-xs text-orange-600">
                        {booking?.serviceCategory}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {new Date(booking?.serviceDate).toLocaleDateString()} @{" "}
                        {booking?.timeSlot}
                      </div>
                      <div className="text-xs text-gray-500">
                        {booking?.serviceAddress}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      <span className="text-orange-600 font-bold">
                        ₹{booking?.price}
                      </span>
                      <div className="text-xs text-gray-500 mt-1">
                        ({booking?.paymentMethod})
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full border ${
                          booking.bookingStatus === "pending"
                            ? "bg-yellow-100 text-yellow-800 border-yellow-400"
                            : booking.bookingStatus === "accepted"
                            ? "bg-green-100 text-green-800 border-green-400"
                            : "bg-red-100 text-red-800 border-red-400"
                        }`}
                      >
                        {booking.bookingStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      {booking.bookingStatus === "accepted" && (
                        <span className="px-3 py-1 text-xs font-semibold rounded-full border bg-yellow-100 text-yellow-800 border-yellow-400">
                          {booking.workStatus}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      {/* Actions like Chat / Cancel / Pay */}
                      {/* cancel button */}
                      {booking.bookingStatus == "pending" &&
                        booking.paymentStatus == "Unpaid" && (
                          <button
                            onClick={() => {
                              handleCancelBooking(booking._id);
                              setSelectedBooking(booking);
                            }}
                            className="px-3 py-1 text-xs font-semibold rounded-full bg-red-600 text-white hover:bg-red-700 transition"
                          >
                            <FiXCircle className="inline-block mr-1  h-3" />
                            Cancel
                          </button>
                        )}

                      {/* chat */}
                      {booking.bookingStatus == "accepted" &&
                        booking.paymentStatus == "Unpaid" && (
                          <button
                            onClick={() => {
                              setSelectedBooking(booking);
                              setShowChat(true);
                            }}
                            className=" px-3 py-1 text-xs font-semibold rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
                          >
                            <FiMessageSquare className="inline-block mr-1 w-3 h-3" />
                            Chat
                          </button>
                        )}

                      {/* pay */}

                      {booking.bookingStatus == "accepted" &&
                        booking.workStatus == "completed" &&
                        booking.paymentStatus == "Unpaid" && (
                          <button
                            onClick={() => {
                              setSelectedBooking(booking);
                              setShowPay(true);
                            }}
                            className="px-3 py-1 text-xs font-semibold rounded-full bg-orange-600 text-white hover:bg-orange-700 transition"
                          >
                            <CiWallet className="inline-block mr-1  h-3" />
                            Pay
                          </button>
                        )}

                      {booking.bookingStatus == "declined" && (
                        <div className="text-center mt-1 w-full text-xs text-red-600 font-semibold bg-red-50 border border-red-200 px-2 py-2 rounded-lg">
                          Declined: {booking.declineReason}
                        </div>
                      )}

                      {/* review */}
                      {booking.paymentStatus === "Paid" &&
                        !booking.isReviewed && (
                          <button
                            onClick={() => setSelectedBooking(booking)}
                            className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-600 text-white hover:bg-yellow-700 transition"
                          >
                            ⭐ Review
                          </button>
                        )}
                      {booking.isReviewed && (
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-50 text-green-700 border border-green-200">
                          Reviewed
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="text-center py-6 text-gray-500">
                    No {bookingTabs.find((t) => t.key === activeTab)?.label}{" "}
                    bookings
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {showChat && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
            <div className="bg-white w-full max-w-md h-[70vh] rounded-2xl shadow-xl flex flex-col overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://mockmind-api.uifaces.co/content/human/218.jpg"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      {selectedBooking?.workerName}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setShowChat(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-gray-50">
                {chatMessages.map((m, idx) => (
                  <div
                    key={idx}
                    className={`flex ${
                      m.senderRole === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`p-3 rounded-xl text-sm shadow max-w-[70%] ${
                        m.senderRole === "user"
                          ? "bg-orange-500 text-white"
                          : "bg-white text-gray-700 border"
                      }`}
                    >
                      {m.message}
                    </div>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>

              <div className="p-3 border-t bg-white flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={newChatMessage}
                  onChange={(e) => setNewChatMessage(e.target.value)}
                  className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none focus:border-orange-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm shadow"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        )}
        {/* payment modal */}
        {showPay && selectedBooking && (
          <div className="fixed inset-0 bg-gray-900/75 flex items-center justify-center p-4 z-50">
            <div className="bg-white w-full max-w-4xl max-h-[70vh] overflow-y-auto rounded-xl shadow-2xl p-6 md:p-8">
              <div className="flex justify-between items-center border-b pb-4 mb-6">
                <h3 className="text-3xl font-bold text-gray-900">
                  Job Finalization
                </h3>
                <button
                  onClick={() => setShowPay(false)}
                  className="text-gray-400 hover:text-gray-600 transition "
                >
                  <IoIosClose size={40} className="text-lg font-medium" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="p-4 rounded-xl bg-orange-50 border border-orange-200">
                  <div className="flex items-center font-semibold mb-2 text-orange-700">
                    <span className="mr-2">⚠️</span> Awaiting Your Final Action
                  </div>
                  <p className="text-sm text-gray-600">
                    The worker has marked the job complete. Please review the
                    work and settle the payment.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center">
                  <img
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    src="https://mockmind-api.uifaces.co/content/human/218.jpg"
                    alt="Worker Avatar"
                  />
                  <div>
                    <p className="font-bold text-orange-600 text-lg">
                      {selectedBooking.workerName} (
                      {selectedBooking.serviceCategory})
                    </p>
                    <p className="text-sm text-gray-600">
                      Job #{selectedBooking._id} • Date:{" "}
                      {new Date(
                        selectedBooking.serviceDate
                      ).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                  <span className="ml-2">
                    Proof of Work (Uploaded by Worker)
                  </span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-100 rounded-lg text-center">
                    <p className="text-sm font-medium text-gray-600 mb-2">
                      Before Work
                    </p>
                    {selectedBooking?.workProofImages?.before ? (
                      <img
                        src={`${SERVER_URL}/imguploads/${selectedBooking.workProofImages.before}`}
                        className="w-full rounded-lg shadow-md"
                      />
                    ) : (
                      <p>No image uploaded</p>
                    )}
                  </div>

                  <div className="p-4 bg-gray-100 rounded-lg text-center">
                    <p className="text-sm font-medium text-gray-600 mb-2">
                      After Work (Completed)
                    </p>
                    {selectedBooking?.workProofImages?.after ? (
                      <img
                        src={`${SERVER_URL}/imguploads/${selectedBooking.workProofImages.after}`}
                        className="w-full rounded-lg shadow-md"
                      />
                    ) : (
                      <p>No image uploaded</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Payment & Review */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Payment Card */}
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    🧾 <span className="ml-2">Final Invoice & Payment</span>
                  </h4>

                  <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between border-b border-dashed pb-1">
                      <span>Service Fee:</span>{" "}
                      <span>₹{selectedBooking.price}</span>
                    </li>
                    <li className="flex justify-between border-b border-dashed pb-1">
                      <span>Parts/Materials:</span>{" "}
                      <span className="font-semibold">
                        ₹{selectedBooking.extraCharges?.amount || 0}
                        {selectedBooking.extraCharges?.reason && (
                          <span className="block text-xs text-gray-500">
                            ({selectedBooking.extraCharges.reason})
                          </span>
                        )}
                      </span>
                    </li>

                    <li className="flex justify-between pt-3 text-2xl font-bold text-gray-900">
                      <span>Total:</span>{" "}
                      <span>
                        ₹{selectedBooking.finalAmount || selectedBooking.price}
                      </span>
                    </li>
                  </ul>

                  <button
                    onClick={handlePayment}
                    type="button"
                    className="mt-6 w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition shadow-lg flex items-center justify-center"
                  >
                    💳 Complete Payment Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Review Modal */}
        {selectedBooking &&
          selectedBooking.paymentStatus === "Paid" &&
          !selectedBooking.isReviewed && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    Rate & Review Worker
                  </h3>
                  <button
                    onClick={() => setSelectedBooking(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <IoIosClose size={28} />
                  </button>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Rating (1-5)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    className="w-full rounded-lg border-gray-300 shadow-sm p-2"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Feedback
                  </label>
                  <textarea
                    rows="3"
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    className="w-full rounded-lg border-gray-300 shadow-sm p-2"
                  />
                </div>
                <button
                  onClick={handleSubmitReview}
                  className="w-full py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-bold rounded-lg transition"
                >
                  📩 Submit Review
                </button>
              </div>
            </div>
          )}
      </div>
    </>
  );
}

export default Bookings;
