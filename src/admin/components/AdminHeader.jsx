import React from "react";
import { CirclePower } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function AdminHeader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    toast.success("Logout Successfull");
    navigate("/");
  };
  return (
    <>
      <nav className="flex items-center px-5 py-3 border-b border-b-orange-200 bg-orange-50">
        {/* logo */}
        <div className="flex items-center">
          <h2 className="font-bold flex text-2xl ms-4 text-orange-400">
            Book <span className="text-black">n</span> Fix
          </h2>
        </div>

        {/* logout */}
        <div className="ms-auto">
          <button
            onClick={handleLogout}
            className="flex font-medium justify-between items-center border border-black hover:border-white hover:text-white rounded px-3 py-2 ms-3 hover:bg-linear-to-r hover:from-orange-500 hover:to-yellow-400"
          >
            <CirclePower className="me-1" /> Logout
          </button>
        </div>
      </nav>
    </>
  );
}

export default AdminHeader;
