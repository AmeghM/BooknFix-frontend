import React, { useContext, useEffect, useState } from "react";
import EditUserProfile from "../components/EditUserProfile";
import SERVER_URL from "../../services/serverURL";
import { userProfileUpdateContext } from "../../context/ContextShare";
import Header from "../../common/components/Header";
import Footer from "../../common/components/Footer";

function UserProfile() {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState("");

  const { userProfileUpdateStatus } = useContext(userProfileUpdateContext);

  useEffect(() => {
    const savedUser = sessionStorage.getItem("existingUser");
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser);
      setUserProfile(parsedUser.profile);
    }
  }, [userProfileUpdateStatus]);

  if (!user) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <p>Loading profile...</p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="w-full h-screen bg-gray-50 p-5">
        <div className="max-w-3xl mx-auto border-t-4 border-orange-500  bg-white shadow-lg rounded-lg mt-10 p-6">
          <div className="flex  items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 text-center">
              Profile
            </h2>
          </div>

          <div className="flex items-center justify-between mb-6  shadow-sm p-3 rounded">
            <div className="flex items-center space-x-4">
              <img
                src={
                  userProfile == ""
                    ? "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
                    : `${SERVER_URL}/imguploads/${userProfile}`
                }
                alt="User Avatar"
                className="w-32 h-32 rounded-full object-cover"
              />

              <div>
                <div className="text-xl font-semibold text-gray-800">
                  {user.username}
                </div>
                <div className="text-gray-600">{user.email}</div>
              </div>
            </div>
            <EditUserProfile />
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <span className="font-semibold text-gray-700 w-20">Name:</span>
              <span className="text-gray-600">{user.username}</span>
            </div>

            <div className="flex items-center">
              <span className="font-semibold text-gray-700 w-20">Email:</span>
              <span className="text-gray-600">{user.email}</span>
            </div>

            <div className="flex items-center">
              <span className="font-semibold text-gray-700 w-20">Phone:</span>
              <span className="text-gray-600">{user.phone}</span>
            </div>

            {/* <div className="flex items-center">
              <span className="font-semibold text-gray-700 w-20">Address:</span>
              <span className="text-gray-600">Abc Street,Delhi,India</span>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserProfile;
