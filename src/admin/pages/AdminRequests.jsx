import { Check, X } from "lucide-react";
import React, { useState } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import {
  FaBriefcase,
  FaEye,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FiX, FiXCircle, FiCheckCircle, FiLoader } from "react-icons/fi";

function AdminRequests() {
  const [showReq, setShowReq] = useState(false);
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
                <tr className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-600">
                      Jack S
                    </div>
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-500">
                    <div className="font-medium">Painter</div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-500">
                      5 Years
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-500">
                      2024-10-20
                    </div>
                  </td>

                  <td className="px-6 py-4 text-center space-y-2">
                    <div className="text-sm font-medium text-gray-500">
                      Kaloor,Kochi
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                    <button
                      onClick={() => setShowReq(!showReq)}
                      className="text-blue-600 hover:text-blue-900 bg-blue-50 p-2 rounded-lg"
                    >
                      <FaEye className="w-4 h-4" />
                    </button>
                    <button className="text-green-600 hover:text-green-900 bg-green-50 p-2 rounded-lg">
                      <FaCheckCircle className="w-4 h-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-900 bg-red-50 p-2 rounded-lg">
                      <FaTimesCircle className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
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
                      onClick={() => setShowReq(!showReq)}
                      className="text-gray-400 hover:text-gray-600 transition"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="space-y-3 text-gray-700">
                    <div className=" ">
                      <img
                        src="https://mockmind-api.uifaces.co/content/human/210.jpg"
                        alt=""
                        className="w-25 rounded-full"
                      />
                    </div>
                    <p>
                      <strong>Name:</strong> Jack S
                    </p>
                    <p>
                      <strong>Profession:</strong> Painter
                    </p>
                    <p>
                      <strong>Phone:</strong> +91 9807654312
                    </p>
                    <p>
                      <strong>Location:</strong> Kaloor, Kochi
                    </p>
                    <p>
                      <strong>Experience:</strong> 5 Years
                    </p>
                    <p>
                      <strong>License ID:</strong>
                      <span className="font-mono bg-gray-100 p-1 rounded">
                        LIC-A34B9821
                      </span>
                    </p>
                    <p>
                      <strong>Submitted On:</strong> 2024-10-20
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
                  <button className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                    <FiXCircle className="w-4 h-4" /> Decline
                  </button>

                  <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
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
