import React, { createContext, useContext, useState } from "react";
import htc from "../assets/htc.jpeg";
import ttp from "../assets/ttp.jpeg";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orderDetails, setOrderDetails] = useState({
    cartItems: [
      { id: "1", name: "Item name", image: htc, amount: "10.00", quantity: 1 },
      { id: "2", name: "Item name", image: ttp, amount: "10.00", quantity: 1 },
    ],
    totalQuantity: 0,
    subtotal: 0,
    deliveryFee: 0,
    total: 0,
    deliveryAddress: {
      fullName: "Ziggy Zagga",
      street: "Kurt-Schumacher Straße 22,",
      city: "Kaiserslautern",
      poBox: "67663",
      floor: "3.2",
      phone: "0123456789",
    },
    deliveryTime: {},
  });

  const updateOrderDetails = (updates) => {
    setOrderDetails((currentDetails) => ({ ...currentDetails, ...updates }));
  };

  return (
    <OrderContext.Provider value={{ orderDetails, updateOrderDetails }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
