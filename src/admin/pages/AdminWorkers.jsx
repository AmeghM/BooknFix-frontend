import { Trash, Trash2 } from "lucide-react";
import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";
import { FaHelmetSafety } from "react-icons/fa6";

function AdminWorkers() {
  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <AdminSidebar />
        </div>
        <div className="col-span-4 p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
            <FaHelmetSafety className="w-7 h-7 mr-3 text-orange-600" />
            Workers
          </h2>
          <div className="md:grid grid-cols-4 gap-3 w-full my-5">
            <div className="max-w-[270px] m-2 w-full bg-white shadow-xl rounded-lg p-4 flex flex-col items-center relative">
              <div className="h-[130px] card-radius w-full absolute top-0 left-0 bg-[#E8F0FF] z-0"></div>
              <div className="w-[150px] h-[150px] bg-white rounded-[50%] border-[3px] border-[#E8F0FF] z-10 ">
                <img
                  src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg?w=360"
                  alt=""
                  className="h-full w-full rounded-[50%] hover:opacity-80"
                />
              </div>
              <div className="text-xl font-bold pt-1">
                <h2>Workername</h2>
              </div>
              <div>
                <p>Email</p>
                <p>Phone</p>
                <p>City</p>
                <p>Service</p>
                <p>4.9⭐(32)</p>
              </div>
              <div className="mt-3 space-x-1">
                <button className="bg-blue-500 text-white px-5 py-2 rounded-full text-xs cursor-pointer font-medium hover:bg-blue-400  hover:text-gray-700 transition">
                  View Profile
                </button>
                <button className=" bg-red-500 text-white px-5 py-2 rounded-full text-xs font-medium border hover:bg-white hover:text-red-500 ">
                  Remove worker
                </button>
              </div>
            </div>
            <div className="max-w-[270px] m-2 w-full bg-white shadow-xl rounded-lg p-4 flex flex-col items-center relative">
              <div className="h-[130px] card-radius w-full absolute top-0 left-0 bg-[#E8F0FF] z-0"></div>
              <div className="w-[150px] h-[150px] bg-white rounded-[50%] border-[3px] border-[#E8F0FF] z-10 ">
                <img
                  src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg?w=360"
                  alt=""
                  className="h-full w-full rounded-[50%] hover:opacity-80"
                />
              </div>
              <div className="text-xl font-bold pt-1">
                <h2>Workername</h2>
              </div>
              <div>
                <p>Email</p>
                <p>Phone</p>
                <p>City</p>
                <p>Service</p>
                <p>4.9⭐(32)</p>
              </div>
              <div className="mt-3 space-x-1">
                <button className="bg-blue-500 text-white px-5 py-2 rounded-full text-xs cursor-pointer font-medium hover:bg-blue-400  hover:text-gray-700 transition">
                  View Profile
                </button>
                <button className=" bg-red-500 text-white px-5 py-2 rounded-full text-xs font-medium border hover:bg-white hover:text-red-500 ">
                  Remove worker
                </button>
              </div>
            </div>
            <div className="max-w-[270px] m-2 w-full bg-white shadow-xl rounded-lg p-4 flex flex-col items-center relative">
              <div className="h-[130px] card-radius w-full absolute top-0 left-0 bg-[#E8F0FF] z-0"></div>
              <div className="w-[150px] h-[150px] bg-white rounded-[50%] border-[3px] border-[#E8F0FF] z-10 ">
                <img
                  src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg?w=360"
                  alt=""
                  className="h-full w-full rounded-[50%] hover:opacity-80"
                />
              </div>
              <div className="text-xl font-bold pt-1">
                <h2>Workername</h2>
              </div>
              <div>
                <p>Email</p>
                <p>Phone</p>
                <p>City</p>
                <p>Service</p>
                <p>4.9⭐(32)</p>
              </div>
              <div className="mt-3 space-x-1">
                <button className="bg-blue-500 text-white px-5 py-2 rounded-full text-xs cursor-pointer font-medium hover:bg-blue-400  hover:text-gray-700 transition">
                  View Profile
                </button>
                <button className=" bg-red-500 text-white px-5 py-2 rounded-full text-xs font-medium border hover:bg-white hover:text-red-500 ">
                  Remove worker
                </button>
              </div>
            </div>
            <div className="max-w-[270px] m-2 w-full bg-white shadow-xl rounded-lg p-4 flex flex-col items-center relative">
              <div className="h-[130px] card-radius w-full absolute top-0 left-0 bg-[#E8F0FF] z-0"></div>
              <div className="w-[150px] h-[150px] bg-white rounded-[50%] border-[3px] border-[#E8F0FF] z-10 ">
                <img
                  src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg?w=360"
                  alt=""
                  className="h-full w-full rounded-[50%] hover:opacity-80"
                />
              </div>
              <div className="text-xl font-bold pt-1">
                <h2>Workername</h2>
              </div>
              <div>
                <p>Email</p>
                <p>Phone</p>
                <p>City</p>
                <p>Service</p>
                <p>4.9⭐(32)</p>
              </div>
              <div className="mt-3 space-x-1">
                <button className="bg-blue-500 text-white px-5 py-2 rounded-full text-xs cursor-pointer font-medium hover:bg-blue-400  hover:text-gray-700 transition">
                  View Profile
                </button>
                <button className=" bg-red-500 text-white px-5 py-2 rounded-full text-xs font-medium border hover:bg-white hover:text-red-500 ">
                  Remove worker
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminWorkers;
