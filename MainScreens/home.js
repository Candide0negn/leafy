import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { Feather, Ionicons, FontAwesome } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const storeData = [
  { id: '1', name: 'Store 1' },
  { id: '2', name: 'Store 2' },
  { id: '3', name: 'Store 3' },
  // Add more store data as needed
];

const categoryData = [
  { id: '1', name: 'food' },
  { id: '2', name: 'electronics' },
  { id: '3', name: 'groceries' },
  { id: '4', name: 'books' },
  // Add more category data as needed
];

const newProductsData = [
  { id: '1', name: 'Product 1' },
  { id: '2', name: 'Product 2' },
  // Add more new product data as needed
];

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.locationText} numberOfLines={1}>Kurt-Schu...</Text>
        <View style={styles.headerIcons}>
          <Feather name="search" size={24} color="#333" style={styles.icon} />
          <Feather name="shopping-cart" size={24} color="#333" style={styles.icon} />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <FlatList
          data={storeData}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.storeCard}>
              <Text style={styles.storeText}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
        <Text style={styles.sectionTitle}>Categories</Text>
        <FlatList
          data={categoryData}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.categoryCard}>
              <Text style={styles.categoryText}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
        <Text style={styles.sectionTitle}>New</Text>
        <FlatList
          data={newProductsData}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.newProductCard}>
              <Text style={styles.newProductText}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
      <View style={styles.bottomNavBar}>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="home-outline" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Feather name="message-square" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="notifications-outline" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <FontAwesome name="user-o" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 16,
  },
  locationText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    maxWidth: '70%', // Preventing overflow
  },
  contentContainer: {
    paddingVertical: 16,
  },
  storeCard: {
    minWidth: width * 0.75,
    minHeight: 170,
    marginHorizontal: 16, // Adjusted for proper spacing
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    elevation: 3,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowColor: '#000',
    shadowOffset: { height: 5, width: 0 }, // Shadow correctly cast below
  },
  storeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 12,
    paddingHorizontal: 16,
    color: '#333333',
  },
  categoryCard: {
    minWidth: 100,
    backgroundColor: '#FF5555',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 8,
    elevation: 3,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowColor: '#000',
    shadowOffset: { height: 5, width: 0 }, // Shadow correctly cast below
  },
  categoryText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  newProductCard: {
    minWidth: 120,
    backgroundColor: '#333333',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 8,
    elevation: 3,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowColor: '#000',
    shadowOffset: { height: 5, width: 0 }, // Shadow correctly cast below
  },
  newProductText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    elevation: 4,
  },
  navButton: {
    padding: 8,
  },
});
