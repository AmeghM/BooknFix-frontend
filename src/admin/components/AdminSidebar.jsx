import React from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  FileText,
  CreditCard,
} from "lucide-react";
import { MdOutlineDashboard } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { FaHelmetSafety } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";

function AdminSidebar() {
  return (
    <>
      <div className="w-64 bg-white shadow-xl p-6 flex flex-col h-screen border-r border-r-orange-200 sticky top-0">
        <h1 className="text-xl text-center font-medium text-gray-500  mb-10 leading-tight">
          Admin Portal
        </h1>

        <div className="flex flex-col gap-2">
          <Link
            to={"/admin-home"}
            className="flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer
              transition text-gray-700 hover:bg-gray-100 hover:text-orange-400"
          >
            <MdOutlineDashboard className="text-lg" />
            <span className="text-lg">Dashboard</span>
          </Link>

          <Link
            to={"/admin-users"}
            className="flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer
              transition text-gray-700 hover:bg-gray-100 hover:text-orange-400"
          >
            <HiUsers className="text-lg" />
            <span className="text-lg">Users</span>
          </Link>

          <Link
            to={"/admin-workers"}
            className="flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer
              transition text-gray-700 hover:bg-gray-100 hover:text-orange-400"
          >
            <FaHelmetSafety className="text-lg" />
            <span className="text-lg">Workers</span>
          </Link>
          <Link
            to={"/admin-requests"}
            className="flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer
              transition text-gray-700 hover:bg-gray-100 hover:text-orange-400"
          >
            <FaBriefcase className="text-lg" />
            <span className="text-lg">Worker Requests</span>
          </Link>
          <Link
            to={"/admin-payments"}
            className="flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer
              transition text-gray-700 hover:bg-gray-100 hover:text-orange-400"
          >
            <FaWallet className="text-lg" />
            <span className="text-lg">Payments</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default AdminSidebar;
