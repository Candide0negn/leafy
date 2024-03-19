import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const WalkthroughScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Get Started with Leafy</Text>
      <View style={{ justifyContent: "center", flex: 1 }}>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.continueButtonText}>Create Account</Text>
        </TouchableOpacity>
        <Text style={styles.or}>Or</Text>
        <TouchableOpacity
          style={[styles.continueButton, { flexDirection: "row" }]}
          onPress={() => navigation.navigate("login")}
        >
          <Image
            source={require("../assets/google-icon.png")}
            style={styles.imageStyle}
          />
          <Text style={styles.continueButtonText}>Continue with Google</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.separator} />
      <View style={styles.accountContainer}>
        <Text style={{ color: "#848484" }}>Already have an account?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("login")}
          style={{ width: "30%", paddingVertical: 20, alignItems: "flex-end" }}
        >
          <Text style={{ color: "#00487C" }}> Log in </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#91C66A",
    paddingHorizontal: 30,
  },
  headingText: {
    fontSize: 32,
    fontWeight: "900",
    alignSelf: "center",
  },
  continueButton: {
    backgroundColor: "white",
    width: "90%",
    height: "9%",
    alignItems: "center",
    borderRadius: 30,
    justifyContent: "center",
    alignSelf: "center",
  },
  continueButtonText: {
    fontSize: 18,
    fontWeight: "500",
  },
  or: {
    alignSelf: "center",
    marginVertical: 10,
    fontSize: 16,
    fontWeight: "500",
    color: "grey",
  },
  imageStyle: {
    width: 30,
    height: 30,
    resizeMode: "cover",
    marginRight: 10,
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
});

export default WalkthroughScreen;
