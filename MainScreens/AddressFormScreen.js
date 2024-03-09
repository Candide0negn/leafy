import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";

const AddressFormScreen = () => {
  const [form, setForm] = useState({
    fullName: "",
    street: "",
    city: "",
    poBox: "",
    floor: "",
    phone: "",
  });

  const handleSave = () => {
    // Handle the save action
  };

  return (
    <View style={styles.container}>
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
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#91C66A",
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
    marginBottom: 22,
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
    marginBottom: 22,
  },
  saveButton: {
    backgroundColor: "black",
    borderRadius: 50,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 50,
  },
  saveButtonText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "900",
  },
});

export default AddressFormScreen;
