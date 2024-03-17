import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  Platform,
  StatusBar,
  Animated,
  Alert,
  SafeAreaView,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import htc from "../assets/htc.jpeg";
import ttp from "../assets/ttp.jpeg";
import llp from "../assets/llp.jpeg";
import * as Animatable from "react-native-animatable";
import { useOrder } from "../context/OrderContext";
const CartItem = ({
  id,
  name,
  image,
  amount,
  quantity,
  increaseQuantity,
  decreaseQuantity,
}) => {
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const itemAmount = parseFloat(amount); // Convert amount to a float

  // Calculate the total amount for the item
  const totalAmount = itemAmount * itemQuantity;

  const handleIncreaseQuantity = () => {
    increaseQuantity(id);
    setItemQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (itemQuantity > 1) {
      decreaseQuantity(id);
      setItemQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <Animatable.View animation="fadeInRightBig">
      <View style={styles.cartItem}>
        <View style={styles.imagePlaceholder}>
          <Image source={image} style={styles.image} />
        </View>
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>{name}</Text>
          <Text style={styles.itemPrice}>${totalAmount.toFixed(2)}</Text>
        </View>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={handleDecreaseQuantity}
            style={styles.changeQuantityButton}
          >
            <AntDesign name="minus" size={18} color="black" />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{itemQuantity}g</Text>
          <TouchableOpacity
            onPress={handleIncreaseQuantity}
            style={styles.changeQuantityButton}
          >
            <AntDesign name="plus" size={18} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </Animatable.View>
  );
};

const CartScreen = ({ navigation }) => {
  const { orderDetails } = useOrder();
  const [subtotal, setSubTotal] = useState(0);
  const [cartItems, setCartItems] = useState([
    { id: "1", name: "Item name", image: htc, amount: "10.00", quantity: 1 },
    { id: "2", name: "Item name", image: ttp, amount: "10.00", quantity: 1 },
  ]);

  const calculateSubtotal = () => {
    let subtotal = 0;
    cartItems.forEach((item) => {
      subtotal += parseFloat(item.amount) * item.quantity;
    });
    return subtotal.toFixed(2);
  };

  const increaseQuantity = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const renderItem = ({ item }) => (
    <CartItem
      id={item.id}
      name={item.name}
      image={item.image}
      amount={item.amount}
      quantity={item.quantity}
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListFooterComponent={() => (
          <View style={styles.subtotalRow}>
            <Text style={styles.subtotalText}>Subtotal:</Text>
            <Text style={styles.subtotalAmount}>${calculateSubtotal()}</Text>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={() => navigation.navigate("Checkout", { cartItems })}
      >
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DFF0D8",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 20,
  },
  cartItem: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    alignItems: "center",
  },
  imagePlaceholder: {
    width: 60,
    height: 60,
    backgroundColor: "#C4C4C4",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  itemDetails: {
    marginLeft: 10,
    flex: 1,
    justifyContent: "flex-end",
  },
  itemPrice: {
    fontWeight: "bold",
    fontSize: 16,
  },
  itemName: {
    color: "#555",
    fontSize: 14,
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  changeQuantityButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8E8E8",
    borderRadius: 35 / 2,
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  checkoutButton: {
    backgroundColor: "#333",
    borderRadius: 30,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute", // Make checkout button stick to the bottom
    bottom: 20, // Distance from the bottom
    left: 20,
    right: 20,
  },
  checkoutButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  subtotalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  subtotalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtotalAmount: {
    fontSize: 18,
    fontWeight: "bold",
  },
  rightAction: {
    backgroundColor: "#DFF0D8",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 20,
  },
});

export default CartScreen;
