import React from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import { FaCheckCircle, FaUsers, FaUserTie } from "react-icons/fa";

function AdminHome() {
  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <AdminSidebar />
        </div>
        <div className="col-span-4 p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-2xl shadow-xl flex items-center space-x-5 border border-orange-200 border-t-4 border-t-green-400 border-b-4 border-b-green-400 hover:-translate-y-1 transition">
              <div className="bg-green-100 p-4 rounded-xl">
                <FaUsers className="text-green-600 w-7 h-7" />
              </div>
              <div>
                <p className="text-gray-500 font-medium">Total no.of Users</p>
                <h3 className="text-2xl font-bold text-gray-800">20</h3>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xl flex items-center space-x-5 border border-orange-200 border-t-4 border-t-orange-400 border-b-4 border-b-orange-400 hover:-translate-y-1 transition">
              <div className="bg-orange-100 p-4 rounded-xl">
                <FaUserTie className="text-orange-600 w-7 h-7" />
              </div>
              <div>
                <p className="text-gray-500 font-medium">Total no.of Workers</p>
                <h3 className="text-2xl font-bold text-gray-800">10</h3>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xl flex items-center space-x-5 border border-blue-200 border-t-4 border-t-blue-300 border-b-4 border-b-blue-300 hover:-translate-y-1 transition">
              <div className="bg-blue-100 p-4 rounded-xl">
                <FaCheckCircle className="text-blue-500 w-7 h-7" />
              </div>
              <div>
                <p className="text-gray-500 font-medium">Works Completed </p>
                <h3 className="text-2xl font-bold text-gray-800">14</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminHome;
