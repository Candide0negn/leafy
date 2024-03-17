import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { TouchableOpacity, Text } from "react-native";
import CheckoutScreen from "../MainScreens/CheckoutScreen";
import AddressScreen from "../MainScreens/AddressScreen";
import AddressFormScreen from "../MainScreens/AddressFormScreen";
import ClubScreen from "../MainScreens/ClubScreen";
import PickUpScreen from "../MainScreens/PickUpScreen";
import DetailsScreen from "../MainScreens/DetailsScreen";
import CartScreen from "../MainScreens/CartScreen";
import MapsScreen from "../MainScreens/MapsScreen" ;
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import PaymentDetails from "../MainScreens/PaymentDetails";
import DiscountScreen from "../MainScreens/DiscountScreen";
import HomeScreen from "../MainScreens/HomeScreen";
const Stack = createStackNavigator();

const AppNavigator = () => {
  const navigation = useNavigation();
  const headerOptions = {
    headerTitleAlign: "center",
    headerTitleStyle: {
      fontWeight: "900",
      fontSize: 24,
      marginLeft: -25,
    },
    headerStyle: {
      backgroundColor: "#DFF0D8",
      shadowColor: "transparent",
    },
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Entypo name="chevron-left" size={30} color="black" />
      </TouchableOpacity>
    ),
    headerLeftContainerStyle: {
      paddingLeft: 20,
    },
  };
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={headerOptions}
      />
      <Stack.Screen
        name="PickUp"
        component={PickUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Address"
        component={AddressScreen}
        options={{
          ...headerOptions,
          headerTitle: "Address",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="AddressForm"
        component={AddressFormScreen}
        options={{
          ...headerOptions,
          headerTitle: "Address",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Club"
        component={ClubScreen}
        options={headerOptions}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={headerOptions}
      />
      <Stack.Screen
        name="Maps"
        component={MapsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Payment"
        component={PaymentDetails}
        options={headerOptions}
      />
      <Stack.Screen
        name="Discount"
        component={DiscountScreen}
        options={headerOptions}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;

