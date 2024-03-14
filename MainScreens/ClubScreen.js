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
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Logo from "../assets/logo.png";
import htc from "../assets/htc.jpeg";
import ttp from "../assets/ttp.jpeg";
import llp from "../assets/llp.jpeg";
const ClubScreen = () => {
  const [selected, setSelected] = useState("Delivery");

  const toggleSelection = (option) => {
    setSelected(option);
  };
  const featuredItems = [
    { id: "1", title: "Jealousy THC Flower", image: htc },
    { id: "2", title: "TTP", image: llp },
    { id: "3", title: "Mogadishu", image: ttp },
    // ... add more items
  ];
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.title}>EcoCann</Text>
        <View style={styles.ratingContainer}>
          <View style={styles.rating}>
            <Text style={styles.ratingText}>4.2 </Text>
            <AntDesign name="star" size={12} color="black" />
          </View>
          <Text style={styles.reviewCount}> (32) • 1.5 km</Text>
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
            <Text style={styles.infoText}>0.00$ delivery fee</Text>
            <Text style={styles.tabText}>new customers</Text>
          </View>
        </View>
        <View style={styles.deliveryInfo}>
          <Text style={styles.infoText}>25 - 40 min</Text>
          <Text style={styles.infoText}>Delivery time</Text>
        </View>
      </View>
      <Text style={styles.featuredItemsText}>Featured items</Text>
      <View style={styles.featuredItemsContainer}>
        <View style={styles.itemsRow}>
          {featuredItems.map((item, index) => (
            <View
              key={item.id}
              style={[
                styles.featuredItemCard,
                { marginRight: index % 2 === 0 ? 10 : 0 }, // Add right margin to every first item of a pair
              ]}
            >
              <Image source={item.image} style={styles.featuredItemImage} />
              <View style={styles.featuredItemsTitleContainer}>
                <Text style={styles.featuredItemTitle}>{item.title}</Text>
              </View>
              <View style={styles.itemShadow} />
            </View>
          ))}
        </View>
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
    marginBottom: 10,
  },
  logo: {
    width: 120,
    height: 120,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  rating: {
    flexDirection: "row",
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
    paddingHorizontal: 40,
    marginTop: 20,
    elevation: 10,
  },
  joinButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
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
    paddingHorizontal: 20,
    marginVertical: 30,
  },
  featuredItemsText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemsRow: {
    flexDirection: "row", // Align items in a row
    justifyContent: "space-between", // Space between items
    flexWrap: "wrap", // Allow items to wrap to the next line
  },
  featuredItemCard: {
    height: 200, // or any height you want
    marginBottom: 15,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "white",
    width: "45%",
    elevation:5
  },
  featuredItemImage: {
    width: "100%",
    height: "100%",
  },
  featuredItemsTitleContainer: {
    position: "absolute",
    bottom: 20,
    left:0,
    right:20,
    zIndex: 2,
    
  },
  featuredItemTitle: {
    marginLeft: 20,
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  itemShadow: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    height: "100%",
    top: 0, // Ensure it covers the top part of the image
    left: 0, // Align to the left
    right: 0, // Align to the right
    bottom: 0,
    zIndex: 1,
  },
});

export default ClubScreen;
