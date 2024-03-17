import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome back, Claude</Text>
      <View style={styles.background}>
        <View style={styles.card}>
          <View style={styles.cardHandle} />
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
    backgroundColor: '#DDEAD4',
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  background: {
    flex: 1,
    backgroundColor: '#DDEAD4',
  },
  card: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 30,
    marginTop: '10%',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    padding: 20,
  },
  cardHandle: {
    position: 'absolute',
    top: 6,
    left: '50%',
    marginLeft: -45,
    width: 90,
    height: 4,
    backgroundColor: '#d9d9d9',
    borderRadius: 2,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingLeft: 10, // added for alignment
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
