import React, { useState, useRef , useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, Switch, Image, Animated , Dimensions , Modal , FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ClubIcon from '../assets/ClubIcon.png';
import { useNavigation , useRoute} from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import ToggleButton from '../Components/ToggleButton';
import { DateTimePickerAndroid , DateTimePickerIOS } from '@react-native-community/datetimepicker';
import moment from 'moment';
import CartItem from '../Components/CartItem';
import QuantityBadge from '../Components/QuantityBadge';

const CheckoutScreen = () => {
  
  const navigation = useNavigation();
  const [isDelivery, setIsDelivery] = useState(true);
  const [isItemExpanded, setIsItemExpanded] = useState(false);
  const [isSwitchEnabled, setIsSwitchEnabled] = useState(false);
  const screenWidth = Dimensions.get('window').width;
  const swipeAnim = useRef(new Animated.Value(0)).current;
  const [showTimeModal, setShowTimeModal] = useState(false);
  const [modalType, setModalType] = useState(null); // 'pickup' or 'delivery'
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const route = useRoute();
  const { cartItems } = route.params || {};
  const { addressData } = route.params || {};
  const [totalQuantity, setTotalQuantity] = useState(0);

  const handleToggle = (value) => {
    setIsDelivery(value === 'delivery');
  };

  const options = [
    { label: 'Delivery', value: 'delivery' },
    { label: 'Pick-up', value: 'pickup' },
  ];

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
  const handleTimePress = (type) => {
    setShowTimeModal(true);
    setModalType(type);
  };

  const closeTimeModal = () => {
    setShowTimeModal(false);
    setModalType(null);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSlotChange = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };

  const availableTimeSlots = [
    '09:00 - 09:30', '09:30 - 10:00', '10:00 - 10:30', '10:30 - 11:00',
    '11:00 - 11:30', '11:30 - 12:00', '12:00 - 12:30', '12:30 - 13:00',
    '13:00 - 13:30', '13:30 - 14:00', '14:00 - 14:30', '14:30 - 15:00',
    '15:00 - 15:30', '15:30 - 16:00', '16:00 - 16:30', '16:30 - 17:00',
    '17:00 - 17:30', '17:30 - 18:00', '18:00 - 18:30', '18:30 - 19:00',
    '19:00 - 19:30', '19:30 - 20:00', '20:00 - 20:30', '20:30 - 21:00',
    '21:00 - 21:30', '21:30 - 22:00', '22:00 - 22:30', '22:30 - 23:00',
  ];
  const openDatePicker = async () => {
    try {
      const { action, year, month, day } = await DateTimePickerAndroid.open({
        value: selectedDate,
        mode: 'date',
        display: 'spinner',
      });
  
      if (action !== DateTimePicker.dismissedAction) {
        const newDate = new Date(year, month, day);
        setSelectedDate(newDate);
      }
    } catch (error) {
      console.warn('Cannot open date picker', error);
    }
  };
  
  const openIOSDatePicker = () => {
    DateTimePickerIOS.open({
      value: selectedDate,
      mode: 'date',
      display: 'spinner',
      onChange: (event, date) => {
        if (date !== undefined) {
          setSelectedDate(date);
        }
      },
    });
  };
  
  const handleDatePicker = () => {
    if (Platform.OS === 'android') {
      openDatePicker();
    } else {
      openIOSDatePicker();
    }
  };
  const getNextSevenDays = () => {
    const today = moment().startOf('day');
    const dates = [];
  
    for (let i = 0; i < 7; i++) {
      const date = today.clone().add(i, 'days');
      dates.push(date);
    }
  
    return dates;
  };
  //fees calculation
  const calculateSubtotal = (cartItems) => {
    let subtotal = 0;
    cartItems.forEach((item) => {
      subtotal += parseFloat(item.amount) * item.quantity;
    });
    return subtotal.toFixed(2);
  };
  useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setTotalQuantity(total);
  }, [cartItems]);
  const calculateTotal = (subtotal, deliveryFee) => {
    return (parseFloat(subtotal) + parseFloat(deliveryFee)).toFixed(2);
  };
  const getDeliveryFee = () => {
    // Replace this with the actual logic to calculate the delivery fee later
    const fixedDeliveryFee = '2.00';
    return fixedDeliveryFee;
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
          <ToggleButton options={options} onToggle={handleToggle} />

          {isDelivery && (
           
           
           <View>
              <TouchableOpacity style={[styles.addressSection,{ backgroundColor: '#CBEEBC' }]} onPress={() => navigation.navigate('Address')}>
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

              <TouchableOpacity
                style={[styles.timeSection, { backgroundColor: '#CBEEBC' }]}
                onPress={() => handleTimePress('delivery')}
              >
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
              <TouchableOpacity
                style={[styles.paymentSection, { backgroundColor: '#CBEEBC' }]}
                onPress={() => handleTimePress('pickup')}
              >
                <View style={styles.addressRow}>
                  <Feather name="package" size={24} color="black" />
                  <Text style={styles.sectionTitle}>Pick Up Time</Text>
                  <Icon name="chevron-right" size={24} color="#757575" />
                </View>
              </TouchableOpacity>
            </View>
          )}

          <TouchableOpacity style={[styles.paymentSection, { backgroundColor: '#CBEEBC' }]} onPress={() => navigation.navigate('Payment')}>
            <View style={styles.addressRow}>
              <Icon name="payment" size={24} color="#757575" />
              <Text style={styles.sectionTitle}>Payment Details</Text>
              <Icon name="chevron-right" size={24} color="#757575" />
            </View>
          </TouchableOpacity>
          <Text style={styles.ItemsectionTitle}>Your Items</Text>
          <TouchableOpacity style={[styles.itemSection, { backgroundColor: '#CBEEBC' }]} onPress={toggleItemSection}>
            <View style={styles.cardHeader}>
              <Image source={ClubIcon} style={styles.leftIcon} />
              <Text style={styles.cardHeaderText}>Social Club's Name</Text>
            </View>
            <View style={styles.TotalItemsContainer}>
              <QuantityBadge quantity={totalQuantity} />
              <Text >items</Text>
            </View>
              <TouchableOpacity
                style={styles.iconPosition}
                onPress={toggleItemSection}
              >
              <Icon name={isItemExpanded ? 'expand-less' : 'expand-more'} size={24} color="#757575" />
            </TouchableOpacity>
            {isItemExpanded && (
              <>
                {cartItems && cartItems.map((item) => (
                  <View key={item.id} style={styles.itemDetailsContainer}>
                  <View style={styles.itemDetails}>
                    <QuantityBadge quantity={item.quantity} />
                    <Text style={{ marginLeft: 8 }}>{item.name}</Text>
                  </View>
                  <Text>${(item.amount*item.quantity).toFixed(2)}</Text>
                </View>
                ))}
              </>
            )}
          </TouchableOpacity>


      <TouchableOpacity style={[styles.discountSection, { backgroundColor: '#CBEEBC' }]} onPress={() => navigation.navigate('Discount')}>
        <Ionicons name="pricetag" size={24} color="black" />
        <Text style={styles.sectionTitle}>Add Discount Code</Text>
        <Icon name="chevron-right" size={24} color="#757575" />
      </TouchableOpacity>

      <View style={[styles.subtotalsSection]}>
            <Text style={[styles.subtotalText, { textAlign: 'left' }]}>Subtotal</Text>
            <Text style={[styles.subtotalText, { textAlign: 'right' }]}>
              ${calculateSubtotal(cartItems)}
            </Text>
          </View>
      <View style={[styles.DeliveryFeeSection]}>
        <Text style={[styles.subtotalText, { textAlign: 'left' }]}>Delivery Fee</Text>
        <Text style={[styles.subtotalText, { textAlign: 'right' }]}>
          ${getDeliveryFee()}
        </Text>
      </View>
      <View style={[styles.totalsSection]}>
  <Text style={[styles.totalText, { textAlign: 'right' }]}>Total</Text>
  <Text style={[styles.totalText, { textAlign: 'right' }]}>
    ${calculateTotal(calculateSubtotal(cartItems), getDeliveryFee())}
  </Text>
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
          <Text style={styles.orderButtonText}>Order and Pay ${calculateTotal(calculateSubtotal(cartItems), getDeliveryFee())}</Text>
        </TouchableOpacity>
      </View>
      <Modal
        visible={showTimeModal}
        transparent
        animationType="fade"
        onRequestClose={closeTimeModal}
      >
        <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
  <Text style={styles.modalTitle}>
    {modalType === 'delivery' ? 'Deliver Time' : 'Pick Up Time'}
  </Text>
  <View style={styles.modalDateSection}>
    <FlatList
      data={getNextSevenDays()}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.dateCard}>
          <Text style={styles.dateText}>
            {item.format('ddd, MMM D')}
          </Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.format('YYYYMMDD')}
    />
  </View>
            

