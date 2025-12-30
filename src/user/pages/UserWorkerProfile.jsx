import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../../common/components/Header";
import { getAWorkerAPI, getWorkerReviewsAPI } from "../../services/allAPI";
import SERVER_URL from "../../services/serverURL";

function UserWorkerProfile() {
  const { id } = useParams();
  const [workerDetails, setWorkerDetails] = useState({});
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);
  const getAWorker = async () => {
    const token = sessionStorage.getItem("token");
    const reqHeader = { Authorization: `Bearer ${token}` };

    try {
      const result = await getAWorkerAPI(id, reqHeader);
      setWorkerDetails(result.data);

      const reviewResult = await getWorkerReviewsAPI(result.data.email);
      setReviews(reviewResult.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(workerDetails);

  useEffect(() => {
    getAWorker();
  }, []);
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4">
        <div className="w-full max-w-6xl r p-6">
          <div className="relative border-t-3 border-orange-500 rounded-xl p-6 flex items-center justify-between bg-white shadow-lg">
            <div className="flex items-center gap-4">
              <img
                src={
                  workerDetails?.profile
                    ? `${SERVER_URL}/imguploads/${workerDetails.profile}`
                    : "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
                }
                alt=""
                className="w-40 h-40 rounded-full object-cover"
              />
              <div className="">
                <h1 className="text-2xl font-bold">{workerDetails.fullName}</h1>
                <p className="text-red-500 text-sm font-medium">
                  {workerDetails.serviceCategory}
                </p>
                <div className="flex items-center gap-1 text-sm mt-1">
                  <span className="font-semibold">
                    {workerDetails.avgRating}
                  </span>
                  <span>⭐</span>
                  <span className="text-gray-500">
                    ({workerDetails?.totalReviews} Reviews)
                  </span>
                </div>
                <p className="text-gray-600 text-sm mt-1">
                  {workerDetails.experienceYears} years Experience - Licensed
                </p>
                <p className="text-gray-700 text-sm mt-1">
                  {workerDetails.serviceArea}
                </p>
                <p className="text-gray-700 text-sm mt-1">
                  Min:
                  <span className="text-orange-500 font-medium">
                    ₹ {workerDetails.minPrice}
                  </span>
                </p>
              </div>
            </div>
            <Link to={"/booking-form"}>
              <button
                onClick={() => {
                  sessionStorage.setItem(
                    "selectedWorkerEmail",
                    workerDetails.email
                  );
                  navigate("/booking-form");
                }}
                className="border border-orange-400 px-5 text-orange-400 py-2 text-lg font-medium rounded-full hover:bg-orange-400 hover:text-white transition"
              >
                Book Now
              </button>
            </Link>
          </div>
          <div className=" gap-8 mt-6 border-b pb-3 text-sm border-b-gray-300 bg-white p-5 rounded-xl">
            <div className="flex gap-6 items-center border-b-2 border-b-gray-200">
              <button className="text-orange-500 font-semibold border-b-2 border-orange-500 pb-1">
                About
              </button>
              {/* <button className="text-gray-600  hover:text-orange-500">
                Reviews
              </button> */}
            </div>
            <div>
              <div className=" border-b border-gray-200 py-5">
                <h2 className="text-lg font-medium mb-3">Biography & Focus</h2>
                <p className="text-gray-600">{workerDetails.bio}</p>
              </div>
              <div className="py-4">
                <h2 className="text-lg font-medium mb-3">Verified Details</h2>
                <div className="grid grid-cols-2 ">
                  <div className="space-y-2">
                    <p>✅ Full {workerDetails.serviceCategory} License </p>
                    <p>
                      ✅ {workerDetails.experienceYears}+ Years of Trade
                      Experience
                    </p>
                  </div>
                </div>
                <div>
                  <p></p>
                </div>
              </div>
            </div>
            {/* reviews */}
            <div>
              <div className="flex flex-col gap-3">
                {/* review card */}

                {reviews?.length > 0 ? (
                  reviews.map((item, index) => (
                    <div
                      key={index}
                      className="shadow-md border flex justify-between border-gray-100 p-5  rounded-xl"
                    >
                      <div className="space-y-2">
                        <h2 className="font-medium ">{item.userName}</h2>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p>{item.review}</p>
                      </div>
                      <div>
                        <p> {new Date(item.createdAt).toLocaleDateString()}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No reviews</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserWorkerProfile;
