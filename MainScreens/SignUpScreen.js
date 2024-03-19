import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  Platform,
} from "react-native";

const SignUpScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: "center", flex: 1 }}>
        <ScrollView style={{ marginVertical: 30 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ width: "45%" }}>
              <Text
                style={{ fontWeight: "500", marginBottom: 10, fontSize: 15 }}
              >
                {"  "}
                First Name
              </Text>
              <TextInput
                onChangeText={(text) => {
                  setFirstName(text);
                }}
                keyboardType="email-address"
                style={[styles.input]}
                value={firstName}
                cursorColor="grey"
              />
            </View>
            <View style={{ width: "45%" }}>
              <Text
                style={{ fontWeight: "500", marginBottom: 10, fontSize: 15 }}
              >
                {"  "}
                Last Name
              </Text>
              <TextInput
                onChangeText={(text) => {
                  setLastName(text);
                }}
                style={[styles.input]}
                value={lastName}
                cursorColor="grey"
              />
            </View>
          </View>
          <View>
            <Text style={{ fontWeight: "500", marginBottom: 10, fontSize: 15 }}>
              {" "}
              Email
            </Text>
            <TextInput
              onChangeText={(text) => {
                setEmail(text);
              }}
              style={[styles.input]}
              value={email}
              cursorColor="grey"
            />
          </View>
          <View>
            <Text style={{ fontWeight: "500", marginBottom: 10, fontSize: 15 }}>
              {" "}
              Password
            </Text>
            <TextInput
              onChangeText={(text) => {
                setPassword(text);
              }}
              style={[styles.input]}
              value={password}
              cursorColor="grey"
            />
          </View>
          <TouchableOpacity
            style={styles.continue}
            onPress={() => navigation.navigate("Club")}
          >
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={[styles.separator]} />
      <View style={[styles.accountContainer]}>
        <Text style={{ color: "#848484" }}>Already have an account?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("login")}
          style={{
            width: "30%",
            paddingVertical: 20,
            alignItems: "flex-end",
          }}
        >
          <Text style={{ color: "#00487C" }}> Log in </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#91C66A",
    paddingHorizontal: 30,
  },

  separator: {
    borderWidth: 1,
    borderColor: "grey",
    opacity: 0.5,
  },
  accountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: "white",
  },
  continue: {
    paddingVertical: 20,
    paddingHorizontal: 19,
    backgroundColor: "black",
    alignSelf: "center",
    width: "60%",
    borderRadius: 20,
    alignItems: "center",
    marginTop: 20,
  },
  continueText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default SignUpScreen;
