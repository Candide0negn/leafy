import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { db } from "../firebase"; // Import the Firestore instance
import {
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
} from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useNavigation } from "@react-navigation/native"; // Add useNavigation import

const AddressFormScreen = () => {
  const [form, setForm] = useState({
    fullName: "",
    street: "",
    city: "",
    poBox: "",
    floor: "",
    phone: "",
  });

  const handleSave = async () => {
    try {
      const addressesCollection = collection(db, "addresses");
      await addDoc(addressesCollection, {
        fullName: form.fullName,
        street: form.street,
        city: form.city,
        poBox: form.poBox,
        floor: form.floor,
        phone: form.phone,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });

      navigation.navigate("Address");
    } catch (error) {
      console.error("Error saving address:", error);
      // Show an error message
    }
  };
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <ScrollView
          keyboardShouldPersistTaps="always"
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.formTitle}>Fill in the form</Text>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              value={form.fullName}
              onChangeText={(text) => setForm({ ...form, fullName: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Street and house number"
              value={form.street}
              onChangeText={(text) => setForm({ ...form, street: text })}
            />
            <View style={styles.row}>
              <TextInput
                style={[styles.inputHalf]}
                placeholder="City"
                value={form.city}
                onChangeText={(text) => setForm({ ...form, city: text })}
              />
              <TextInput
                style={[styles.inputHalf]}
                placeholder="PO Box"
                value={form.poBox}
                onChangeText={(text) => setForm({ ...form, poBox: text })}
              />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Floor number (optional)"
              value={form.floor}
              onChangeText={(text) => setForm({ ...form, floor: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone number"
              value={form.phone}
              onChangeText={(text) => setForm({ ...form, phone: text })}
              keyboardType="phone-pad"
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ACD48E",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 20,
  },
  form: {
    flex: 1,
  },
  formTitle: {
    fontSize: 18,
    color: "#000",
    marginBottom: 45,
    fontWeight: "700",
    opacity: 0.7,
  },
  input: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 4,
    marginBottom: 32,
  },
  inputHalf: {
    width: "45%",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 4,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  saveButton: {
    backgroundColor: "black",
    borderRadius: 50,
    paddingVertical: 16,
    alignItems: "center",
    // marginTop:100
  },
  saveButtonText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "900",
  },
});

export default AddressFormScreen;
