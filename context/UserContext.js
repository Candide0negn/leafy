import React, { createContext, useContext, useState } from "react";

// Define the context
const UserContext = createContext();

// Provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [address, setAddress] = useState({
    fullName: "",
    street: "Kurt-Schumacher",
    city: "",
    poBox: "",
    floor: "",
    phone: "",
  });

  // Function to update user state
  const updateUser = (userInfo) => {
    setUser(userInfo);
  };

  return (
    <UserContext.Provider value={{ user, address, setAddress}}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => useContext(UserContext);
