import React from "react";
import WorkerHeader from "../components/WorkerHeader";
import WorkerSidebar from "../components/WorkerSidebar";
import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaTools,
  FaUniversity,
  FaCreditCard,
  FaIdCard,
} from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import {
  getWorkerProfileAPI,
  updateWorkerProfileAPI,
} from "../../services/allAPI";
import SERVER_URL from "../../services/serverURL";

function WorkerProfile() {
  const [worker, setWorker] = useState(null);
  const [workerData, setWorkerData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    serviceCategory: "",
    experienceYears: "",
    serviceArea: "",
    profile: "",
    bio: "",
    bankName: "",
    accountNumber: "",
    ifsc: "",
  });

  const [token, setToken] = useState("");

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const workerToken = sessionStorage.getItem("token");
    if (workerToken) {
      setToken(workerToken);
      getWorkerData(workerToken);
    }
  }, []);

  const getWorkerData = async (token) => {
    try {
      const reqHeader = { Authorization: `Bearer ${token}` };

      const result = await getWorkerProfileAPI(reqHeader);
      setWorker(result.data);
      setWorkerData({
        fullName: result.data.fullName,
        mobile: result.data.mobile,
        serviceArea: result.data.serviceArea,
        experienceYears: result.data.experienceYears,
        bio: result.data.bio || "",
        bankName: result.data.bankDetails?.bankName || "",
        accountNumber: result.data.bankDetails?.accountNumber || "",
        ifsc: result.data.bankDetails?.ifsc || "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateProfile = async () => {
    try {
      const updateData = {
        fullName: workerData.fullName,
        mobile: workerData.mobile,
        serviceArea: workerData.serviceArea,
        experienceYears: workerData.experienceYears,
        bio: workerData.bio,
        bankName: workerData.bankName,
        accountNumber: workerData.accountNumber,
        ifsc: workerData.ifsc,
      };

      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };
      const result = await updateWorkerProfileAPI(updateData, reqHeader);

      setWorker(result.data);
      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <WorkerHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <WorkerSidebar />
        </div>
        <div className="col-span-4 p-6 bg-orange-50">
          <div className="min-h-screen  flex justify-center p-6">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-6">
              <div className="flex flex-col items-center">
                {worker?.profile ? (
                  <img
                    src={`${SERVER_URL}/imguploads/${worker?.profile}`}
                    className="w-32 h-32 rounded-full object-cover"
                  />
                ) : (
                  <FaUserCircle size={120} className="text-gray-400" />
                )}

                <h2 className="text-2xl font-bold mt-3">{worker?.fullName}</h2>
                <p className="text-orange-600">{worker?.serviceCategory}</p>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center bg-orange-100 p-3 rounded-lg">
                  <FaEnvelope className="text-orange-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{worker?.email}</p>
                  </div>
                </div>

                <div className="flex items-center bg-orange-100 p-3 rounded-lg">
                  <FaPhone className="text-orange-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">{worker?.mobile}</p>
                  </div>
                </div>

                <div className="flex items-center bg-orange-100 p-3 rounded-lg">
                  <FaMapMarkerAlt className="text-orange-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">{worker?.serviceArea}</p>
                  </div>
                </div>

                <div className="flex items-center bg-orange-100 p-3 rounded-lg">
                  <FaTools className="text-orange-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Experience</p>
                    <p className="font-medium">
                      {worker?.experienceYears} Years
                    </p>
                  </div>
                </div>
              </div>

              {/* About Section */}
              <div className="mt-6">
                <h3 className="font-semibold text-lg mb-2">About</h3>
                <p className="text-gray-600 leading-relaxed">{worker?.bio}</p>
              </div>

              {/* Bank Details Section */}
              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-3">Bank Details</h3>

                <div className="space-y-4">
                  <div className="flex items-center bg-orange-100 p-3 rounded-lg">
                    <FaUniversity className="text-orange-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Bank Name</p>
                      <p className="font-medium">
                        {worker?.bankDetails?.bankName || "-"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center bg-orange-100 p-3 rounded-lg">
                    <FaCreditCard className="text-orange-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Account Number</p>
                      <p className="font-medium">
                        {worker?.bankDetails?.accountNumber || "-"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center bg-orange-100 p-3 rounded-lg">
                    <FaIdCard className="text-orange-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">IFSC Code</p>
                      <p className="font-medium">
                        {worker?.bankDetails?.ifsc || "-"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700 transition"
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-md">
              <h2 className="text-xl font-bold mb-4">Edit Profile</h2>

              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={workerData.fullName}
                  onChange={(e) =>
                    setWorkerData({ ...workerData, fullName: e.target.value })
                  }
                  className="w-full border p-2 rounded"
                />

                <input
                  type="text"
                  placeholder="Mobile"
                  value={workerData.mobile}
                  onChange={(e) =>
                    setWorkerData({ ...workerData, mobile: e.target.value })
                  }
                  className="w-full border p-2 rounded"
                />

                <input
                  type="text"
                  placeholder="Service Area"
                  value={workerData.serviceArea}
                  onChange={(e) =>
                    setWorkerData({
                      ...workerData,
                      serviceArea: e.target.value,
                    })
                  }
                  className="w-full border p-2 rounded"
                />

                <textarea
                  placeholder="Bio"
                  value={workerData.bio}
                  onChange={(e) =>
                    setWorkerData({ ...workerData, bio: e.target.value })
                  }
                  className="w-full border p-2 rounded"
                />

                {/* Bank Details */}
                <input
                  type="text"
                  placeholder="Bank Name"
                  value={workerData.bankName}
                  onChange={(e) =>
                    setWorkerData({ ...workerData, bankName: e.target.value })
                  }
                  className="w-full border p-2 rounded"
                />

                <input
                  type="text"
                  placeholder="Account Number"
                  value={workerData.accountNumber}
                  onChange={(e) =>
                    setWorkerData({
                      ...workerData,
                      accountNumber: e.target.value,
                    })
                  }
                  className="w-full border p-2 rounded"
                />

                <input
                  type="text"
                  placeholder="IFSC Code"
                  value={workerData.ifsc}
                  onChange={(e) =>
                    setWorkerData({ ...workerData, ifsc: e.target.value })
                  }
                  className="w-full border p-2 rounded"
                />

                {/* <input
                  type="file"
                  onChange={(e) =>
                    setWorkerData({ ...workerData, profile: e.target.files[0] })
                  }
                /> */}

                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 border rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleUpdateProfile}
                    className="px-4 py-2 bg-orange-600 text-white rounded"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default WorkerProfile;
