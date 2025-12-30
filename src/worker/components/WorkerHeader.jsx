import { CirclePower } from "lucide-react";
import React from "react";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import { toast } from "react-toastify";
function WorkerHeader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    toast.success("Logout Successfull");
    navigate("/");
  };
  return (
    <>
      <nav className="flex items-center px-5 py-3 border-b border-b-orange-200 bg-white sticky top-0 z-10">
        <div className="flex items-center">
          <h2 className="font-bold flex text-2xl ms-4 text-orange-400">
            Book <span className="text-black">n</span> Fix
          </h2>
        </div>

        <div className="ms-auto flex items-center space-x-5">
          {/* <button className="cursor-pointer">
            <IoIosNotifications className="text-2xl text-gray-500" />
          </button> */}
          <Link to={"/worker-profile"}>
            <div className="px-2 py-2 rounded-full border border-orange-300  ">
              <FaUser className="text-xl text-orange-400 hover:text-orange-500" />
            </div>
          </Link>
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

export default WorkerHeader;
