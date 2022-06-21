import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomInput/CustomButton/CustomButton";

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState("");
  const confirmPressed = () => {
    console.warn("Confirm Code");
  };
  const onBackToSignIn = () => {
    console.warn("backToSignIn");
  };
  const onResendCode = () => {
    console.warn("resendCode");
  };
  return (
    <View style={styles.root}>
      <Text style={styles.heading}>Enter Your Confirmation Code</Text>
      <CustomInput
        placeholder="Code"
        value={code}
        setValue={setCode}
        secureTextEntry={true}
      />
      <CustomButton text="Confirm" onPress={confirmPressed} />
      <CustomButton
        text="Back to Sign in"
        onPress={onBackToSignIn}
        type="SECONDARY"
      />
      <CustomButton text="Resend Code" onPress={onResendCode} type="TERTIARY" />
    </View>
  );
};

export default ConfirmEmailScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 30,
  },
});
