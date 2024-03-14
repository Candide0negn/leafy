import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CartItem = ({ name, image, amount, quantity }) => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.imagePlaceholder}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{name}</Text>
        <Text style={styles.itemPrice}>${amount}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <Text style={styles.quantityText}>{quantity}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: 60,
    height: 60,
    backgroundColor: '#C4C4C4',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  itemDetails: {
    marginLeft: 10,
    flex: 1,
    justifyContent: 'flex-end',
  },
  itemPrice: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemName: {
    color: '#555',
    fontSize: 14,
    marginBottom: 10,
  },
  quantityContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  quantityText: {
    fontSize: 16,
  },
});

export default CartItem;