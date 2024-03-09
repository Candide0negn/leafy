import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";
const AddressScreen = () => {
  const addresses = [
    {
      id: "1",
      street: "Kurt-schumacher-straße 22",
      zip: "67663 Kaiserslautern",
    },
    {
      id: "2",
      street: "Kurt-schumacher-straße 12",
      zip: "67663 Kaiserslautern",
    },
    {
      id: "3",
      street: "Kurt-schumacher-straße 14",
      zip: "67663 Kaiserslautern",
    },
    {
      id: "4",
      street: "Kurt-schumacher-straße 8",
      zip: "67663 Kaiserslautern",
    },
  ];

  const renderAddress = ({ item }) => (
    <View style={styles.item}>
      <View style={{ width: "9%" }}>
        <Entypo name="location-pin" size={24} color="black" />
      </View>
      <View style={styles.addressContainter}>
        <TouchableOpacity style={styles.address}>
          <Text style={styles.addressText}>{item.street}</Text>
          <Text style={styles.addressText}>{item.zip}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addressIcon}>
          <MaterialIcons name="edit" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Address</Text>
      </View>
      <View style={styles.deliveryAddress}>
        <Text style={styles.addressTitle}>Delivery address</Text>
        <TouchableOpacity
          style={[styles.currentAddressButton]}
        >
          <View style={{ flex: 1 }}>
            <Text style={styles.currentAddressTitle}>Current Address</Text>
            <Text style={styles.currentAddressText}>
              Kurt-schumacher-straße 22, 67663 Kaiserslautern
            </Text>
          </View>
          <View style={styles.editAddress}>
            <MaterialIcons name="edit" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.currentAddressButton, { elevation: 10 }]}
        >
          <View style={{ flex: 1 }}>
            <Text style={styles.currentAddressTitle}>New Address?</Text>
          </View>
          <View style={styles.editAddress}>
            <Entypo name="chevron-right" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.recentAddressContainer}>
        <Text style={styles.recentAddressText}>Recent Addresses</Text>
      </View>

      <FlatList
        data={addresses}
        renderItem={renderAddress}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#91C66A",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 16,
  },
  header: {
    padding: 16,
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    color: "#000",
    fontWeight: "800",
  },
  deliveryAddress: {
    //padding: 16,
  },
  addressTitle: {
    fontSize: 18,
    color: "#000",
    fontWeight: "700",
    marginBottom: 40,
  },
  currentAddressTitle: {
    fontSize: 18,
    color: "#000",
    fontWeight: "900",
  },
  currentAddressText: {
    fontSize: 14,
    color: "#000",
    fontWeight: "500",
  },
  editAddress: {
    width: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  currentAddressButton: {
    backgroundColor: "white",
    paddingVertical: 26,
    paddingHorizontal: 30,
    borderRadius: 15,
    marginBottom: 16,
    flexDirection: "row",
  },

  recentAddressText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "700",
  },
  recentAddressContainer: {
    marginTop: 30,
    marginBottom: 20,
  },
  item: {
    paddingHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  addressText: {
    fontSize: 14,
    color: "black",
  },
  address: {
    paddingVertical: 5,
    width: "90%",
  },
  addressContainter: {
    flex: 1,
    flexDirection: "row",
    //backgroundColor: "red",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    alignItems: "center",
    paddingLeft: 10,
  },
});

export default AddressScreen;
