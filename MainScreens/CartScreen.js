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
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import htc from "../assets/htc.jpeg";
import ttp from "../assets/ttp.jpeg";
import llp from "../assets/llp.jpeg";
import { TextInput, RectButton } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { EvilIcons } from '@expo/vector-icons';

const CartItem = ({
  id,
  name,
  image,
  amount,
  quantity,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
}) => {
  const [itemQuantity, setItemQuantity] = useState(quantity);

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

  const renderRightActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });

    return (
      <RectButton onPress={() => deleteItem(id)}>
        <Animated.View
          style={[styles.rightAction, { transform: [{ scale }] }]}
        >
          <EvilIcons name="trash" size={40} color="black" />
        </Animated.View>
      </RectButton>
    );
  };

  return (
    <Animatable.View animation="fadeInRightBig">
      <Swipeable renderRightActions={renderRightActions}>
        <View style={styles.cartItem}>
          <View style={styles.imagePlaceholder}>
            <Image source={image} style={styles.image} />
          </View>
          <View style={styles.itemDetails}>
            <Text style={styles.itemName}>{name}</Text>
            <Text style={styles.itemPrice}>${amount}</Text>
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
      </Swipeable>
    </Animatable.View>
  );
};

const CartScreen = () => {
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

  const deleteItem = (itemId) => {
    Alert.alert(
      "Delete Item",
      "Are you sure you want to delete this item?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            setCartItems((prevCartItems) =>
              prevCartItems.filter((item) => item.id !== itemId)
            );
          },
          style: "destructive",
        },
      ]
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
      deleteItem={deleteItem}
    />
  );
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
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
    </View>
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
