import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";

const EnterKycDetails = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.heading}>Enter KYC Details</Text>
      <CustomInput placeholder="Enter Merchant PAN Number" />
      <CustomInput placeholder="Enter Merchant Aadhaar number" />
      <Text style={styles.consent}>
        I(merchant) dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since.
      </Text>
      <Text style={styles.consent}>
        I(merchant) long established fact that a reader will be distracted by
        the readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </Text>
      <CustomButton text="Proceed" style={styles.btn} />
    </View>
  );
};

export default EnterKycDetails;

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
  consent: {
    fontSize: 12,
    fontWeight: "bold",
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  btn: {
    marginVertical: 25,
  },
});
