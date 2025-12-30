import React, { useEffect } from "react";
import Footer from "../../common/components/Footer";
import Header from "../../common/components/Header";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { updateBookingPaymentAPI } from "../../services/allAPI";

function PaymentSuccess() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const bookingId = params.get("bookingId");

  useEffect(() => {
    const updatePayment = async () => {
      try {
        const token = sessionStorage.getItem("token");

        if (!bookingId || !token) return;

        const reqHeader = {
          Authorization: `Bearer ${token}`,
        };

        await updateBookingPaymentAPI({ bookingId }, reqHeader);
      } catch (error) {
        console.error("Payment update failed", error);
      }
    };

    updatePayment();
  }, [bookingId]);
  return (
    <>
      <Header />

      <div className="grid grid-cols-2 py-20 px-40 justify-center items-center ">
        <div>
          <h1 className="text-blue-700 text-6xl font-medium">
            Congratulations! Payment Successfull
          </h1>
          <p className="mt-5 mb-10">Thank you for booking with us..</p>
          <Link
            to={"/services"}
            className="px-4 py-3 rounded bg-orange-600 text-white hover:border hover:border-orange-600 hover:bg-white hover:text-orange-600"
          >
            Explore more...
          </Link>
        </div>
        <div>
          <img
            src="https://assets-v2.lottiefiles.com/a/122b1120-1172-11ee-b937-b3d6f4476bf7/Wnxf3qiHCQ.png"
            alt=""
            className="w-3/4 ms-30"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default PaymentSuccess;
