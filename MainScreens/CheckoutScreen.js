import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CheckoutScreen = () => {
  const [isDelivery, setIsDelivery] = useState(true);

  const toggleDeliveryOption = () => {
    setIsDelivery(!isDelivery);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Checkout</Text>
      </View>

      <View style={styles.deliveryOptions}>
        <TouchableOpacity
          style={[
            styles.deliveryButton,
            isDelivery ? styles.activeButton : styles.inactiveButton,
          ]}
          onPress={toggleDeliveryOption}
        >
          <Text
            style={[
              styles.deliveryButtonText,
              isDelivery ? styles.activeButtonText : styles.inactiveButtonText,
            ]}
          >
            Delivery
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.deliveryButton,
            !isDelivery ? styles.activeButton : styles.inactiveButton,
          ]}
          onPress={toggleDeliveryOption}
        >
          <Text
            style={[
              styles.deliveryButtonText,
              !isDelivery ? styles.activeButtonText : styles.inactiveButtonText,
            ]}
          >
            Pick-up
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.addressSection}>
        <View style={styles.addressRow}>
          <Icon name="home" size={24} color="#757575" />
          <Text style={styles.sectionTitle}>Delivery address</Text>
          <Icon name="chevron-right" size={24} color="#757575" />
        </View>
        <Text>Name Name</Text>
        <Text>+1023456789</Text>
        <Text>Address Details, Address Details...</Text>
        <Text>12345 City, BIN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.timeSection}>
        <View style={styles.addressRow}>
          <Icon name="access-time" size={24} color="#757575" />
          <Text style={styles.sectionTitle}>Deliver Time</Text>
          <Icon name="chevron-right" size={24} color="#757575" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.paymentSection}>
        <View style={styles.addressRow}>
          <Icon name="payment" size={24} color="#757575" />
          <Text style={styles.sectionTitle}>Payment Details</Text>
          <Icon name="chevron-right" size={24} color="#757575" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemSection}>
        <View style={styles.addressRow}>
          <Text style={styles.sectionTitle}>Your Items</Text>
          <Icon name="expand-more" size={24} color="#757575" />
        </View>
        <Text>Social Club's Name</Text>
        <Text>1 item</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.discountSection}>
        <Icon name="add" size={24} color="#757575" />
        <Text style={styles.sectionTitle}>Add Discount Code</Text>
      </TouchableOpacity>

      <View style={styles.subtotalsSection}>
        <Text style={styles.subtotalText}>Subtotal</Text>
        <Text style={styles.subtotalText}>0.00$</Text>
        </View>
        <View style={styles.totalsSection}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalText}>0.00$</Text>
      </View>

      <Text style={styles.disclaimerText}>
        Promo discount codes, and store policies
      </Text>
      <Text style={styles.disclaimerText}>
        Disclaimer text. Disclaimer text. Disclaimer text. Disclaimer
        text. Disclaimer text. Disclaimer text. Disclaimer text.
        Disclaimer text. Disclaimer text. Disclaimer text. Disclaimer
        text. Disclaimer text. Disclaimer text. Disclaimer text.
        Disclaimer text. Disclaimer text. Disclaimer text. Disclaimer
        text. Disclaimer text. Disclaimer text. Disclaimer text.
        Disclaimer text. Disclaimer text. Disclaimer text. Disclaimer
        text. Disclaimer text. Disclaimer text.
      </Text>

      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderButtonText}>Order and Pay 0.00$</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F0F0F0',
    padding: 16,
  },
  header: {
    backgroundColor: '#B6D7A8',
    padding: 16,
    marginBottom: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  deliveryOptions: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
    borderRadius: 16,
    backgroundColor: '#D9D9D9',
    overflow: 'hidden',
  },
  deliveryButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  activeButton: {
    backgroundColor: '#6FCF97',
  },
  inactiveButton: {
    backgroundColor: '#D9D9D9',
  },
  activeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inactiveButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addressSection: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 16,
    borderRadius: 4,
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  timeSection: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 16,
    borderRadius: 4,
  },
  paymentSection: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 16,
    borderRadius: 4,
  },
  itemSection: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 16,
    borderRadius: 4,
  },
  discountSection: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 16,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtotalsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 16,
    borderRadius: 4,
  },
  totalsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 16,
    borderRadius: 4,
  },
  subtotalText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6FCF97',
  },
  orderButton: {
    backgroundColor: '#000000',
    padding: 16,
    borderRadius: 4,
  },
  orderButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  disclaimerText: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 8,
  },
});

export default CheckoutScreen;