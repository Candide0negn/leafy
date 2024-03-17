import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Animated, Dimensions, Text, Image } from 'react-native';
import { MaterialIcons, Ionicons, FontAwesome, EvilIcons, Entypo } from '@expo/vector-icons';
import smile from '../assets/smile.png';

const { width, height } = Dimensions.get('window');

const Drawer = ({ isOpen, onClose }) => {
  const [animatedValue] = useState(new Animated.Value(isOpen ? 0 : -width * 0.8));

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isOpen ? 0 : -width * 0.8,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isOpen, animatedValue]);

  const headerHeight = height * 0.12;
  const buttonHeight = height * 0.07;
  const menuHeight = height * 0.55;
  const bottomHeight = height * 0.15;

  return (
    <Animated.View
      style={[
        styles.drawerContainer,
        {
          transform: [{ translateX: animatedValue }],
          width: width * 0.8,
        },
      ]}
    >
      <View style={[styles.headerContainer, { height: headerHeight }]}>
        <Image source={smile} style={styles.headerImage} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Hi there!</Text>
          <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.headerButtonText}>View Info</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.buttonsContainer, { height: buttonHeight }]}>
        <TouchableOpacity style={[styles.button, { flex: 1, marginRight: 8 }]}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.createAccountButton, { flex: 1, marginLeft: 8 }]}>
          <Text style={styles.buttonText}>Create account</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.menuContainer, { height: menuHeight }]}>
        <View style={styles.menuRow}>
          <Ionicons name="mail-outline" size={24} color="#333" />
          <Text style={styles.menuText}>Inbox</Text>
        </View>
        <View style={styles.menuRow}>
          <FontAwesome name="shopping-bag" size={24} color="#333" />
          <Text style={styles.menuText}>Orders</Text>
        </View>
        <View style={styles.menuRow}>
          <EvilIcons name="heart" size={24} color="#333" />
          <Text style={styles.menuText}>Favourites</Text>
        </View>
        <View style={styles.menuRow}>
          <Ionicons name="stats-chart-outline" size={24} color="#333" />
          <Text style={styles.menuText}>Punkte</Text>
        </View>
        <View style={styles.menuRow}>
          <Ionicons name="gift-outline" size={24} color="#333" />
          <Text style={styles.menuText}>Gift cards</Text>
        </View>
      </View>

      <View style={[styles.bottomContainer, { height: bottomHeight }]}>
        <View style={styles.bottomRow}>
          <Entypo name="help-with-circle" size={24} color="#333" />
          <Text style={styles.menuText}>Need help?</Text>
        </View>
        <View style={styles.bottomRow}>
          <Entypo name="emoji-happy" size={24} color="#333" />
          <Text style={styles.menuText}>How are we doing?</Text>
        </View>
        <View style={styles.bottomRow}>
          <Entypo name="location-pin" size={24} color="#333" />
          <Text style={styles.menuText}>Country</Text>
          <Text style={styles.countryText}>Germany</Text>
        </View>
        <View style={styles.bottomRow}>
          <Ionicons name="language-outline" size={24} color="#333" />
          <Text style={styles.menuText}>Language</Text>
          <Text style={styles.countryText}>English</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <MaterialIcons name="close" size={24} color="#333" />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    backgroundColor: 'white',
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 2 },
    zIndex: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f7f7f7',
  },
  headerImage: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  headerTextContainer: {
    flex: 1,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  headerButton: {
    backgroundColor: '#e2e2e2',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  headerButtonText: {
    fontSize: 12,
    color: '#333',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f7f7f7',
  },
  button: {
    backgroundColor: '#fff',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#dcdcdc',
  },
  createAccountButton: {
    backgroundColor: '#1a1a1a',
  },
  buttonText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  menuContainer: {
    padding: 16,
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  menuText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  bottomContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  countryText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 20,
  },
});

export default Drawer;
