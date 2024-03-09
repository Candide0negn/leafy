import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import CheckoutScreen from "../MainScreens/CheckoutScreen";
import PickUpScreen from "../MainScreens/PickUpScreen";
import AddressScreen from "../MainScreens/AddressScreen";
import AddressFormScreen from "../MainScreens/AddressFormScreen";
const Stack = createStackNavigator();

const AppNavigator = () => {
  const currentUser = { username: "JohnDoe" }; // Mocking currentUser for testing
  console.log("app navigator called with user", currentUser);
  return (
    <Stack.Navigator initialRouteName="AddressForm">
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
      <Stack.Screen
        name="AddressForm"
        component={AddressFormScreen}
        options={{
          headerShown:false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
