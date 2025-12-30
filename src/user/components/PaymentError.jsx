import React from "react";
import Footer from "../../common/components/Footer";
import Header from "../../common/components/Header";
import { Link } from "react-router-dom";

function PaymentError() {
  return (
    <>
      <Header />

      <div className="grid grid-cols-2 p-20 px-40 justify-center items-center ">
        <div>
          <h1 className="text-red-700 text-6xl">
            Sorry! Your payment is unsuccessfull
          </h1>
          <p className="mt-5 mb-10">We apologize for the inconvience caused</p>
          <Link
            to={"/services"}
            className="px-4 py-3 rounded bg-blue-600 text-white hover:border hover:border-blue-600 hover:bg-white hover:text-blue-600"
          >
            Explore more..
          </Link>
        </div>
        <div>
          <img
            src="https://assets-v2.lottiefiles.com/a/4bf5f4ac-1176-11ee-ade7-c75cf18855d8/uZxKPraLyK.png"
            alt=""
            className="w-3/4 ms-30"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default PaymentError;
