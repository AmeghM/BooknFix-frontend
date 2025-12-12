import React from "react";
import WorkerHeader from "../components/WorkerHeader";
import WorkerSidebar from "../components/WorkerSidebar";
import {
  FaRupeeSign,
  FaCheckCircle,
  FaBell,
  FaChartLine,
  FaBriefcase,
} from "react-icons/fa";

function WorkerHome() {
  return (
    <>
      <WorkerHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <WorkerSidebar />
        </div>
        <div className="col-span-4 p-8">
          <div className="p-4  min-h-screen">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-10 tracking-tight">
              Worker Dashboard Overview
            </h2>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {/* Earnings Card */}
              <div className="bg-white p-6 rounded-2xl shadow-xl flex items-center space-x-5 border border-orange-200 border-t-4 border-t-green-400">
                <div className="bg-green-100 p-4 rounded-xl">
                  <FaRupeeSign className="text-green-600 w-7 h-7" />
                </div>
                <div>
                  <p className="text-gray-500 font-medium">
                    Total Earnings (Paid)
                  </p>
                  <h3 className="text-2xl font-bold text-gray-800">₹45,230</h3>
                </div>
              </div>

              {/* Completed Jobs */}
              <div className="bg-white p-6 rounded-2xl shadow-xl flex items-center space-x-5 border border-blue-200 border-t-4 border-t-blue-400">
                <div className="bg-blue-100 p-4 rounded-xl">
                  <FaCheckCircle className="text-blue-600 w-7 h-7" />
                </div>
                <div>
                  <p className="text-gray-500 font-medium">Completed Jobs</p>
                  <h3 className="text-2xl font-bold text-gray-800">10</h3>
                </div>
              </div>

              {/* New Requests */}
              <div className="bg-white p-6 rounded-2xl shadow-xl flex items-center space-x-5 border border-yellow-200 border-t-4 border-t-yellow-300">
                <div className="bg-red-100 p-4 rounded-xl">
                  <FaBell className="text-yellow-500 w-7 h-7" />
                </div>
                <div>
                  <p className="text-gray-500 font-medium">New Job Requests</p>
                  <h3 className="text-2xl font-bold text-gray-800">2</h3>
                </div>
              </div>
            </div>

            {/* Charts & Job Status */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/*Chart */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-orange-100"></div>

              {/* Job Status Breakdown */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-orange-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-5 flex items-center">
                  <FaBriefcase className="w-6 h-6 mr-2 text-orange-500" />
                  Current Job Status Breakdown
                </h3>

                <ul className="space-y-4">
                  <li className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border hover:bg-gray-100 transition">
                    <span className="font-medium text-gray-700">Ongoing</span>
                    <span className="text-xl font-bold text-orange-600">2</span>
                  </li>

                  <li className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border hover:bg-gray-100 transition">
                    <span className="font-medium text-gray-700">Accepted</span>
                    <span className="text-xl font-bold text-orange-600">1</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkerHome;
