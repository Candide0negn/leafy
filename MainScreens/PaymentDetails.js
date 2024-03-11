import { View, Text, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, Switch, Image, Animated , Dimensions , Modal , FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const PaymentDetails = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: '#B6D7A8' }]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}
    >
      <Animated.View
        style={[
          styles.scrollViewContainer,
          
        ]}
      >
        <ScrollView>
         

        
           <View>
              <TouchableOpacity style={[styles.paymentSection, { backgroundColor: '#CBEEBC' }]}>
            <View style={[styles.addressRow, { flexDirection: 'row', justifyContent: 'space-between' }]}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="payment" size={24} color="#757575" />
                <Text style={styles.sectionTitle}>Cash</Text>
              </View>
              <Icon name="chevron-right" size={24} color="#757575" />
            </View>
          </TouchableOpacity>

            </View>
            <View>
              <TouchableOpacity style={[styles.paymentSection, { backgroundColor: '#CBEEBC' }]}>
            <View style={[styles.addressRow, { flexDirection: 'row', justifyContent: 'space-between' }]}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="payment" size={24} color="#757575" />
                <Text style={styles.sectionTitle}>Paypal</Text>
              </View>
              <Icon name="chevron-right" size={24} color="#757575" />
            </View>
          </TouchableOpacity>

            </View>
       

          <TouchableOpacity style={[styles.paymentSection, { backgroundColor: '#CBEEBC' }]}>
            <View style={styles.addressRow}>
              <Icon name="payment" size={24} color="#757575" />
              <Text style={styles.sectionTitle}>Credit card</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.paymentSection, { backgroundColor: '#CBEEBC' }]}>
            <View style={styles.addressRow}>
              <Icon name="payment" size={24} color="#757575" />
              <Text style={styles.sectionTitle}>Klarna</Text>
            </View>
          </TouchableOpacity>
          <View>
              <TouchableOpacity style={[styles.paymentSection, { backgroundColor: '#CBEEBC' }]}>
            <View style={[styles.addressRow, { flexDirection: 'row', justifyContent: 'space-between' }]}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="payment" size={24} color="#757575" />
                <Text style={styles.sectionTitle}>Voucher</Text>
              </View>
              <Icon name="chevron-right" size={24} color="#757575" />
            </View>
          </TouchableOpacity>

            </View>
            <TouchableOpacity style={[styles.paymentSection, { backgroundColor: '#CBEEBC' }]}>
            <View style={styles.addressRow}>
              <Icon name="payment" size={24} color="#757575" />
              <Text style={styles.sectionTitle}>Google Pay</Text>
            </View>
          </TouchableOpacity>
      </ScrollView>
      </Animated.View>
      
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
});

export default PaymentDetails;



