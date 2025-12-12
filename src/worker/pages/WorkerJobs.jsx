import React, { useState } from "react";

import WorkerHeader from "../components/WorkerHeader";
import WorkerSidebar from "../components/WorkerSidebar";
import { FaDollarSign, FaCamera, FaPaperPlane } from "react-icons/fa";

import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaPlus,
  FaComments,
} from "react-icons/fa";

function WorkerJobs() {
  const [showChat, setShowChat] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  return (
    <>
      <WorkerHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <WorkerSidebar />
        </div>
        <div className="col-span-4">
          <div className="p-8 ">
            <h2 className="text-3xl font-bold text-gray-800 mb-2 flex items-center">
              <FaBriefcase className="w-7 h-7 mr-3 text-orange-600" />
              Active & Completed Jobs
            </h2>

            <p className="text-gray-600 mb-8">
              Update work progress, add material charges, and finalize completed
              jobs.
            </p>

            {/* Table */}
            <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                      Customer / Job ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                      Schedule / Location
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                      Job Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                      Final Amount
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>

                {/* Table Body  */}
                <tbody className="divide-y divide-gray-200">
                  {/* ROW  */}
                  <tr className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4">
                      <div className="text-sm font-semibold text-gray-900">
                        Karthik K
                      </div>
                      <div className="text-xs text-orange-600">
                        Electrical Repair
                      </div>
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-700">
                      <div className="font-medium">12 Feb 2025</div>
                      <div>11:00AM</div>
                      <div className="text-xs text-gray-500 flex items-center">
                        <FaMapMarkerAlt className="w-3 h-3 mr-1" /> Kakkanad,
                        Kochi
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full border bg-blue-100 text-blue-800 border-blue-400">
                        Scheduled
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <div className="text-sm font-bold text-gray-900">
                        ₹ 300.00
                      </div>
                      <div className="text-xs font-medium text-red-600">
                        (Awaiting Payment)
                      </div>
                    </td>

                    <td className="px-6 py-4 text-center space-y-2">
                      <button
                        onClick={() => setShowUpdateModal(!showUpdateModal)}
                        className="px-4 py-2 text-xs font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition shadow-md flex items-center mx-auto"
                      >
                        <FaPlus className="w-4 h-4 mr-1" /> Update Job
                      </button>

                      <button
                        onClick={() => setShowChat(!showChat)}
                        className="px-6 py-2 text-xs font-semibold rounded-lg text-blue-600 bg-blue-100 hover:bg-blue-200 transition shadow-md flex items-center justify-center  mx-auto"
                      >
                        <FaComments className="w-4 h-4 mr-1" /> Chat
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* chat */}
            {showChat && (
              <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
                <div className="bg-white w-full max-w-md rounded-2xl shadow-xl flex flex-col overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 border-b">
                    <div className="flex items-center space-x-3">
                      <img
                        src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="text-sm font-semibold text-gray-800">
                          Karthik K
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
                        src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="bg-white border p-3 rounded-xl shadow-sm text-sm text-gray-700">
                        When will you arrive
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <div className="bg-orange-500 text-white p-3 rounded-xl text-sm max-w-[70%] shadow">
                        I will arrive shortly
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

            {/* update job */}
            {showUpdateModal && (
              <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
                <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl p-6">
                  <h3 className="text-2xl font-bold text-orange-600 mb-6">
                    Update Job: James Sean (Electrical Repair)
                  </h3>

                  {/* STATUS UPDATE */}
                  <div className="mb-6 p-4 border border-blue-200 rounded-xl bg-blue-50">
                    <label className="block text-sm font-semibold text-blue-800 mb-2">
                      Update Work Progress Status
                    </label>

                    <select className="w-full rounded-lg border-blue-300 shadow-sm p-3 focus:border-blue-500 focus:ring-blue-500">
                      <option>Scheduled</option>
                      <option>On the Way</option>
                      <option>Arrived</option>
                      <option>Work in Progress</option>

                      <option>Completed</option>
                    </select>

                    <p className="text-xs text-blue-600 mt-2 font-medium">
                      Selecting "Completed" will mark the job as completed and
                      notify the user for payment.
                    </p>
                  </div>

                  {/* EXTRA CHARGES */}
                  <div className="mb-6 p-4 border border-orange-200 rounded-xl bg-orange-50">
                    <h4 className="font-semibold text-lg text-orange-700 flex items-center mb-3">
                      <FaDollarSign className="w-5 h-5 mr-2" />
                      Add Extra Charges (Parts/Materials)
                    </h4>

                    <div className="flex space-x-4 mb-3">
                      <div className="flex-1">
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                          Base Price
                        </label>
                        <input
                          type="text"
                          value="₹300.00"
                          disabled
                          className="w-full rounded-lg border-gray-300 bg-gray-100 p-3 text-sm font-semibold"
                        />
                      </div>

                      <div className="flex-1">
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                          Extra Charges (₹)
                        </label>
                        <input
                          type="number"
                          placeholder="0"
                          className="w-full rounded-lg border-orange-300 shadow-sm p-3 focus:border-orange-500 focus:ring-orange-500 text-sm font-semibold"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Reason for Charges
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., Replaced faulty capacitor."
                        className="w-full rounded-lg border-orange-300 shadow-sm p-3 focus:border-orange-500 focus:ring-orange-500 text-sm"
                      />
                    </div>
                  </div>

                  {/* PHOTO UPLOAD */}
                  <div className="mb-6 p-4 border border-green-200 rounded-xl bg-green-50">
                    <h4 className="font-semibold text-lg text-green-700 flex items-center mb-3">
                      <FaCamera className="w-5 h-5 mr-2" />
                      Upload Work Proof Photos
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* BEFORE PHOTO */}
                      <label className="border-2 border-dashed border-green-300 rounded-lg p-4 text-center cursor-pointer hover:bg-green-100 block">
                        <input type="file" className="hidden" />
                        <p className="text-green-600 text-sm">
                          Click to select photo
                        </p>
                      </label>

                      {/* AFTER PHOTO */}
                      <label className="border-2 border-dashed border-green-300 rounded-lg p-4 text-center cursor-pointer hover:bg-green-100 block">
                        <input type="file" className="hidden" />
                        <p className="text-green-600 text-sm">
                          Click to select photo
                        </p>
                      </label>
                    </div>
                  </div>

                  {/* BUTTONS */}
                  <div className="mt-8 flex justify-end space-x-3">
                    <button
                      onClick={() => setShowUpdateModal(!showUpdateModal)}
                      className="px-6 py-2 text-base font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                    >
                      Close
                    </button>

                    <button
                      onClick={() => setShowUpdateModal(!showUpdateModal)}
                      className="px-6 py-2 text-base font-medium rounded-lg text-white bg-orange-600 hover:bg-orange-700 transition shadow-lg flex items-center"
                    >
                      <FaPaperPlane className="w-5 h-5 mr-2" />
                      Save & Update Job
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkerJobs;
