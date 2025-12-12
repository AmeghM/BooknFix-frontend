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

function WorkerPayment() {
  return (
    <>
      <WorkerHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <WorkerSidebar />
        </div>
        <div className="col-span-4 p-10"></div>
      </div>
    </>
  );
}

export default WorkerPayment;
