import React from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import { FaWallet } from "react-icons/fa";

function AdminPayment() {
  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <AdminSidebar />
        </div>
        <div className="col-span-4 p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
            <FaWallet className="w-7 h-7 mr-3 text-orange-600" />
            Payment Transactions
          </h2>
          <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                    Worker
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase">
                    Service
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase">
                    Amount (₹)
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase">
                    Status
                  </th>
                </tr>
              </thead>

              {/* Table Body  */}
              <tbody className="divide-y divide-gray-200">
                {/* ROW  */}
                <tr className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-400">01</div>
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-400">
                    <div className="font-medium">12 Feb 2025</div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-400">
                      Karthik K
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-400">
                      James Sean
                    </div>
                  </td>

                  <td className="px-6 py-4 text-center space-y-2">
                    <div className="text-sm font-medium text-gray-400">
                      Electric Service
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center space-y-2">
                    <div className="text-sm font-medium text-green-600">
                      ₹850
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center space-y-2">
                    <span className="px-3 py-1  text-xs font-semibold rounded-full border bg-green-100 text-green-800 border-green-400">
                      Completed
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPayment;
