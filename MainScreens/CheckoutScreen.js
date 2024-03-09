import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, Switch, Image, Animated , Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ClubIcon from '../assets/ClubIcon.png';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const CheckoutScreen = () => {
  const navigation = useNavigation();
  const [isDelivery, setIsDelivery] = useState(true);
  const [isItemExpanded, setIsItemExpanded] = useState(false);
  const [isSwitchEnabled, setIsSwitchEnabled] = useState(false);
  const screenWidth = Dimensions.get('window').width;
  const swipeAnim = useRef(new Animated.Value(0)).current;

  const toggleDeliveryOption = () => {
    setIsDelivery(!isDelivery);
    swipeAnimation(!isDelivery);
  };

  const toggleItemSection = () => {
    setIsItemExpanded(!isItemExpanded);
  };

  const swipeAnimation = (toRight) => {
    Animated.timing(swipeAnim, {
      toValue: toRight ? screenWidth : -screenWidth,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      swipeAnim.setValue(0);
    });
  };

  const handlePickUpPress = () => {
    toggleDeliveryOption();
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: '#B6D7A8' }]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}
    >
      <Animated.View
        style={[
          styles.scrollViewContainer,
          {
            transform: [{ translateX: swipeAnim }],
          },
        ]}
      >
        <ScrollView>
          <View style={styles.header}>
            <Text style={[styles.headerText, { fontSize: 24, fontWeight: 'bold', marginTop: 40 }]}>Checkout</Text>
          </View>

          <View style={[styles.deliveryOptions, { backgroundColor: '#CBEEBC' }]}>
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
              onPress={handlePickUpPress}
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

          {isDelivery && (
           
           
           <View>
              <TouchableOpacity style={[styles.addressSection, { backgroundColor: '#CBEEBC' }]}>
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

              <TouchableOpacity style={[styles.timeSection, { backgroundColor: '#CBEEBC' }]}>
                <View style={styles.addressRow}>
                  <Icon name="access-time" size={24} color="#757575" />
                  <Text style={styles.sectionTitle}>Deliver Time</Text>
                  <Icon name="chevron-right" size={24} color="#757575" />
                </View>
              </TouchableOpacity>
            </View>
          )}

          {!isDelivery && (
            <View>
              <TouchableOpacity style={[styles.TempContainer, { backgroundColor: '#CBEEBC' }]}>
                <Text style={{ textAlign: 'center' }}>Google Maps</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.ClubAddressSection, { backgroundColor: '#CBEEBC' }]}>
                <View style={styles.addressRow}>
                  <FontAwesome5 name="store-alt" size={24} color="black" />
                  <Text style={styles.sectionTitle}>Social Club's Name</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="chevron-right" size={24} color="#757575" />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.paymentSection, { backgroundColor: '#CBEEBC' }]}>
                <View style={styles.addressRow}>
                  <Feather name="package" size={24} color="black" />
                  <Text style={styles.sectionTitle}>Pick Up Time</Text>
                  <Icon name="chevron-right" size={24} color="#757575" />
                </View>
              </TouchableOpacity>
            </View>
          )}

          <TouchableOpacity style={[styles.paymentSection, { backgroundColor: '#CBEEBC' }]}>
            <View style={styles.addressRow}>
              <Icon name="payment" size={24} color="#757575" />
              <Text style={styles.sectionTitle}>Payment Details</Text>
              <Icon name="chevron-right" size={24} color="#757575" />
            </View>
          </TouchableOpacity>
          <Text style={styles.ItemsectionTitle}>Your Items</Text>
      <TouchableOpacity style={[styles.itemSection, { backgroundColor: '#CBEEBC' }]} onPress={toggleItemSection}>
  <View style={styles.cardHeader}>
  <Image source={ClubIcon} style={styles.leftIcon}/>
    <Text style={styles.cardHeaderText}>Social Club's Name</Text>
  </View>
  <Text style={styles.ItemCount} >1 item</Text>
  <TouchableOpacity style={styles.iconPosition} onPress={toggleItemSection}>
    <Icon name={isItemExpanded ? 'expand-less' : 'expand-more'} size={24} color="#757575" />
  </TouchableOpacity>
  {isItemExpanded && (
    <>
      <Text>nothing yet</Text>
    </>
  )}
</TouchableOpacity>


      <TouchableOpacity style={[styles.discountSection, { backgroundColor: '#CBEEBC' }]}>
        <Icon name="add" size={24} color="#757575" />
        <Text style={styles.sectionTitle}>Add Discount Code</Text>
      </TouchableOpacity>

      <View style={[styles.subtotalsSection]}>
        <Text style={[styles.subtotalText, { textAlign: 'left' }]}>Subtotal</Text>
        <Text style={[styles.subtotalText, { textAlign: 'right' }]}>0.00$</Text>
      </View>
      <View style={[styles.DeliveryFeeSection]}>
        <Text style={[styles.subtotalText, { textAlign: 'left' }]}>Delivery Fee</Text>
        <Text style={[styles.subtotalText, { textAlign: 'right' }]}>0.00$</Text>
      </View>
      <View style={[styles.totalsSection]}>
        <Text style={[styles.totalText, { textAlign: 'right' }]}>Total</Text>
        <Text style={[styles.totalText, { textAlign: 'right' }]}>0.00$</Text>
      </View>

      <View style={styles.disclaimerRow}>
  <Text style={styles.disclaimerText}>
    Receive discount codes, and other updates
  </Text>
  <Switch
    value={isSwitchEnabled} // Boolean state to control the switch
    onValueChange={(newValue) => setIsSwitchEnabled(newValue)} // Handler to toggle the state
  />
</View>

      <View style={styles.dividerLine}></View>
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

      </ScrollView>
      </Animated.View>

      <View style={[styles.orderButtonContainer, { backgroundColor: 'transparent', position: 'absolute', bottom: 0, left: 0, right: 0 }]}>
        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.orderButtonText}>Order and Pay 0.00$</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  scrollViewContainer: {
    flexGrow: 1,
    padding: 16,
    paddingBottom: 80,
  },
  header: {
    backgroundColor: '#B6D7A8',
    padding: 16,
    marginBottom: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
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
    padding: 10,
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
  },
  DeliveryFeeSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
  subtotalText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  DeliveryFeeText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  totalText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#6FCF97",
    marginBottom: 10,
  },
  orderButtonContainer: {
    position : 'absolute',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2, // Adjusting shadow offset for more pronounced effect
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84, // Increased radius for a softer, more pronounced shadow
    elevation: 5,
    backgroundColor: 'transparent', // Set container background to transparent
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
  ItemsectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
    marginBottom: 10,
  },
  disclaimerText: {
    fontSize: 14,
    color: '#757575',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftIcon: {
    marginRight: 8, // Adds some space between the icon and the text
  },
  cardHeaderText: {
    flex: 1, // Allows the text to fill the space, pushing the icon to the right
  },
  ItemCount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft : 48,
  },
  iconPosition: {
    position: 'absolute',
    right: 10, // Adjust according to your layout
    top: 10, // Adjust according to your layout
  },
  dividerLine: {
    borderBottomColor: '#757575', // Choose color that fits your design
    borderBottomWidth: 1, // Adjust the thickness of the line
    marginVertical: 8, // Adjust spacing above and below the line
  },
  disclaimerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Aligns children to start and end of container
    alignItems: 'center', // Centers items vertically in the row
  },
  //Pick-Up Details section
  TempContainer: {
    backgroundColor: '#FFFFFF',
    padding: 68,
    marginBottom: 16,
    borderRadius: 4,
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ClubAddressSection: {
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
  
});

export default CheckoutScreen;