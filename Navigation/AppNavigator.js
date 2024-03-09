import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { TouchableOpacity, Text } from "react-native";
import CheckoutScreen from "../MainScreens/CheckoutScreen";
import PickUpScreen from "../MainScreens/PickUpScreen";
import AddressScreen from "../MainScreens/AddressScreen";
import AddressFormScreen from "../MainScreens/AddressFormScreen";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Stack = createStackNavigator();

const AppNavigator = () => {
  const navigation = useNavigation();
  const headerOptions = {
    headerTitle: "Address",
    headerTitleAlign: "center",
    headerTitleStyle: {
      fontWeight: "900",
      fontSize: 24,
    },
    headerStyle: {
      backgroundColor: "#91C66A",
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
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  };
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
      <Stack.Screen
        name="AddressForm"
        component={AddressFormScreen}
        options={headerOptions}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
