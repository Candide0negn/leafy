import React from "react";
import AppNavigator from "./Navigation/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { UserProvider } from "./context/UserContext";
const App = () => {
  return (
    <NavigationContainer>
      <UserProvider>
        <AppNavigator />
      </UserProvider>
    </NavigationContainer>
  );
};

export default App;
