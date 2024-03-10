import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const PickUpDetails = () => {
  return (
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
  );
};

const styles = StyleSheet.create({
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

export default PickUpDetails;