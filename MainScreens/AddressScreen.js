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
import { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
} from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const AddressScreen = ({ navigation }) => {
  const [currentAddress, setCurrentAddress] = useState(null);
  const [recentAddresses, setRecentAddresses] = useState([]);
  /* const addresses = [
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
    {
      id: "5",
      street: "Kurt-schumacher-straße 8.5",
      zip: "67663 Kaiserslautern",
    },
  ]; */
  const handleAddressPress = (address) => {
    setCurrentAddress(address);
  };
  const renderAddress = ({ item }) => (
    <TouchableOpacity onPress={() => handleAddressPress(item)}>
      <View style={styles.item}>
        <View style={{ width: "9%" }}>
          <Entypo name="location-pin" size={24} color="black" />
        </View>
        <View style={styles.addressContainter}>
          <View style={styles.address}>
            <Text style={styles.addressText}>{item.street}</Text>
            <Text style={styles.addressText}>{item.zip}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
  const handleNewAddressPressed = () => {
    navigation.navigate("AddressForm");
  };
  useEffect(() => {
    const fetchCurrentAddress = async () => {
      try {
        const addressesCollection = collection(db, "addresses");
        const q = query(
          addressesCollection,
          orderBy("createdAt", "desc"),
          limit(1)
        );
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const addresses = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          if (addresses.length > 0) {
            setCurrentAddress(addresses[0]);
          }
        });
        return unsubscribe;
      } catch (error) {
        console.error("Error fetching current address:", error);
      }
    };

    const fetchRecentAddresses = async () => {
      try {
        const addressesCollection = collection(db, "addresses");
        const q = query(
          addressesCollection,
          orderBy("createdAt", "desc"),
          limit(5)
        );
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const addresses = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setRecentAddresses(addresses);
        });
        return unsubscribe;
      } catch (error) {
        console.error("Error fetching recent addresses:", error);
      }
    };

    fetchCurrentAddress();
    fetchRecentAddresses();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.deliveryAddress}>
        <Text style={styles.addressTitle}>Delivery address</Text>
        <View style={[styles.currentAddressButton, { opacity: 0.65 }]}>
          <View style={{ flex: 1 }}>
            <Text style={styles.currentAddressTitle}>Current Address</Text>
            {currentAddress && (
              <Text style={styles.currentAddressText}>
                {currentAddress.street}, {currentAddress.poBox},{" "}
                {currentAddress.city}
              </Text>
            )}
          </View>
        </View>
        <TouchableOpacity
          style={[styles.currentAddressButton, { elevation: 10 }]}
          onPress={handleNewAddressPressed}
        >
          <View style={{ flex: 1 }}>
            <Text style={styles.currentAddressTitle}>New Address</Text>
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
        data={recentAddresses}
        renderItem={renderAddress}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ACD48E",
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
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    alignItems: "center",
    paddingLeft: 10,
  },
});

export default AddressScreen;
