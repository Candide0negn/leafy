import React from "react";
import AppNavigator from "./Navigation/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { UserProvider } from "./context/UserContext";
import { OrderProvider } from "./context/OrderContext";
const App = () => {
  return (
    <NavigationContainer>
      <UserProvider>
        <OrderProvider>
          <AppNavigator />
        </OrderProvider>
      </UserProvider>
    </NavigationContainer>
  );
};

export default App;
