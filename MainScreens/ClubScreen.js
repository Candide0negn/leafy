import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  StatusBar,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Logo from "../assets/logo.png";
const ClubScreen = () => {
  const [selected, setSelected] = useState("Delivery");

  const toggleSelection = (option) => {
    setSelected(option);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.title}>EcoCann</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>4.2</Text>
          <Text style={styles.reviewCount}>(32)</Text>
          <Text> • 1.5 km </Text>
        </View>

        <TouchableOpacity style={styles.joinButton}>
          <Text style={styles.joinButtonText}>Join</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.deliveryOptionContainer}>
        <TouchableOpacity
          style={[
            styles.deliveryOption,
            {
              backgroundColor: selected === "Delivery" ? "#ccc" : "transparent",
            },
          ]}
          onPress={() => toggleSelection("Delivery")}
        >
          <Text style={styles.deliveryOptionText}>Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.deliveryOption,
            {
              backgroundColor: selected === "Pick-up" ? "#ccc" : "transparent",
            },
          ]}
          onPress={() => toggleSelection("Pick-up")}
        >
          <Text style={styles.deliveryOptionText}>Pick-up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.deliveryInfoContainer}>
        <View
          style={[
            styles.deliveryInfo,
            {
              flexDirection: "row",
              alignItems: "flex-start",
              borderRightWidth: 1,
              borderRightColor: "#ccc",
            },
          ]}
        >
          <AntDesign
            name="tagso"
            size={16}
            color="black"
            style={{ marginTop: 4 }}
          />
          <View style={{ marginLeft: 7 }}>
            <Text style={[styles.infoText]}>0.00$ delivery fee</Text>
            <Text style={styles.tabText}>new customers</Text>
          </View>
        </View>
        <View style={styles.deliveryInfo}>
          <Text style={styles.infoText}>25 - 40 min</Text>
          <Text style={styles.infoText}>Delivery time</Text>
        </View>
      </View>
      <View style={styles.featuredItemsContainer}>
        {/* Add your featured items here */}
        <Text style={styles.featuredItemsText}>Featured items</Text>
        {/* Add placeholders or actual items */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ACD48E",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#DDF3CD",
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontWeight: "bold",
  },
  reviewCount: {
    color: "grey",
  },
  deliveryOptionContainer: {
    marginTop: 10,
    marginHorizontal: 16,
    flexDirection: "row",
    backgroundColor: "grey",
    borderRadius: 20,
    width: "50%",
    overflow: "hidden",
  },

  deliveryOption: {
    flex: 1,
    padding: 12,
    alignItems: "center",
  },
  deliveryOptionText: {
    fontSize: 14,
    fontWeight: "500",
  },

  joinButton: {
    backgroundColor: "#91C66A",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    // Add styles for your join button
  },
  joinButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  deliveryInfoContainer: {
    flexDirection: "row",
    marginVertical: 30,
    marginHorizontal: 20,
    backgroundColor: "#7AB160",
    borderRadius: 10,
    paddingVertical: 10,
    opacity: 0.7,
  },
  deliveryInfo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    // Add styles for your delivery info
  },
  infoText: {
    color: "black",
    // Add styles for text
  },
  featuredItemsContainer: {
    // Add styles for your featured items container
  },
  featuredItemsText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 20,
    // Add styles for your featured items title
  },
});

export default ClubScreen;
