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

function WorkerProfile() {
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
                <FaUserCircle className="text-gray-400" size={120} />
                <h2 className="text-2xl font-bold mt-3">James Sean</h2>
                <p className="text-orange-600">Electrician</p>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center bg-orange-100 p-3 rounded-lg">
                  <FaEnvelope className="text-orange-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">johndoe@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center bg-orange-100 p-3 rounded-lg">
                  <FaPhone className="text-orange-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">9876543210</p>
                  </div>
                </div>

                <div className="flex items-center bg-orange-100 p-3 rounded-lg">
                  <FaMapMarkerAlt className="text-orange-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">Chennai, Tamil Nadu</p>
                  </div>
                </div>

                <div className="flex items-center bg-orange-100 p-3 rounded-lg">
                  <FaTools className="text-orange-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Experience</p>
                    <p className="font-medium">5 Years</p>
                  </div>
                </div>
              </div>

              {/* About Section */}
              <div className="mt-6">
                <h3 className="font-semibold text-lg mb-2">About</h3>
                <p className="text-gray-600 leading-relaxed">
                  Skilled electrician specializing in wiring, appliance
                  installation, and electrical maintenance. Reliable,
                  professional, and customer-focused.
                </p>
              </div>

              {/* Bank Details Section */}
              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-3">Bank Details</h3>

                <div className="space-y-4">
                  <div className="flex items-center bg-orange-100 p-3 rounded-lg">
                    <FaUniversity className="text-orange-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Bank Name</p>
                      <p className="font-medium">State Bank of India</p>
                    </div>
                  </div>

                  <div className="flex items-center bg-orange-100 p-3 rounded-lg">
                    <FaCreditCard className="text-orange-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Account Number</p>
                      <p className="font-medium">1234 5678 9123</p>
                    </div>
                  </div>

                  <div className="flex items-center bg-orange-100 p-3 rounded-lg">
                    <FaIdCard className="text-orange-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">IFSC Code</p>
                      <p className="font-medium">SBIN0012340</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <button className="bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700 transition">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkerProfile;
