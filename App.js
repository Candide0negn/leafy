import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Welcome back, Claude</Text>
      </View>
      <View style={styles.drawerContainer}>
        <View style={styles.drawer}>
          <TouchableOpacity style={styles.option}>
            <Icon name="help-outline" size={24} color="#000" />
            <Text style={styles.optionText}>Need help?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Icon name="question-answer" size={24} color="#000" />
            <Text style={styles.optionText}>FAQ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Icon name="headset-mic" size={24} color="#000" />
            <Text style={styles.optionText}>Contact Customer Service</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Icon name="feedback" size={24} color="#000" />
            <Text style={styles.optionText}>Give Feedback</Text>
          </TouchableOpacity>
          <Text style={styles.sectionHeader}>Legal</Text>
          <TouchableOpacity style={styles.option}>
            <Icon name="security" size={24} color="#000" />
            <Text style={styles.optionText}>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Icon name="description" size={24} color="#000" />
            <Text style={styles.optionText}>Terms & Conditions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Icon name="lock" size={24} color="#000" />
            <Text style={styles.optionText}>Privacy settings</Text>
          </TouchableOpacity>
          <Text style={styles.sectionHeader}>Account Management</Text>
          <TouchableOpacity style={styles.option}>
            <Icon name="delete" size={24} color="#000" />
            <Text style={styles.optionText}>Delete my account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.logoutButtonText}>Log out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  drawerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 20,
    marginVertical: 30,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  optionText: {
    marginLeft: 12,
    fontSize: 16,
  },
  sectionHeader: {
    marginTop: 16,
    marginBottom: 8,
    fontWeight: 'bold',
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 24,
    alignSelf: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SettingsScreen;