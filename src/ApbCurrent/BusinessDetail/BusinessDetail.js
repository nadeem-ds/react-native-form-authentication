import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import CustomPicker from "../CustomPicker/CustomPicker";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";

const BusinessDetail = () => {
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.heading}>BusinessDetail</Text>
        <CustomPicker label="Name of the business" />
        <CustomPicker label="Annual income" />
        <CustomPicker label="Net Worth" />
        <CustomPicker label="Occupation" />
        <CustomPicker label="Source of funds" />
        <CustomPicker label="Transcation type" />
        <CustomPicker label="Annual turnover" />
        <CustomPicker label="Excepted credit and debit in account" />
        <CustomPicker label="Office ownership" />
        <Text>Assets of Premises</Text>
        <CustomInput placeholder="Email" />
        <CustomInput placeholder="year of business" />
        <CustomInput placeholder="name of neighbout entity" />
        <CustomInput placeholder="Address of neighbour entity" />
        <CustomInput placeholder="Address ine 2" />
        <CustomInput placeholder="Address ine 3" />
        <Text>custom radio button</Text>
        <CustomButton text="Proceed" />
      </View>
    </ScrollView>
  );
};

export default BusinessDetail;

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
});
