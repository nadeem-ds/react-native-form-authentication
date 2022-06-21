import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomInput/CustomButton/CustomButton";

const NewPasswordScreen = () => {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const onSubmitPressed = () => {
    console.warn("onsendpressed");
  };
  const onBackToSignIn = () => {
    console.warn("backtosignin");
  };
  return (
    <View style={styles.root}>
      <Text style={styles.heading}>Reset Your Password</Text>
      <CustomInput
        placeholder="Enter your Confirmation Code"
        value={code}
        setValue={setCode}
      />
      <CustomInput
        placeholder="Enter Your New Password"
        value={newPassword}
        setValue={setNewPassword}
      />
      <CustomButton text="Submit" onPress={onSubmitPressed} />
      <CustomButton
        text="Back to Sign in"
        onPress={onBackToSignIn}
        type="TERTIARY"
      />
    </View>
  );
};

export default NewPasswordScreen;

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
