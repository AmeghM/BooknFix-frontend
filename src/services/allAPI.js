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
