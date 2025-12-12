import React from "react";

function UserProfile() {
  return (
    <>
      <div className="w-full h-screen bg-gray-50 p-5">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-6">
          <div className="flex  items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 text-center">
              Profile
            </h2>
          </div>

          <div className="flex items-center justify-between mb-6  shadow-sm p-3 rounded">
            <div className="flex items-center space-x-4">
              <img
                src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg?w=360"
                alt="User Avatar"
                className="w-32 h-32 rounded-full object-cover"
              />

              <div>
                <div className="text-xl font-semibold text-gray-800">
                  Jack S
                </div>
                <div className="text-gray-600">jack@gmail.com</div>
              </div>
            </div>

            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Edit
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <span className="font-semibold text-gray-700 w-20">Name:</span>
              <span className="text-gray-600">Jack S</span>
            </div>

            <div className="flex items-center">
              <span className="font-semibold text-gray-700 w-20">Email:</span>
              <span className="text-gray-600">jack@gmail.com</span>
            </div>

            <div className="flex items-center">
              <span className="font-semibold text-gray-700 w-20">Phone:</span>
              <span className="text-gray-600">9087654312</span>
            </div>

            <div className="flex items-center">
              <span className="font-semibold text-gray-700 w-20">Address:</span>
              <span className="text-gray-600">Abc Street,Delhi,India</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
