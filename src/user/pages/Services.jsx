import React, { useEffect, useState } from "react";
import Header from "../../common/components/Header";
import Footer from "../../common/components/Footer";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaMapPin } from "react-icons/fa";
import { getAllWorkersAPI } from "../../services/allAPI";
import SERVER_URL from "../../services/serverURL";

function Services() {
  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [allWorkers, setAllWorkers] = useState([]);
  const [tempWorkers, setTempWorkers] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("No Filter");

  const [minRating, setMinRating] = useState(0);
  const getAllWorkers = async (userToken) => {
    const reqHeader = { Authorization: `Bearer ${userToken}` };
    try {
      const result = await getAllWorkersAPI(searchKey, reqHeader);
      console.log(result);
      setAllWorkers(result.data);
      setTempWorkers(result.data);

      const tempCategory = result.data.map((item) => item.serviceCategory);

      setAllCategory([...new Set(tempCategory)]);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(allWorkers);
  console.log(allCategory);

  const applyFilters = () => {
    let filtered = [...tempWorkers];

    // Category filter
    if (selectedCategory !== "No Filter") {
      filtered = filtered.filter(
        (item) =>
          item.serviceCategory.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Rating filter (FIXED)
    if (minRating > 0) {
      filtered = filtered.filter((item) => (item.avgRating || 0) >= minRating);
    }
    filtered = sortWorkers(filtered);

    setAllWorkers(filtered);
  };

  // const categoryFilter = (category) => {
  //   if (category == "No Filter") {
  //     setAllWorkers(tempWorkers);
  //   } else {
  //     setAllWorkers(
  //       tempWorkers.filter(
  //         (item) => item.serviceCategory.toLowerCase() == category.toLowerCase()
  //       )
  //     );
  //   }
  // };
  const sortWorkers = (workers) => {
    return [...workers].sort((a, b) => {
      // 1. Sort by service category
      const categoryCompare = a.serviceCategory.localeCompare(
        b.serviceCategory
      );

      if (categoryCompare !== 0) return categoryCompare;

      // 2. If same category, sort by name
      return a.fullName.localeCompare(b.fullName);
    });
  };

  useEffect(() => {
    const userToken = sessionStorage.getItem("token");
    if (userToken) {
      setToken(userToken);
    }
  }, []);

  useEffect(() => {
    applyFilters();
  }, [selectedCategory, minRating, tempWorkers]);

  useEffect(() => {
    if (token) {
      getAllWorkers(token);
    }
  }, [searchKey, token]);
  return (
    <>
      <Header />
      <div className="bg-gray-50 min-h-screen pt-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-extrabold text-gray-900">
              Browse Our Network of Experts
            </h1>
            <p className="mt-2 text-xl text-gray-500">
              Find verified professionals for every service you need.
            </p>
          </div>

          <div className="mb-10">
            <div className="flex w-full bg-white p-3 rounded-lg shadow-md border border-gray-200">
              <input
                type="text"
                value={searchKey}
                placeholder="Search by service or area..."
                onChange={(e) => setSearchKey(e.target.value)}
                className="grow p-2 text-gray-800 placeholder-gray-500 bg-transparent focus:outline-none"
              />
              <button className="ml-3 px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition duration-300 flex items-center">
                <FiSearch className="h-5 w-5 mr-2" />
                Search
              </button>
            </div>
          </div>

          <div className="md:grid md:grid-cols-4 md:gap-8">
            <div className="md:col-span-1 mb-8 md:mb-0 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">
                Filter Services
              </h3>

              {/*Service Category */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md"
                >
                  <option value="No Filter">All</option>
                  {allCategory.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              {/* Rating */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Minimum Rating
                </label>
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="rating"
                    id="3stars"
                    onChange={() => setMinRating(3)}
                    className="text-orange-600 focus:ring-orange-500"
                  />
                  <label htmlFor="3stars" className="text-sm text-gray-900">
                    3 Stars & Up
                  </label>
                </div>
                <div className="flex items-center space-x-3 mt-2">
                  <input
                    type="radio"
                    name="rating"
                    id="4stars"
                    onChange={() => setMinRating(4)}
                    className="text-orange-600 focus:ring-orange-500"
                  />
                  <label htmlFor="4stars" className="text-sm text-gray-900">
                    4 Stars & Up
                  </label>
                </div>
                <div className="flex items-center space-x-3 mt-2">
                  <input
                    type="radio"
                    name="rating"
                    id="5stars"
                    onChange={() => setMinRating(5)}
                    className="text-orange-600 focus:ring-orange-500"
                  />
                  <label htmlFor="5stars" className="text-sm text-gray-900">
                    5 Stars Only
                  </label>
                </div>
              </div>

              <button className="w-full mt-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 transition">
                Apply Filters
              </button>
            </div>

            <div className="md:col-span-3">
              {/* <div className="mb-6 flex justify-between items-center">
                <select className="pl-3 pr-8 py-2 text-sm border-gray-300 rounded-md">
                  <option>Sort by: Best Match</option>
                  <option>Sort by: Highest Rating</option>
                  <option>Sort by: Most Jobs Completed</option>
                </select>
              </div> */}

              {/* Worker Cards Grid */}
              {allWorkers?.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* --- WORKER CARD  */}
                  {allWorkers?.map((worker, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100"
                    >
                      <div className="h-32 bg-orange-100 flex items-center justify-center relative">
                        <div className="absolute top-0 right-0 bg-orange-600 text-white px-4 py-1 rounded-bl-xl font-bold text-lg flex items-center shadow-lg">
                          ₹{worker.minPrice} Min
                        </div>

                        <img
                          src={
                            worker?.profile
                              ? `${SERVER_URL}/imguploads/${worker.profile}`
                              : "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
                          }
                          alt="Worker Avatar"
                          className="w-20 h-20 rounded-full border-4 border-white shadow-xl absolute bottom-[-2.5rem]"
                        />
                      </div>

                      {/* Card Body */}
                      <div className="p-6 pt-12 text-center">
                        <h4 className="text-xl font-bold text-gray-900 truncate">
                          {worker.fullName}
                        </h4>
                        <p className="text-sm text-orange-600 font-medium mt-1">
                          {worker.serviceCategory}
                        </p>

                        <div className="flex justify-center items-center mt-3 text-yellow-500">
                          <span className="text-base mr-1 font-semibold text-gray-900">
                            {worker.avgRating
                              ? worker.avgRating.toFixed(1)
                              : "0.0"}
                          </span>
                          <FaStar className="w-4 h-4" />

                          <span className="text-sm text-gray-500 ml-2">
                            ({worker.totalReviews || 0} Reviews)
                          </span>
                        </div>

                        <p className="text-sm text-gray-500 mt-3">
                          {worker.experienceYears} Years Experience • 🛠️ 150+
                          Jobs Completed
                        </p>
                        <p className="text-sm text-gray-700 mt-1 flex items-center justify-center font-medium">
                          <FaMapPin className="w-4 h-4 mr-1 text-orange-600" />
                          {worker.serviceArea}
                        </p>

                        {/* Booking Button  */}
                        <Link to={`/worker/${worker?._id}`}>
                          <button className="mt-5 w-full px-4 py-2 border border-transparent text-base font-medium rounded-full shadow-md text-white bg-orange-500 hover:bg-orange-600 transition">
                            View Profile & Book
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No Workers Available...</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Services;
