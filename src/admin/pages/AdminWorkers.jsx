import { Trash, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";
import { FaHelmetSafety, FaStar } from "react-icons/fa6";
import { deleteWorkerAPI, getAllWorkersAdminAPI } from "../../services/allAPI";
import SERVER_URL from "../../services/serverURL";

function AdminWorkers() {
  const [allWorkers, setAllWorkers] = useState([]);
  const [token, setToken] = useState("");

  const getAllWorkers = async (userToken) => {
    try {
      const reqHeader = { Authorization: `Bearer ${userToken}` };
      const result = await getAllWorkersAdminAPI(reqHeader);
      console.log(result);
      setAllWorkers(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(allWorkers);

  const handleDeleteWorker = async (id) => {
    try {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };
      await deleteWorkerAPI(id, reqHeader);
      setAllWorkers((prev) => prev.filter((w) => w._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const userToken = sessionStorage.getItem("token");
    if (userToken) {
      getAllWorkers(userToken);
      setToken(userToken);
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
            <FaHelmetSafety className="w-7 h-7 mr-3 text-orange-600" />
            Workers
          </h2>
          {allWorkers?.length > 0 ? (
            <div className="md:grid grid-cols-4 gap-3 w-full my-5">
              {allWorkers?.map((worker) => (
                <div className="max-w-[270px] m-2 w-full bg-white shadow-xl rounded-lg p-4 flex flex-col items-center relative">
                  <div className="h-[130px] card-radius w-full absolute top-0 left-0 bg-[#E8F0FF] z-0"></div>
                  <div className="w-[150px] h-[150px] bg-white rounded-[50%] border-[3px] border-[#E8F0FF] z-10 ">
                    <img
                      src={
                        worker.profile
                          ? `${SERVER_URL}/imguploads/${worker.profile}`
                          : "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg?w=360"
                      }
                      alt=""
                      className="h-full w-full rounded-[50%] hover:opacity-80"
                    />
                  </div>
                  <div className="text-xl font-bold pt-1">
                    <h2>{worker.fullName}</h2>
                  </div>
                  <div className="">
                    <p>{worker.email}</p>
                    <p>{worker.mobile}</p>
                    <p>{worker.serviceArea}</p>
                    <p>{worker.serviceCategory}</p>
                    <div className="flex justify-center items-center mt-3 text-yellow-500">
                      <span className="text-base mr-1 font-semibold text-gray-900">
                        {worker.avgRating ? worker.avgRating.toFixed(1) : "0.0"}
                      </span>
                      <FaStar className="w-4 h-4" />

                      <span className="text-sm text-gray-500 ml-2">
                        ({worker.totalReviews || 0} Reviews)
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 space-x-1">
                    {/* <button className="bg-blue-500 text-white px-5 py-2 rounded-full text-xs cursor-pointer font-medium hover:bg-blue-400  hover:text-gray-700 transition">
                      View Profile
                    </button> */}
                    <button
                      onClick={() => handleDeleteWorker(worker._id)}
                      className=" bg-red-500 text-white px-5 py-2 rounded-full text-xs font-medium border hover:bg-white hover:text-red-500 "
                    >
                      Remove worker
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-2xl text-gray-700 font-medium text-center mt-20">
              No Workers Found
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default AdminWorkers;
