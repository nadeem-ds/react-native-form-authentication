import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";

const BasisDetail = () => {
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.heading}>Basis Details</Text>
        <View style={styles.container}>
          <Text style={styles.caddressheading}>
            <Text>Full Name</Text> <Text>Md Nadeem Anwar</Text>
          </Text>
          <Text style={styles.caddressheading}>
            <Text>Date of birth</Text> <Text>20-10-1999</Text>
          </Text>
          <Text style={styles.caddressheading}>
            <Text>Full Address</Text> <Text>Basahiya shaikh</Text>
          </Text>
          <Text style={styles.caddressheading}>
            <Text>City</Text> <Text>Shoehar</Text>
          </Text>
          <Text style={styles.caddressheading}>
            <Text>Pin Code</Text> <Text>843334</Text>
          </Text>
          <Text style={styles.caddressheading}>
            <Text>Care of</Text>
            <Text>Md Faiyaz Ahmad</Text>{" "}
          </Text>
          <Text style={styles.caddressheading}>
            {" "}
            <Text>Gendar</Text>
            <Text>M</Text>
          </Text>
          <Text style={styles.caddressheading}>
            <Text>State</Text>
            <Text>Bihar</Text>
          </Text>
        </View>
        <Text style={styles.caddressheading}>Correspondance Address</Text>
        <Text style={styles.consent}>Same of Registered Address</Text>
        <CustomInput placeholder="Address Line 1" />
        <CustomInput placeholder="Address Line 2" />
        <CustomInput placeholder="Address Line 3" />
        <CustomInput placeholder="Pin Code" />
        <CustomInput placeholder="State" />
        <CustomButton text="Proceed" />
      </View>
    </ScrollView>
  );
};

export default BasisDetail;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    flexDirection: "column",

    alignItems: "center",
    backgroundColor: "aliceblue",
    flexWrap: "wrap",
  },
  heading: {
    fontSize: 23,
    fontWeight: "bold",
    color: "red",
    marginVertical: 5,
  },
  detailheading: {
    fontWeight: "bold",
  },
  consent: {
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  caddressheading: {
    fontSize: 12,
    fontWeight: "bold",
    borderWidth: 2,
    margin: 10,
    padding: 7,
    borderRadius: 5,
    display: "flex",
    justifyContent: "space-between",
  },
});