<View style={styles.modalTimeSlotSection}>
  <FlatList
    data={availableTimeSlots}
    numColumns={1} // Set to 1 for vertical scrolling
    renderItem={({ item }) => (
      <TouchableOpacity
        style={[
          styles.timeSlotButton,
          selectedTimeSlot === item && styles.selectedTimeSlot,
        ]}
        onPress={() => handleTimeSlotChange(item)}
      >
        <Text style={styles.timeSlotText}>{item}</Text>
      </TouchableOpacity>
    )}
    keyExtractor={(item) => item}
  />
</View>

            <View style={styles.modalButtonsRow}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={closeTimeModal}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.saveButton]}
                onPress={closeTimeModal}
              >
                <Text style={styles.modalButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modalDateSection: {
    marginBottom: 16,
  },
  modalTimeSlotSection: {
    height: 300, // Adjust this value to fit 6 time slots
    marginBottom: 16,
  },
  timeSlotButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    backgroundColor: '#CBEEBC',
    marginRight: 8,
  },
  selectedTimeSlot: {
    backgroundColor: '#6FCF97',
  },
  timeSlotText: {
    color: 'black',
    fontWeight: 'bold',
  },
  modalButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginHorizontal: 8,
  },
  cancelButton: {
    backgroundColor: '#CBEEBC',
  },
  saveButton: {
    backgroundColor: '#6FCF97',
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dateCard: {
    backgroundColor: '#CBEEBC',
    padding: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  dateText: {
    fontWeight: 'bold',
  },
  TotalItemsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 48,
  },
  itemDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 4,
  },
  itemDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CheckoutScreen;



