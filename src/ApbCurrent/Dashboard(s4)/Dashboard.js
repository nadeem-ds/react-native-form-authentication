import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Dashboard = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.heading}>Dashboard</Text>
      <View>
        <Text style={styles.pannumberheading}>Merchant PAN Number</Text>
        <Text style={styles.pannumber}>******431N</Text>
      </View>
      <View>
        <Text style={styles.aadharnumberheading}>Merchant Aadhaar Number</Text>
        <Text style={styles.aadharnumber}>********0068</Text>
      </View>
      <View>
        <Text style={styles.fingerscan}>
          Place Merchant Finger on the Biometric Device
        </Text>
        <Text style={styles.fingerscanicon}>Icon of Finger</Text>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 23,
    fontWeight: "bold",
    color: "red",
    marginVertical: 5,
  },
  pannumberheading: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
  },
  aadharnumberheading: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
  },
  pannumber: {
    fontSize: 20,
    fontWeight: "bold",
  },
  aadharnumber: {
    fontSize: 20,
    fontWeight: "bold",
  },
  fingerscan: {
    fontSize: 15,
    fontWeight: "bold",
    marginVertical: 30,
  },
  fingerscanicon: {
    fontSize: 15,
    fontWeight: "bold",
    marginVertical: 50,
    marginHorizontal: 100,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: "green",
    borderRadius: 10,
    color: "white",
  },
});
