import React, { useContext, useEffect, useState } from "react";
import { IoClose, IoPersonCircleOutline } from "react-icons/io5";
import SERVER_URL from "../../services/serverURL";
import { FaRegEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { updateProfileAPI } from "../../services/allAPI";
import { userProfileUpdateContext } from "../../context/ContextShare";
function EditUserProfile() {
  const [editModal, setEditModal] = useState(false);
  const [token, setToken] = useState("");
  const [userDetails, setUserDetails] = useState({
    username: "",
    phone: "",
    password: "",
    confirmPassword: "",
    profile: "",
  });
  const [existingProfile, setExistingProfile] = useState("");

  const [preview, setPreview] = useState("");
  const { setUserProfileUpdateStatus } = useContext(userProfileUpdateContext);

  const handleImageUpload = (e) => {
    setUserDetails({ ...userDetails, profile: e.target.files[0] });
    const url = URL.createObjectURL(e.target.files[0]);
    setPreview(url);
  };
  console.log(userDetails);

  const handleReset = () => {
    const user = JSON.parse(sessionStorage.getItem("existingUser"));
    setUserDetails({
      username: user.username,
      phone: user.phone,
      password: user.password,
      confirmPassword: user.password,
      profile: user.profile || "",
    });
  };

  const handleUpdate = async () => {
    const { username, phone, password, confirmPassword, profile } = userDetails;
    if (!username || !phone || !password || !confirmPassword) {
      toast.info("Fill the form completely");
    } else {
      if (password !== confirmPassword) {
        toast.warning("Invalid credentials");
      } else {
        const reqHeader = {
          Authorization: `Bearer ${token}`,
        };

        const reqBody = new FormData();
        if (preview) {
          for (let key in userDetails) {
            reqBody.append(key, userDetails[key]);
          }
          console.log("inside preview");

          const result = await updateProfileAPI(reqBody, reqHeader);
          console.log(result);

          if (result.status == 200) {
            toast.success("Profile updated Successfully");
            sessionStorage.setItem("existingUser", JSON.stringify(result.data));
            setUserProfileUpdateStatus(result);
            setEditModal(false);
          } else {
            toast.error("something went wrong");
          }
        } else {
          console.log("not inside preview");

          const result = await updateProfileAPI(
            { username, phone, password, profile: existingProfile },
            reqHeader
          );
          console.log(result);

          if (result.status == 200) {
            toast.success("Profile updated Successfully");
            sessionStorage.setItem("existingUser", JSON.stringify(result.data));
            setUserProfileUpdateStatus(result);
            setEditModal(false);
          } else {
            toast.error("something went wrong");
          }
        }
      }
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
      const user = JSON.parse(sessionStorage.getItem("existingUser"));
      setUserDetails({
        username: user.username,
        phone: user.phone,
        password: user.password,
        confirmPassword: user.password,
      });
      setExistingProfile(user.profile);
    }
  }, []);
  return (
    <>
      <button
        onClick={() => setEditModal(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Edit
      </button>

      {editModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-4">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                <IoPersonCircleOutline className="text-3xl text-blue-600" />
                Edit Profile
              </h2>
              <button
                onClick={() => setEditModal(false)}
                className="text-gray-500 hover:text-gray-700 transition p-1 rounded-full hover:bg-gray-100"
              >
                <IoClose size={32} />
              </button>
            </div>
            <div className="flex justify-center items-center flex-col my-5">
              <label className="relative" htmlFor="profilePic">
                <input
                  onChange={(e) => handleImageUpload(e)}
                  type="file"
                  id="profilePic"
                  style={{ display: "none" }}
                />
                {existingProfile == "" ? (
                  <img
                    src={
                      preview
                        ? preview
                        : "https://cdn-icons-png.flaticon.com/512/12225/12225935.png"
                    }
                    alt=""
                    style={{
                      height: "150px",
                      width: "150px",
                      borderRadius: "50%",
                    }}
                  />
                ) : (
                  <img
                    src={
                      preview
                        ? preview
                        : `${SERVER_URL}/imguploads/${existingProfile}`
                    }
                    alt=""
                    style={{
                      height: "150px",
                      width: "150px",
                      borderRadius: "50%",
                    }}
                  />
                )}

                <FaRegEdit className="absolute bottom-0  right-0 mt-1 me-2 text-blue-400 text-2xl" />
              </label>
            </div>
            <div className="mt-10 mb-3 w-full px-5">
              <input
                type="text"
                placeholder="Username"
                value={userDetails.username}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    username: e.target.value,
                  })
                }
                className="w-full border border-gray-300 placeholder-gray-500 p-2 rounded"
              />
            </div>
            <div className="mt-5 mb-3 w-full px-5">
              <input
                type="text"
                placeholder="Phone"
                value={userDetails.phone}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    phone: e.target.value,
                  })
                }
                className="w-full border border-gray-300 placeholder-gray-500 p-2 rounded"
              />
            </div>
            <div className="mt-5 mb-3 w-full px-5">
              <input
                type="text"
                placeholder="Password"
                value={userDetails.password}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    password: e.target.value,
                  })
                }
                className="w-full border border-gray-300 placeholder-gray-500 p-2 rounded"
              />
            </div>
            <div className="mt-5 mb-3 w-full px-5">
              <input
                type="text"
                placeholder="Confirm Password"
                value={userDetails.confirmPassword}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    confirmPassword: e.target.value,
                  })
                }
                className="w-full border border-gray-300 placeholder-gray-500 p-2 rounded"
              />
            </div>
            <div className="flex justify-end w-full px-5">
              <button
                onClick={handleReset}
                type="button"
                className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={handleUpdate}
                className="px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition shadow-lg ms-3"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EditUserProfile;
