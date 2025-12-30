import React, { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import { FaCheckCircle, FaUsers, FaUserTie } from "react-icons/fa";
import {
  getAllUsersAPI,
  getAllWorkersAdminAPI,
  getPendingWorkersAPI,
} from "../../services/allAPI";

function AdminHome() {
  const [allUsers, setAllUsers] = useState([]);
  const [token, setToken] = useState("");
  const [allWorkers, setAllWorkers] = useState([]);
  const [pendingWorkers, setPendingWorkers] = useState([]);

  const getAllUsers = async () => {
    try {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };
      const result = await getAllUsersAPI(reqHeader);
      console.log(result);
      setAllUsers(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllWorkers = async () => {
    try {
      const reqHeader = { Authorization: `Bearer ${token}` };
      const result = await getAllWorkersAdminAPI(reqHeader);
      console.log(result);
      setAllWorkers(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getPendingWorkers = async () => {
    try {
      const reqHeader = { Authorization: `Bearer ${token}` };

      const result = await getPendingWorkersAPI(reqHeader);
      console.log(result);
      setPendingWorkers(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    }
  }, []);

  useEffect(() => {
    if (token) {
      getAllUsers();
      getAllWorkers();
      getPendingWorkers();
    }
  }, [token]);
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
                <h3 className="text-2xl font-bold text-gray-800">
                  {allUsers.length}
                </h3>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xl flex items-center space-x-5 border border-orange-200 border-t-4 border-t-orange-400 border-b-4 border-b-orange-400 hover:-translate-y-1 transition">
              <div className="bg-orange-100 p-4 rounded-xl">
                <FaUserTie className="text-orange-600 w-7 h-7" />
              </div>
              <div>
                <p className="text-gray-500 font-medium">Total no.of Workers</p>
                <h3 className="text-2xl font-bold text-gray-800">
                  {allWorkers.length}
                </h3>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xl flex items-center space-x-5 border border-blue-200 border-t-4 border-t-blue-300 border-b-4 border-b-blue-300 hover:-translate-y-1 transition">
              <div className="bg-blue-100 p-4 rounded-xl">
                <FaCheckCircle className="text-blue-500 w-7 h-7" />
              </div>
              <div>
                <p className="text-gray-500 font-medium">Pending Workers </p>
                <h3 className="text-2xl font-bold text-gray-800">
                  {pendingWorkers.length}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminHome;
