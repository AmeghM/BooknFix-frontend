import React, { useState } from "react";
import { FiMessageSquare, FiCreditCard } from "react-icons/fi";
import { CiWallet } from "react-icons/ci";
import Header from "../../common/components/Header";
import { IoIosClose } from "react-icons/io";

function Bookings() {
  const [showChat, setShowChat] = useState(false);
  const [showPay, setShowPay] = useState(false);
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">My Bookings</h1>

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
              <tr className="hover:bg-gray-50 transition">
                {/* WORKER */}
                <td className="px-6 py-4">
                  <div className="text-sm font-semibold text-gray-900">
                    James Sean
                  </div>
                  <div className="text-xs text-orange-600">Electrician</div>
                </td>

                {/* Date */}
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">
                    2025-02-18 @ 4:00 PM
                  </div>
                  <div className="text-xs text-gray-500">Mrra 23 ,Kakkanad</div>
                </td>

                {/* PRICE */}
                <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                  <span className="text-orange-600 font-bold"> ₹300.00</span>
                  <div className="text-xs text-gray-500 mt-1">
                    (Online Payment)
                  </div>
                </td>

                {/* STATUS */}
                <td className="px-6 py-4 text-center">
                  <span className="px-3 py-1  text-xs font-semibold rounded-full border bg-yellow-100 text-yellow-800 border-yellow-400">
                    Pending
                  </span>
                  {/* <span className="px-3 py-1  text-xs font-semibold rounded-full border bg-green-100 text-green-800 border-green-400">
                    Accepted
                  </span> */}
                  {/* <span className="px-3 py-1  text-xs font-semibold rounded-full border bg-red-100 text-red-800 border-red-400">
                    Declined
                  </span> */}
                </td>
                <td>
                  {/* <span className="px-3 py-1  text-xs font-semibold rounded-full border bg-yellow-100 text-yellow-800 border-yellow-400">
                    Ongoing
                  </span> */}
                </td>

                {/* BUTTONS */}
                {/* <td className=" px-6 py-4 text-right space-x-2">
                  <button className=" px-3 py-1 text-xs font-semibold rounded-full bg-blue-500 text-white hover:bg-blue-600 transition">
                    <FiMessageSquare className="inline-block mr-1 w-3 h-3" />
                    Chat
                  </button>

                  <button className="px-3 py-1 text-xs font-semibold rounded-full bg-orange-600 text-white hover:bg-orange-700 transition">
                    <CiWallet className="inline-block mr-1  h-3" />
                    Pay
                  </button>
                </td> */}
              </tr>
              <tr className="hover:bg-gray-50 transition">
                {/* WORKER */}
                <td className="px-6 py-4">
                  <div className="text-sm font-semibold text-gray-900">
                    James Sean
                  </div>
                  <div className="text-xs text-orange-600">Electrician</div>
                </td>

                {/* Date */}
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">
                    2025-02-18 @ 4:00 PM
                  </div>
                  <div className="text-xs text-gray-500">Mrra 23 ,Kakkanad</div>
                </td>

                {/* PRICE */}
                <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                  <span className="text-orange-600 font-bold"> ₹300.00</span>
                  <div className="text-xs text-gray-500 mt-1">
                    (Online Payment)
                  </div>
                </td>

                {/* STATUS */}
                <td className="px-6 py-4 text-center">
                  {/* <span className="px-3 py-1  text-xs font-semibold rounded-full border bg-yellow-100 text-yellow-800 border-yellow-400">
                    Pending
                  </span> */}

                  <span className="px-3 py-1  text-xs font-semibold rounded-full border bg-green-100 text-green-800 border-green-400">
                    Accepted
                  </span>
                  {/* <span className="px-3 py-1  text-xs font-semibold rounded-full border bg-red-100 text-red-800 border-red-400">
                    Declined
                  </span> */}
                </td>
                <td className="px-6 py-4 text-center">
                  {" "}
                  <span className="px-3 py-1  text-xs font-semibold rounded-full border bg-orange-100 text-orange-800 border-orange-400">
                    Ongoing
                  </span>
                </td>

                {/* BUTTONS */}
                <td className=" px-6 py-4 text-center space-x-2">
                  <button
                    onClick={() => setShowChat(true)}
                    className=" px-3 py-1 text-xs font-semibold rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
                  >
                    <FiMessageSquare className="w-4 h-4 mr-1 inline-block" />
                    Chat
                  </button>

                  {/* <button className="px-3 py-1 text-xs font-semibold rounded-full bg-orange-600 text-white hover:bg-orange-700 transition">
                    <FiCreditCard className="w-4 h-4 mr-1 inline-block" />
                    Pay
                  </button> */}
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition">
                {/* WORKER */}
                <td className="px-6 py-4">
                  <div className="text-sm font-semibold text-gray-900">
                    James Sean
                  </div>
                  <div className="text-xs text-orange-600">Electrician</div>
                </td>

                {/* Date */}
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">
                    2025-02-18 @ 4:00 PM
                  </div>
                  <div className="text-xs text-gray-500">Mrra 23 ,Kakkanad</div>
                </td>

                {/* PRICE */}
                <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                  <span className="text-orange-600 font-bold"> ₹300.00</span>
                  <div className="text-xs text-gray-500 mt-1">
                    (Online Payment)
                  </div>
                </td>

                {/* STATUS */}
                <td className="px-6 py-4 text-center">
                  {/* <span className="px-3 py-1  text-xs font-semibold rounded-full border bg-yellow-100 text-yellow-800 border-yellow-400">
                    Pending
                  </span> */}

                  <span className="px-3 py-1  text-xs font-semibold rounded-full border bg-green-100 text-green-800 border-green-400">
                    Accepted
                  </span>
                  {/* <span className="px-3 py-1  text-xs font-semibold rounded-full border bg-red-100 text-red-800 border-red-400">
                    Declined
                  </span> */}
                </td>
                <td className="px-6 py-4 text-center">
                  {" "}
                  <span className="px-3 py-1  text-xs font-semibold rounded-full border bg-blue-100 text-blue-800 border-blue-400">
                    Completed
                  </span>
                </td>

                {/* BUTTONS */}
                <td className=" px-6 py-4 text-center space-x-2">
                  <button
                    onClick={() => setShowChat(true)}
                    className=" px-3 py-1 text-xs font-semibold rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
                  >
                    <FiMessageSquare className="w-4 h-4 mr-1 inline-block" />
                    Chat
                  </button>

                  <button
                    onClick={() => setShowPay(true)}
                    className="px-3 py-1 text-xs font-semibold rounded-full bg-orange-600 text-white hover:bg-orange-700 transition"
                  >
                    <FiCreditCard className="w-4 h-4 mr-1 inline-block" />
                    Pay
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition">
                {/* WORKER */}
                <td className="px-6 py-4">
                  <div className="text-sm font-semibold text-gray-900">
                    James Sean
                  </div>
                  <div className="text-xs text-orange-600">Electrician</div>
                </td>

                {/* Date */}
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">
                    2025-02-18 @ 4:00 PM
                  </div>
                  <div className="text-xs text-gray-500">Mrra 23 ,Kakkanad</div>
                </td>

                {/* PRICE */}
                <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                  <span className="text-orange-600 font-bold"> ₹300.00</span>
                  <div className="text-xs text-gray-500 mt-1">
                    (Online Payment)
                  </div>
                </td>

                {/* STATUS */}
                <td className="px-6 py-4 text-center">
                  {/* <span className="px-3 py-1  text-xs font-semibold rounded-full border bg-yellow-100 text-yellow-800 border-yellow-400">
                    Pending
                  </span> */}

                  {/* <span className="px-3 py-1  text-xs font-semibold rounded-full border bg-green-100 text-green-800 border-green-400">
                    Accepted
                  </span> */}
                  <span className="px-3 py-1  text-xs font-semibold rounded-full border bg-red-100 text-red-800 border-red-400">
                    Declined
                  </span>
                </td>

                {/* BUTTONS */}
                {/* <td className=" px-6 py-4 text-right space-x-2">
                  <button className=" px-3 py-1 text-xs font-semibold rounded-full bg-blue-500 text-white hover:bg-blue-600 transition">
                    <FiMessageSquare className="inline-block mr-1 w-3 h-3" />
                    Chat
                  </button>

                  <button className="px-3 py-1 text-xs font-semibold rounded-full bg-orange-600 text-white hover:bg-orange-700 transition">
                    <CiWallet className="inline-block mr-1  h-3" />
                    Pay
                  </button>
                </td> */}
              </tr>
            </tbody>
          </table>
        </div>
        {showChat && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-xl flex flex-col overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://mockmind-api.uifaces.co/content/human/218.jpg"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      James Sean
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
                <div className="flex items-start space-x-3">
                  <img
                    src="https://placehold.co/40x40/2563eb/ffffff?text=W"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="bg-white border p-3 rounded-xl shadow-sm text-sm text-gray-700">
                    Hello! I’ll reach your location in 20 minutes.
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="bg-orange-500 text-white p-3 rounded-xl text-sm max-w-[70%] shadow">
                    Okay! I am waiting. Thank you.
                  </div>
                </div>
              </div>

              <div className="p-3 border-t bg-white flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none focus:border-orange-500"
                />
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm shadow">
                  Send
                </button>
              </div>
            </div>
          </div>
        )}
        {showPay && (
          <div className="fixed inset-0 bg-gray-900/75 flex items-center justify-center p-4 z-50">
            <div className="bg-white w-full max-w-4xl max-h-[70vh] overflow-y-auto rounded-xl shadow-2xl p-6 md:p-8">
              <div className="flex justify-between items-center border-b pb-4 mb-6">
                <h3 className="text-3xl font-bold text-gray-900">
                  Job Finalization
                </h3>
                <button
                  onClick={() => setShowPay(!showPay)}
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
                      James Sean (Electrician)
                    </p>
                    <p className="text-sm text-gray-600">
                      Job #2053 • Date: 11/01/2025
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
                    <img src="" className="w-full rounded-lg shadow-md" />
                  </div>

                  <div className="p-4 bg-gray-100 rounded-lg text-center">
                    <p className="text-sm font-medium text-gray-600 mb-2">
                      After Work (Completed)
                    </p>
                    <img src="" className="w-full rounded-lg shadow-md" />
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
                      <span>Service Fee:</span> <span>₹300.00</span>
                    </li>
                    <li className="flex justify-between border-b border-dashed pb-1">
                      <span>Parts/Materials:</span> <span>₹100.00</span>
                    </li>
                    <li className="flex justify-between border-b border-dashed pb-1">
                      <span>Platform Fee (10%):</span> <span>₹4.50</span>
                    </li>
                    <li className="flex justify-between pt-3 text-2xl font-bold text-gray-900">
                      <span>Total:</span> <span>₹404.50</span>
                    </li>
                  </ul>

                  <button className="mt-6 w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition shadow-lg flex items-center justify-center">
                    💳 Complete Payment Now
                  </button>
                </div>

                {/* Review Card */}
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    ⭐ <span className="ml-2">Rate & Review Worker</span>
                  </h4>

                  <p className="text-gray-600 mb-4">
                    Please rate the service quality.
                  </p>

                  {/* Dummy Star Icons */}
                  <div className="flex text-yellow-500 text-2xl mb-4">
                    ⭐⭐⭐⭐⭐
                  </div>

                  {/* Textarea */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Feedback
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Tell us about your experience..."
                      className="w-full rounded-lg border-gray-300 shadow-sm p-3 focus:border-yellow-500 focus:ring-yellow-500"
                    ></textarea>
                  </div>

                  <button className="mt-4 w-full py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-bold rounded-lg transition shadow-lg flex items-center justify-center">
                    📩 Submit Review & Finish
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Bookings;
