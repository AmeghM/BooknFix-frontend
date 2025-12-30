import commonAPI from "./commonAPI";
import SERVER_URL from "./serverURL";

// register
export const registerAPI = async (reqBody) => {
  return await commonAPI("POST", `${SERVER_URL}/register`, reqBody);
};

// login
export const loginAPI = async (reqBody) => {
  return await commonAPI("POST", `${SERVER_URL}/login`, reqBody);
};

//get all workers
export const getAllWorkersAPI = async (searchKey, reqHeader) => {
  return await commonAPI(
    "GET",
    `${SERVER_URL}/all-services?search=${searchKey}`,
    {},
    reqHeader
  );
};

//get a worker
export const getAWorkerAPI = async (workerid, reqHeader) => {
  return await commonAPI(
    "GET",
    `${SERVER_URL}/worker/${workerid}`,
    {},
    reqHeader
  );
};

// create booking
export const createBookingAPI = async (reqBody, reqHeader) => {
  return await commonAPI(
    "POST",
    `${SERVER_URL}/create-booking`,
    reqBody,
    reqHeader
  );
};

// get all bookings
export const getAllBookingsAPI = async (reqHeader) => {
  return await commonAPI("GET", `${SERVER_URL}/user-bookings`, {}, reqHeader);
};

// make payment (start stripe checkout)
export const makeBookingPaymentAPI = async (reqBody, reqHeader) => {
  return await commonAPI(
    "POST",
    `${SERVER_URL}/booking/make-payment`,
    reqBody,
    reqHeader
  );
};

// update booking payment status
export const updateBookingPaymentAPI = async (reqBody, reqHeader) => {
  return await commonAPI(
    "PUT",
    `${SERVER_URL}/booking/payment-success`,
    reqBody,
    reqHeader
  );
};

// update user profile
export const updateProfileAPI = async (reqBody, reqHeader) => {
  return await commonAPI(
    "PUT",
    `${SERVER_URL}/user-profile-update`,
    reqBody,
    reqHeader
  );
};

// cancel booking
export const cancelBookingAPI = async (id, reqHeader) => {
  return await commonAPI(
    "PUT",
    `${SERVER_URL}/user-cancel-booking/${id}`,
    {},
    reqHeader
  );
};

// get reviews
export const getWorkerReviewsAPI = async (workerEmail) => {
  return await commonAPI("GET", `${SERVER_URL}/worker-reviews/${workerEmail}`);
};

// add reviews
export const addReviewAPI = async (reqBody, reqHeader) => {
  return await commonAPI(
    "POST",
    `${SERVER_URL}/add-review`,
    reqBody,
    reqHeader
  );
};

// ------------------- worker -------------------------
// register
export const workerRegisterAPI = async (reqBody) => {
  return await commonAPI("POST", `${SERVER_URL}/worker-reg`, reqBody);
};

// login
export const workerLoginAPI = async (reqBody) => {
  return await commonAPI("POST", `${SERVER_URL}/worker-login`, reqBody);
};

// get all booking
export const getWorkerBookingsAPI = async (reqHeader) => {
  return await commonAPI("GET", `${SERVER_URL}/worker-bookings`, {}, reqHeader);
};

// accept booking
export const acceptBookingAPI = async (bookingId, reqHeader) => {
  return await commonAPI(
    "PUT",
    `${SERVER_URL}/worker-booking-accept/${bookingId}`,
    {},
    reqHeader
  );
};

// decline booking
export const declineBookingAPI = async (id, reason, reqHeader) => {
  return await commonAPI(
    "PUT",
    `${SERVER_URL}/worker-booking-decline/${id}`,
    reason,
    reqHeader
  );
};

// get accepted bookings
export const getAllAcceptedBookingsAPI = async (reqHeader) => {
  return await commonAPI("GET", `${SERVER_URL}/worker-jobs`, {}, reqHeader);
};

// update job
export const updateJobsAPI = async (bookingId, reqBody, reqHeader) => {
  return await commonAPI(
    "PUT",
    `${SERVER_URL}/worker-job-update/${bookingId}`,
    reqBody,
    reqHeader
  );
};

// get worker profile
export const getWorkerProfileAPI = async (reqHeader) => {
  return await commonAPI("GET", `${SERVER_URL}/worker-profile`, {}, reqHeader);
};

// update worker profile
export const updateWorkerProfileAPI = async (reqBody, reqHeader) => {
  return await commonAPI(
    "PUT",
    `${SERVER_URL}/worker-profile-update`,
    reqBody,
    reqHeader
  );
};

// dash
export const workerDashboardAPI = async (reqHeader) => {
  return await commonAPI("GET", `${SERVER_URL}/worker-dash`, {}, reqHeader);
};

// --------------------- admin --------------------
// get all users
export const getAllUsersAPI = async (reqHeader) => {
  return await commonAPI("GET", `${SERVER_URL}/admin-users`, {}, reqHeader);
};

// delete a user
export const deleteUserAPI = async (userId, reqHeader) => {
  return await commonAPI(
    "DELETE",
    `${SERVER_URL}/admin-users/${userId}`,
    {},
    reqHeader
  );
};

// get all workers
export const getAllWorkersAdminAPI = async (reqHeader) => {
  return await commonAPI("GET", `${SERVER_URL}/admin-workers`, {}, reqHeader);
};

// delete a worker
export const deleteWorkerAPI = async (workerId, reqHeader) => {
  return await commonAPI(
    "DELETE",
    `${SERVER_URL}//admin-workers//${workerId}`,
    {},
    reqHeader
  );
};

// get pending workers
export const getPendingWorkersAPI = async (reqHeader) => {
  return await commonAPI(
    "GET",
    `${SERVER_URL}/admin-pending-workers`,
    {},
    reqHeader
  );
};

// approve workers
export const approveWorkerAPI = async (workerId, reqHeader) => {
  return await commonAPI(
    "PUT",
    `${SERVER_URL}/admin-worker-approve/${workerId}`,
    {},
    reqHeader
  );
};

// reject worker
export const rejectWorkerAPI = async (workerId, reqHeader) => {
  return await commonAPI(
    "PUT",
    `${SERVER_URL}/admin-worker-reject/${workerId}`,
    {},
    reqHeader
  );
};

//get payments
export const getAllPaymentsAdminAPI = async (reqHeader) => {
  return await commonAPI("GET", `${SERVER_URL}/admin-payments`, {}, reqHeader);
};
