import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomInput/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState("");
  const navigation = useNavigation();

  const onSendPressed = () => {
    console.warn("onsendpressed");
    //code and confirm password screen
    navigation.navigate("NewPasswordScreen");
  };
  const onBackToSignIn = () => {
    console.warn("backtosignin");
    //back to sign in page
    navigation.navigate("SignIn");
  };
  return (
    <View style={styles.root}>
      <Text style={styles.heading}>Reset Your Password</Text>
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />
      <CustomButton text="Send" onPress={onSendPressed} />
      <CustomButton
        text="Back to Sign in"
        onPress={onBackToSignIn}
        type="TERTIARY"
      />
    </View>
  );
};

export default ForgotPasswordScreen;

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
