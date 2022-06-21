import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomInput/CustomButton/CustomButton";
import SocialSignInButton from "../../components/SocialSignInButton/SocialSignInButton";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSignInPressed = () => {
    console.warn("UserSign pressed");
    //here we need to login and validate the user
    navigation.navigate("HomeScreen");
  };
  const onForgetPasswordPressed = () => {
    console.warn("Forget password pressed");
    //Redirect to forgot password page
    navigation.navigate("ForgotPassword");
  };

  const onSignUpPressed = () => {
    console.warn("Create a new Account");
    //Redirect to ac open page
    navigation.navigate("SignUpScreen");
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.heading}>Sign In Screen(Nad)</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton onPress={onSignInPressed} text="Sign In" type="PRIMARY" />
        <CustomButton
          onPress={onForgetPasswordPressed}
          text="Forget Password?"
          type="TERTIARY"
        />
        <SocialSignInButton />
        <CustomButton
          onPress={onSignUpPressed}
          text="Don't have an account? create one."
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default SignInScreen;

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
