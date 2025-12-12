import React from "react";
import { Link } from "react-router-dom";
import Header from "../../common/components/Header";

function UserWorkerProfile() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4">
        <div className="w-full max-w-6xl r p-6">
          <div className="relative border-t-3 border-orange-500 rounded-xl p-6 flex items-center justify-between bg-white shadow-lg">
            <div className="flex items-center gap-4">
              <img
                src="https://mockmind-api.uifaces.co/content/human/218.jpg"
                alt=""
                className="w-40 h-40 rounded-full object-cover"
              />
              <div className="">
                <h1 className="text-2xl font-bold">James Sean</h1>
                <p className="text-red-500 text-sm font-medium">Electrician</p>
                <div className="flex items-center gap-1 text-sm mt-1">
                  <span className="font-semibold">4.9</span>
                  <span>⭐⭐⭐⭐⭐</span>
                  <span className="text-gray-500">(32 Reviews)</span>
                </div>
                <p className="text-gray-600 text-sm mt-1">
                  7 years Experience - Licensed
                </p>
                <p className="text-gray-700 text-sm mt-1">Kakkanad,kochi</p>
                <p className="text-gray-700 text-sm mt-1">
                  Min:
                  <span className="text-orange-500 font-medium">₹ 300</span>
                </p>
              </div>
            </div>
            <Link to={"/booking-form"}>
              <button className="border border-orange-400 px-5 text-orange-400 py-2 text-lg font-medium rounded-full hover:bg-orange-400 hover:text-white transition">
                Book Now
              </button>
            </Link>
          </div>
          <div className=" gap-8 mt-6 border-b pb-3 text-sm border-b-gray-300 bg-white p-5 rounded-xl">
            <div className="flex gap-6 items-center border-b-2 border-b-gray-200">
              <button className="text-orange-500 font-semibold border-b-2 border-orange-500 pb-1">
                About
              </button>
              <button className="text-gray-600  hover:text-orange-500">
                Reviews
              </button>
            </div>
            <div>
              <div className=" border-b border-gray-200 py-5">
                <h2 className="text-lg font-medium mb-3">Biography & Focus</h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Rerum aspernatur reiciendis nisi repudiandae, repellat quo,
                  eaque dicta deserunt consequuntur aperiam tenetur, accusamus
                  minima odio consectetur officia. Reiciendis nemo quis maiores?
                </p>
              </div>
              <div className="py-4">
                <h2 className="text-lg font-medium mb-3">Verified Details</h2>
                <div className="grid grid-cols-2 ">
                  <div className="space-y-2">
                    <p>✅ Full Electrical License </p>
                    <p>✅ 7+ Years of Trade Experience</p>
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
                <div className="shadow-md border flex justify-between border-gray-100 p-5  rounded-xl">
                  <div className="space-y-2">
                    <h2 className="font-medium ">Mark Z</h2>
                    <p>⭐⭐⭐⭐⭐</p>
                    <p>Fantastic</p>
                  </div>
                  <div>
                    <p>5 days ago</p>
                  </div>
                </div>
                <div className="shadow-md border flex justify-between border-gray-100 p-5  rounded-xl">
                  <div className="space-y-2">
                    <h2 className="font-medium ">Mark Z</h2>
                    <p>⭐⭐⭐⭐⭐</p>
                    <p>Fantastic</p>
                  </div>
                  <div>
                    <p>5 days ago</p>
                  </div>
                </div>
                <div className="shadow-md border flex justify-between border-gray-100 p-5  rounded-xl">
                  <div className="space-y-2">
                    <h2 className="font-medium ">Mark Z</h2>
                    <p>⭐⭐⭐⭐⭐</p>
                    <p>Fantastic</p>
                  </div>
                  <div>
                    <p>5 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserWorkerProfile;
