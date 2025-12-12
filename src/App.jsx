import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./common/pages/LandingPage";

import { useEffect, useState } from "react";
import PreLoader from "./common/pages/PreLoader";
import Auth from "./common/pages/Auth";
import AdminHome from "./admin/pages/AdminHome";
import AdminRequests from "./admin/pages/AdminRequests";
import AdminUsers from "./admin/pages/AdminUsers";
import AdminWorkers from "./admin/pages/AdminWorkers";
import AdminPayment from "./admin/pages/AdminPayment";
import WorkerProfile from "./worker/pages/WorkerProfile";
import UserProfile from "./user/pages/UserProfile";
import WorkerRequests from "./worker/pages/WorkerRequests";
import Services from "./user/pages/Services";
import Cart from "./user/pages/Cart";
import WorkerAuth from "./worker/pages/WorkerAuth";
import WorkerHome from "./worker/pages/WorkerHome";
import WorkerPayment from "./worker/pages/WorkerPayment";
import Contact from "./common/pages/Contact";
import UserWorkerProfile from "./user/pages/UserWorkerProfile";
import BookingForm from "./user/pages/BookingForm";
import RequestConfirm from "./user/pages/RequestConfirm";
import Bookings from "./user/pages/Bookings";
import Payment from "./user/pages/Payment";
import UserChat from "./user/pages/UserChat";
import About from "./common/pages/About";
import WorkerJobs from "./worker/pages/WorkerJobs";

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={loader ? <PreLoader /> : <LandingPage />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        {/* users */}
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/services" element={<Services />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/worker" element={<UserWorkerProfile />} />
        <Route path="/booking-form" element={<BookingForm />} />
        <Route path="/request-confirm" element={<RequestConfirm />} />
        <Route path="/my-bookings" element={<Bookings />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/chat" element={<UserChat />} />

        {/* workers */}
        <Route path="/worker-profile" element={<WorkerProfile />} />
        <Route path="/worker-requests" element={<WorkerRequests />} />
        <Route path="/worker-login" element={<WorkerAuth />} />
        <Route path="/worker-home" element={<WorkerHome />} />
        <Route path="/worker-payment" element={<WorkerPayment />} />
        <Route path="/worker-jobs" element={<WorkerJobs />} />

        {/* admin */}
        <Route path="/admin-home" element={<AdminHome />} />
        <Route path="/admin-requests" element={<AdminRequests />} />
        <Route path="/admin-users" element={<AdminUsers />} />
        <Route path="/admin-workers" element={<AdminWorkers />} />
        <Route path="/admin-payments" element={<AdminPayment />} />
      </Routes>
    </>
  );
}

export default App;
