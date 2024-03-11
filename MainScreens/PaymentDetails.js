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
    
      
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  paymentSection: {
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
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default PaymentDetails;



