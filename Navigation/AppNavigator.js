import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import CheckoutScreen from "../MainScreens/CheckoutScreen";
import PickUpScreen from "../MainScreens/PickUpScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const currentUser = { username: "JohnDoe" }; // Mocking currentUser for testing
  console.log("app navigator called with user", currentUser);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Checkout">
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
