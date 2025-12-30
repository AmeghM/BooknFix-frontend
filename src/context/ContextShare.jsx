import React, { createContext, useState } from "react";

export const userProfileUpdateContext = createContext();
export const workerProfileUpdateContext = createContext();

function ContextShare({ children }) {
  const [userProfileUpdateStatus, setUserProfileUpdateStatus] = useState({});
  const [workerProfileUpdateStatus, setWorkerProfileUpdateStatus] = useState(
    {}
  );
  return (
    <userProfileUpdateContext.Provider
      value={{ userProfileUpdateStatus, setUserProfileUpdateStatus }}
    >
      <workerProfileUpdateContext.Provider
        value={{ workerProfileUpdateStatus, setWorkerProfileUpdateStatus }}
      >
        {children}
      </workerProfileUpdateContext.Provider>
    </userProfileUpdateContext.Provider>
  );
}

export default ContextShare;
