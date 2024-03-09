import React from "react";
import { createStackNavigator } from "@react-navigation/stack"; 
import CheckoutScreen from "../MainScreens/CheckoutScreen";
import PickUpScreen from "../MainScreens/PickUpScreen";
import AddressScreen from "../MainScreens/AddressScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const currentUser = { username: "JohnDoe" }; // Mocking currentUser for testing
  console.log("app navigator called with user", currentUser);
  return (
    <Stack.Navigator initialRouteName="Address">
      <Stack.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PickUp"
        component={PickUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Address"
        component={AddressScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
