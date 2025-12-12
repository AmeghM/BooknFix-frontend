import React from "react";
import { Link } from "react-router-dom";

import { FaTachometerAlt, FaBell, FaBriefcase } from "react-icons/fa";

function WorkerSidebar() {
  return (
    <>
      <div className="w-64 bg-white shadow-xl p-6 flex flex-col h-screen border-r border-r-orange-200 sticky top-0">
        <h1 className="text-xl text-center font-medium text-gray-500  mb-10 leading-tight">
          Worker Portal
        </h1>

        <div className="flex flex-col gap-2">
          {/* Dashboard */}
          <Link
            to={"/worker-home"}
            className="flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer
          transition text-gray-700 hover:bg-gray-100"
          >
            <FaTachometerAlt className="text-lg" />
            <span className="text-sm">Dashboard</span>
          </Link>

          {/* Job Requests */}
          <Link
            to={"/worker-requests"}
            className="flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer
          transition text-gray-700 hover:bg-gray-100"
          >
            <FaBell className="text-lg" />
            <span className="text-sm">Job Requests</span>
          </Link>

          {/* My Active Jobs */}
          <Link
            to={"/worker-jobs"}
            className="flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer
          transition text-gray-700 hover:bg-gray-100"
          >
            <FaBriefcase className="text-lg" />
            <span className="text-sm">My Active Jobs</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default WorkerSidebar;
