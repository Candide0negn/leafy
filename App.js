import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Asset } from 'expo-asset';

// Import optimized images
import foodImage from './assets/bud.png';
import electronicsImage from './assets/bong.png';
import groceriesImage from './assets/weed1.png';
import booksImage from './assets/new.png';

const { width } = Dimensions.get('window');

const storeData = [
  { id: '1', name: 'Store 1' },
  { id: '2', name: 'Store 2' },
  { id: '3', name: 'Store 3' },
  // Add more store data as needed
];

const categoryData = [
  { id: '1', name: 'Flower', image: foodImage },
  { id: '2', name: 'Accessories', image: electronicsImage },
  { id: '3', name: 'Pre-Rolls', image: groceriesImage },
  { id: '4', name: 'New Arrivals', image: booksImage },
  // Add more category data as needed
];

const newProductsData = [
  { id: '1', name: 'Product 1' },
  { id: '2', name: 'Product 2' },
  // Add more new product data as needed
];

function Home() {
  useEffect(() => {
    // Preload images
    (async () => {
      await Promise.all([
        Asset.loadAsync(foodImage),
        Asset.loadAsync(electronicsImage),
        Asset.loadAsync(groceriesImage),
        Asset.loadAsync(booksImage),
      ]);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.menuButton}>
            <MaterialIcons name="menu" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.locationText} numberOfLines={1}>
            Kurt-Schu...
          </Text>
          <View style={styles.headerIcons}>
            <Feather name="shopping-cart" size={24} color="#333" style={styles.icon} />
          </View>
        </View>
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
            <View style={styles.categoryContainer}>
              <View style={styles.categoryCard}>
                <Image source={item.image} style={styles.categoryImage} />
              </View>
              <Text style={styles.categoryText}>{item.name}</Text>
            </View>
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
          <Feather name="search" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(145, 199, 107, 0.25)',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    marginTop: 40,
    paddingRight: 28,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  menuButton: {
    marginRight: 8,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 16,
    color: '#333333',
    fontSize: 24,
  },
  locationText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    maxWidth: '70%',
  },
  contentContainer: {
    paddingBottom: 80,
  },
  storeCard: {
    minWidth: width * 0.77,
    minHeight: 195,
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 30,
    elevation: 1,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.099,
    shadowRadius: 0.5,
    backdropFilter: 'blur(60px)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
  },
  storeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c2c2c',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    paddingHorizontal: 16,
    color: '#333333',
  },
  categoryContainer: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  categoryCard: {
    minWidth: 140,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    marginLeft: 10,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 16,
    elevation: 4,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryImage: {
    width: 55,
    height: 45,
    resizeMode: 'contain',
  },
  categoryText: {
    marginTop: 8,
    color: '#333333',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontSize: 16,
  },
  newProductCard: {
    minWidth: 160,
    backgroundColor: '#333333',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 16,
    marginHorizontal: 8,
    elevation: 4,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  newProductText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 8,
    alignItems: 'center',
    width: '96%',
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    elevation: 6,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    marginBottom: 8,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navButton: {
    padding: 10,
  },
});

export default Home;