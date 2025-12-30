import React, { useEffect, useState } from "react";

import WorkerHeader from "../components/WorkerHeader";
import WorkerSidebar from "../components/WorkerSidebar";
import { FaDollarSign, FaCamera, FaPaperPlane } from "react-icons/fa";

import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaPlus,
  FaComments,
} from "react-icons/fa";
import {
  getAllAcceptedBookingsAPI,
  updateJobsAPI,
} from "../../services/allAPI";
import { toast } from "react-toastify";

import socket from "../../services/socket";
import { useRef } from "react";
import SERVER_URL from "../../services/serverURL";

function WorkerJobs() {
  const [showChat, setShowChat] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [token, setToken] = useState("");
  const [allJobs, setAllJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [workStatus, setWorkStatus] = useState(
    selectedJob?.workStatus || "scheduled"
  );
  const [extraAmount, setExtraAmount] = useState(
    selectedJob?.extraCharges?.amount || 0
  );
  const [extraReason, setExtraReason] = useState(
    selectedJob?.extraCharges?.reason || ""
  );
  const [beforeImage, setBeforeImage] = useState(null);
  const [afterImage, setAfterImage] = useState(null);

  const [activeTab, setActiveTab] = useState("active");
  const activeJobs = allJobs.filter((job) => job.workStatus !== "completed");

  const completedJobs = allJobs.filter((job) => job.workStatus === "completed");

  const displayedJobs = activeTab === "active" ? activeJobs : completedJobs;
  const getWorkerJobs = async (workertoken) => {
    const reqHeader = { Authorization: `Bearer ${workertoken}` };

    try {
      const result = await getAllAcceptedBookingsAPI(reqHeader);
      setAllJobs(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(allJobs);

  const handleUpdateJob = async () => {
    if (workStatus == "completed" && (!beforeImage || !afterImage)) {
      toast.warning("Please upload both before and after images");
      return;
    }

    const formData = new FormData();
    formData.append("workStatus", workStatus);
    formData.append("extraCharges", extraAmount);
    formData.append("extraReason", extraReason);
    formData.append(
      "finalAmount",
      Number(selectedJob.price) + Number(extraAmount)
    );

    if (beforeImage) formData.append("before", beforeImage);
    if (afterImage) formData.append("after", afterImage);

    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const result = await updateJobsAPI(selectedJob._id, formData, reqHeader);

      getWorkerJobs(token);

      setShowUpdateModal(false);
      setSelectedJob(null);
      setBeforeImage(null);
      setAfterImage(null);
      toast.success("Job updated successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const [chatMessages, setChatMessages] = useState([]);
  const [newChatMessage, setNewChatMessage] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    const workerToken = sessionStorage.getItem("token");
    if (workerToken) {
      setToken(workerToken);
      getWorkerJobs(workerToken);
    }
  }, []);

  useEffect(() => {
    if (selectedJob) {
      socket.emit("joinRoom", selectedJob._id);

      const fetchChatMessages = async () => {
        try {
          const res = await fetch(`${SERVER_URL}/api/chat/${selectedJob._id}`);
          const data = await res.json();
          setChatMessages(data);
        } catch (err) {
          console.error("Failed to fetch chat messages", err);
        }
      };
      fetchChatMessages();
    }
  }, [selectedJob]);
  useEffect(() => {
    socket.on("receiveMessage", (msg) => {
      if (selectedJob && msg.bookingId === selectedJob._id) {
        setChatMessages((prev) => [...prev, msg]);
      }
    });

    return () => socket.off("receiveMessage");
  }, [selectedJob]);

  const handleSendMessage = () => {
    if (!newChatMessage.trim() || !selectedJob) return;

    const msgData = {
      bookingId: selectedJob._id,
      senderRole: "worker",
      senderEmail: token,
      message: newChatMessage,
    };

    socket.emit("sendMessage", msgData);
    setNewChatMessage("");
  };
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages]);

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
            {/* Tabs */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setActiveTab("active")}
                className={`px-6 py-2 rounded-full font-semibold text-sm transition ${
                  activeTab === "active"
                    ? "bg-orange-600 text-white shadow"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Active Jobs ({activeJobs.length})
              </button>

              <button
                onClick={() => setActiveTab("completed")}
                className={`px-6 py-2 rounded-full font-semibold text-sm transition ${
                  activeTab === "completed"
                    ? "bg-green-600 text-white shadow"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Completed Jobs ({completedJobs.length})
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                      Customer
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
                  {allJobs?.length > 0 ? (
                    displayedJobs?.map((job) => (
                      <tr key={job._id} className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4">
                          <div className="text-sm font-semibold text-gray-900">
                            {job?.customerName}
                          </div>
                          <div className="text-xs text-orange-600">
                            {job?.description}
                          </div>
                        </td>

                        <td className="px-6 py-4 text-sm text-gray-700">
                          <div className="font-medium">
                            {new Date(job.serviceDate).toDateString()}
                          </div>
                          <div>{job?.timeSlot}</div>
                          <div className="text-xs text-gray-500 flex items-center">
                            <FaMapMarkerAlt className="w-3 h-3 mr-1" />{" "}
                            {job?.serviceAddress}
                          </div>
                        </td>

                        <td className="px-6 py-4">
                          <span
                            className={`px-3 py-1 text-xs font-semibold rounded-full border ${
                              job?.workStatus == "completed"
                                ? "bg-green-100 text-green-800 border-green-400"
                                : "bg-blue-100 text-blue-800 border-blue-400"
                            } `}
                          >
                            {job?.workStatus}
                          </span>
                        </td>

                        <td className="px-6 py-4">
                          <div className="text-sm font-bold text-gray-900">
                            ₹ {job?.finalAmount || job.price}
                          </div>
                          {job?.paymentStatus !== "Paid" && (
                            <div className="text-xs font-medium text-red-600">
                              (Awaiting Payment)
                            </div>
                          )}
                        </td>

                        <td className="px-6 py-4 text-center space-y-2">
                          {job.workStatus !== "completed" ? (
                            <>
                              <button
                                onClick={() => {
                                  setSelectedJob(job);
                                  setWorkStatus(job.workStatus);
                                  setExtraAmount(job.extraCharges?.amount || 0);
                                  setExtraReason(
                                    job.extraCharges?.reason || ""
                                  );
                                  setBeforeImage(null);
                                  setAfterImage(null);
                                  setShowUpdateModal(true);
                                }}
                                className="px-4 py-2 text-xs font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition shadow-md flex items-center mx-auto"
                              >
                                <FaPlus className="w-4 h-4 mr-1" /> Update Job
                              </button>

                              <button
                                onClick={() => {
                                  setSelectedJob(job);
                                  setShowChat(true);
                                }}
                                className="px-6 py-2 text-xs font-semibold rounded-lg text-blue-600 bg-blue-100 hover:bg-blue-200 transition shadow-md flex items-center justify-center  mx-auto"
                              >
                                <FaComments className="w-4 h-4 mr-1" /> Chat
                              </button>
                            </>
                          ) : (
                            <span className="text-xs text-gray-400 font-medium">
                              Job Completed
                            </span>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={5}
                        className="text-center py-6 text-gray-500"
                      >
                        {activeTab === "active"
                          ? "No active jobs"
                          : "No completed jobs yet"}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* chat */}
            {showChat && selectedJob && (
              <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
                <div className="bg-white w-full max-w-md h-[70vh] rounded-2xl shadow-xl flex flex-col overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 border-b">
                    <div className="flex items-center space-x-3">
                      <img
                        src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="text-sm font-semibold text-gray-800">
                          {selectedJob.customerName}
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
                          m.senderRole === "worker"
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        <div
                          className={`p-3 rounded-xl text-sm shadow max-w-[70%] ${
                            m.senderRole === "worker"
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

            {/* update job */}
            {showUpdateModal && (
              <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
                <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl p-6">
                  <h3 className="text-2xl font-bold text-orange-600 mb-6">
                    Update Job: {selectedJob?.customerName}(
                    {selectedJob?.description})
                  </h3>

                  {/* STATUS UPDATE */}
                  <div className="mb-6 p-4 border border-blue-200 rounded-xl bg-blue-50">
                    <label className="block text-sm font-semibold text-blue-800 mb-2">
                      Update Work Progress Status
                    </label>

                    <select
                      value={workStatus}
                      onChange={(e) => setWorkStatus(e.target.value)}
                      className="w-full rounded-lg border-blue-300 shadow-sm p-3 focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option>scheduled</option>
                      <option>on the way</option>
                      <option>arrived</option>
                      <option>work in progress</option>
                      <option>completed</option>
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
                          value={`₹${
                            selectedJob?.finalAmount || selectedJob?.price
                          }`}
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
                          value={extraAmount}
                          onChange={(e) => setExtraAmount(e.target.value)}
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
                        value={extraReason}
                        onChange={(e) => setExtraReason(e.target.value)}
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
                        <input
                          type="file"
                          onChange={(e) => setBeforeImage(e.target.files[0])}
                          className="hidden"
                        />
                        <p className="text-green-600 text-sm">
                          Click to select photo
                        </p>
                      </label>

                      {/* AFTER PHOTO */}
                      <label className="border-2 border-dashed border-green-300 rounded-lg p-4 text-center cursor-pointer hover:bg-green-100 block">
                        <input
                          type="file"
                          onChange={(e) => setAfterImage(e.target.files[0])}
                          className="hidden"
                        />
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
                      onClick={handleUpdateJob}
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
