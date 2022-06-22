import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";
const MerchantMoileNumberVerificationCode = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.heading}>Enter Details</Text>
      <CustomInput placeholder="Enter merchant mobile number" />
      <CustomInput placeholder="Enter Verification Code" />
      <CustomButton text="Proceed" />
    </View>
  );
};

export default MerchantMoileNumberVerificationCode;

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
