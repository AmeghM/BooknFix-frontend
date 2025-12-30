import React, { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import { HiUsers } from "react-icons/hi2";
import { deleteUserAPI, getAllUsersAPI } from "../../services/allAPI";
import SERVER_URL from "../../services/serverURL";

function AdminUsers() {
  const [allUsers, setAllUsers] = useState([]);

  const getAllUsers = async (userToken) => {
    try {
      const reqHeader = {
        Authorization: `Bearer ${userToken}`,
      };
      const result = await getAllUsersAPI(reqHeader);
      console.log(result);
      setAllUsers(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteUser = async (id) => {
    const token = sessionStorage.getItem("token");

    try {
      const reqHeader = { Authorization: `Bearer ${token}` };

      await deleteUserAPI(id, reqHeader);
      setAllUsers((prev) => prev.filter((user) => user._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const userToken = sessionStorage.getItem("token");
    if (userToken) {
      getAllUsers(userToken);
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
            <HiUsers className="w-7 h-7 mr-3 text-orange-600" />
            Registered Users
          </h2>
          <div className="md:grid grid-cols-4 gap-3 w-full my-5">
            {allUsers?.length > 0 ? (
              allUsers?.map((user) => (
                <div className="max-w-[270px] w-full bg-white shadow-xl rounded-lg p-4 flex flex-col items-center relative">
                  <div className="h-[130px] card-radius w-full absolute top-0 left-0 bg-orange-300 z-0"></div>
                  <div className="w-[150px] h-[150px] bg-white rounded-[50%] border-[3px] border-orange-300 z-10 ">
                    <img
                      src={
                        user?.profile
                          ? `${SERVER_URL}/imguploads/${user.profile}`
                          : "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg?w=360"
                      }
                      alt=""
                      className="h-full w-full rounded-[50%] hover:opacity-80"
                    />
                  </div>
                  <div className="text-xl font-bold pt-1">
                    <h2>{user.username}</h2>
                  </div>
                  <div>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                  </div>
                  <div className="mt-3 space-x-2">
                    {/* <button className="bg-blue-500 text-white px-5 py-2 rounded-full text-xs cursor-pointer font-medium hover:bg-blue-400  hover:text-gray-700 transition">
                  View Profile
                </button> */}
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      className=" bg-red-500 text-white px-5 py-2 rounded-full text-xs font-medium border hover:bg-white hover:text-red-500 "
                    >
                      Remove User
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-2xl font-medium  text-gray-700">
                No users Found
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminUsers;
