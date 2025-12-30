import React from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import { FaWallet } from "react-icons/fa";
import { useState } from "react";
import { getAllPaymentsAdminAPI } from "../../services/allAPI";
import { useEffect } from "react";

function AdminPayment() {
  const [payments, setPayments] = useState([]);
  const [statusFilter, setStatusFilter] = useState("paid");
  const getPayments = async () => {
    const token = sessionStorage.getItem("token");

    if (token) {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      try {
        const result = await getAllPaymentsAdminAPI(reqHeader);
        setPayments(result.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getPayments();
  }, []);

  const filteredPayments = payments.filter((item) => {
    if (statusFilter === "paid") return item.paymentStatus === "Paid";
    if (statusFilter === "unpaid") return item.paymentStatus === "Unpaid";
    return true;
  });

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
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setStatusFilter("paid")}
              className={`px-5 py-2 rounded-full font-semibold transition ${
                statusFilter === "paid"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Paid
            </button>

            <button
              onClick={() => setStatusFilter("unpaid")}
              className={`px-5 py-2 rounded-full font-semibold transition ${
                statusFilter === "unpaid"
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Unpaid
            </button>
          </div>
          <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                    no
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
                {filteredPayments.length > 0 ? (
                  filteredPayments.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-400">
                          {index + 1}
                        </div>
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-400">
                        <div className="font-medium">
                          {new Date(item.serviceDate).toLocaleDateString()}
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-400">
                          {item.customerName}
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-400">
                          {item.workerName}
                        </div>
                      </td>

                      <td className="px-6 py-4 text-center space-y-2">
                        <div className="text-sm font-medium text-gray-400">
                          {item.serviceCategory}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center space-y-2">
                        <div className="text-sm font-medium text-green-600">
                          ₹{item.finalAmount}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span
                          className={`px-3 py-1 text-xs font-semibold rounded-full border
                            ${
                              item.paymentStatus === "Paid"
                                ? "bg-green-100 text-green-800 border-green-400"
                                : "bg-yellow-100 text-yellow-800 border-yellow-400"
                            }`}
                        >
                          {item.paymentStatus === "Paid" ? "Paid" : "Unpaid"}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center py-6 text-gray-400">
                      No {statusFilter} payments found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPayment;
