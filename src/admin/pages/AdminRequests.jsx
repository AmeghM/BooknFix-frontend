import { X } from "lucide-react";
import React, { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import {
  FaBriefcase,
  FaEye,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FiXCircle, FiCheckCircle } from "react-icons/fi";
import {
  approveWorkerAPI,
  getPendingWorkersAPI,
  rejectWorkerAPI,
} from "../../services/allAPI";
import SERVER_URL from "../../services/serverURL";

function AdminRequests() {
  const [showReq, setShowReq] = useState(null);
  const [pendingWorkers, setPendingWorkers] = useState([]);
  const [token, setToken] = useState("");

  const getPendingWorkers = async (userToken) => {
    try {
      const reqHeader = { Authorization: `Bearer ${userToken}` };

      const result = await getPendingWorkersAPI(reqHeader);
      console.log(result);
      setPendingWorkers(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleWorkerApprove = async (id) => {
    try {
      const reqHeader = { Authorization: `Bearer ${token}` };

      const result = await approveWorkerAPI(id, reqHeader);
      console.log(result);
      setPendingWorkers((prev) => prev.filter((w) => w._id !== id));
      setShowReq(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleWorkerReject = async (id) => {
    try {
      const reqHeader = { Authorization: `Bearer ${token}` };
      await rejectWorkerAPI(id, reqHeader);
      setPendingWorkers((prev) => prev.filter((w) => w._id !== id));
      setShowReq(null);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const userToken = sessionStorage.getItem("token");

    if (userToken) {
      setToken(userToken);
      getPendingWorkers(userToken);
    }
  }, []);
  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <AdminSidebar />
        </div>
        <div className="col-span-4 p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
            <FaBriefcase className="w-7 h-7 mr-3 text-orange-600" />
            Pending Worker Requests
          </h2>
          <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                    Profession
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                    Experience
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                    Submitted
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase">
                    Location
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>

              {/* Table Body  */}
              <tbody className="divide-y divide-gray-200">
                {/* ROW  */}
                {pendingWorkers?.length > 0 ? (
                  pendingWorkers?.map((worker) => (
                    <tr
                      key={worker._id}
                      className="hover:bg-gray-50 transition"
                    >
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-600">
                          {worker.fullName}
                        </div>
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-500">
                        <div className="font-medium">
                          {worker.serviceCategory}
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-500">
                          {worker.experienceYears} Years
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-500">
                          {new Date(worker.createdAt).toLocaleDateString()}
                        </div>
                      </td>

                      <td className="px-6 py-4 text-center space-y-2">
                        <div className="text-sm font-medium text-gray-500">
                          {worker.serviceArea}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                        <button
                          onClick={() => setShowReq(worker)}
                          className="text-blue-600 hover:text-blue-900 bg-blue-50 p-2 rounded-lg"
                        >
                          <FaEye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleWorkerApprove(worker._id)}
                          className="text-green-600 hover:text-green-900 bg-green-50 p-2 rounded-lg"
                        >
                          <FaCheckCircle className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleWorkerReject(worker._id)}
                          className="text-red-600 hover:text-red-900 bg-red-50 p-2 rounded-lg"
                        >
                          <FaTimesCircle className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-6 text-gray-500">
                      No pending worker requests
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {showReq && (
            <div className="fixed inset-0 bg-gray-900/80 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all">
                <div className="p-6">
                  <div className="flex justify-between items-start border-b pb-3 mb-4">
                    <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                      <FaUser className="w-6 h-6 text-orange-600" /> Worker
                      Application Details
                    </h3>
                    <button
                      onClick={() => setShowReq(null)}
                      className="text-gray-400 hover:text-gray-600 transition"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="space-y-3 text-gray-700">
                    <div className=" ">
                      <img
                        src={`${SERVER_URL}/imguploads/${showReq.profile}`}
                        alt={showReq.fullName}
                        className="w-25 rounded-full"
                      />
                    </div>
                    <p>
                      <strong>Name:</strong> {showReq.fullName}
                    </p>
                    <p>
                      <strong>Profession:</strong>
                      {showReq.serviceCategory}
                    </p>
                    <p>
                      <strong>Phone:</strong> {showReq.mobile}
                    </p>
                    <p>
                      <strong>Location:</strong> {showReq.serviceArea}
                    </p>
                    <p>
                      <strong>Experience:</strong> {showReq.experienceYears}{" "}
                      Years
                    </p>
                    <p>
                      <strong>Min Price:</strong> {showReq.minPrice}
                    </p>
                    <p>
                      <strong>Government ID:</strong>
                      <a
                        href={`${SERVER_URL}/imguploads/${showReq.govId}`}
                        target="_blank"
                        className="text-blue-600 ms-2"
                      >
                        View Government ID
                      </a>
                    </p>
                    <p>
                      <strong>Submitted On:</strong>{" "}
                      {new Date(showReq.createdAt).toLocaleDateString()}
                    </p>
                    {/* <p>
                      <strong>Current Status:</strong>
                      <span className="px-2 py-1 text-sm rounded bg-yellow-100 text-yellow-700">
                        Pending
                      </span>
                    </p> */}
                  </div>
                </div>

                <div className="bg-gray-50 p-4 flex justify-end gap-3 border-t">
                  <button
                    onClick={() => handleWorkerReject(showReq._id)}
                    className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  >
                    <FiXCircle className="w-4 h-4" /> Decline
                  </button>

                  <button
                    onClick={() => handleWorkerApprove(showReq._id)}
                    className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                  >
                    <FiCheckCircle className="w-4 h-4" /> Approve
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AdminRequests;
