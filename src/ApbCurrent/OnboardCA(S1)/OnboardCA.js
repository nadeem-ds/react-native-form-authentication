import { StyleSheet, Text, View } from "react-native";
import React from "react";

const OnboardCA = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.heading}>Welcome to Airtel Payment Bank</Text>
      <Text style={styles.text}>Onboard CA</Text>
    </View>
  );
};

export default OnboardCA;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    color: "red",
    marginVertical: 5,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    backgroundColor: "red",
    padding: 10,
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 5,
    color: "white",
    marginVertical: 5,
  },
});
