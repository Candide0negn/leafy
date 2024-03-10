import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons"; // Make sure you have @expo/vector-icons installed
import ttp from "../assets/ttp.jpeg";
const DetailsScreen = () => {
  const [liked, setLiked] = useState(false);
  const [quantity, setQuantity] = useState(1); // State for the quantity, if needed
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.header}>
          <Entypo name="chevron-left" size={30} color="black" />
          <Text style={styles.headerTitle}>Details</Text>
          <AntDesign name="shoppingcart" size={24} color="black" />
        </View>

        <View style={styles.imageContainer}>
          <Image source={ttp} style={styles.productImage} />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.productTitle}>Jealousy THCa Flower</Text>
          <TouchableOpacity onPress={() => setLiked(!liked)}>
            {liked ? (
              <AntDesign name="heart" size={24} color="red" />
            ) : (
              <AntDesign name="hearto" size={24} color="black" />
            )}
          </TouchableOpacity>
        </View>
        <Text style={styles.quantityTitle}>Quantity</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={decreaseQuantity}
            style={styles.quantityButton}
          >
            <AntDesign name="minus" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity
            onPress={increaseQuantity}
            style={styles.quantityButton}
          >
            <AntDesign name="plus" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.quantityTitle}>Description</Text>
        <Text style={styles.description}>
          description on grass description on grass description on grass
          description on grass...
        </Text>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.price}>€100.00</Text>

        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartButtonText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DFF0D8", // Background color for the entire screen
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 20,
    flexDirection: "column",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  headerTitle: {
    fontSize: 24,
    color: "#000",
    fontWeight: "800",
  },
  imageContainer: {
    // Container for the image
    height: 200,
    borderRadius: 16,
    backgroundColor: "#C4D4AF",
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  productImage: {
    // Styles for the product image
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  quantityTitle: {
    fontSize: 14,
    fontWeight: "700",
  },
  quantityContainer: {
    flexDirection: "row",
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  quantityButton: {
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: "#ccc", // Change color as per your design
    borderRadius: 20, // Rounded corners for the button
    // Add more styling to match your UI design
  },
  quantityText: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10,
    // Add more styling to match your UI design
  },
  selectedQuantityButton: {
    backgroundColor: "grey",
  },
  description: {
    marginTop: 16,
    color: "grey",
  },
  price: {
    marginTop: 16,
    fontSize: 24,
    fontWeight: "bold",
  },
  addToCartButton: {
    backgroundColor: "#7AB160",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 18,
    alignItems: "center",
    marginTop: 16,
  },
  addToCartButtonText: {
    color: "black",
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 36,
  },
});

export default DetailsScreen;
