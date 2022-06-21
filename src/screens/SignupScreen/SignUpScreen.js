import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomInput/CustomButton/CustomButton";
import SocialSignInButton from "../../components/SocialSignInButton/SocialSignInButton";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const [name, SetName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, SetConfirmPassword] = useState("");
  const navigation = useNavigation();

  const haveAnAccount = () => {
    console.warn("Already a account");
    //alreay a account
    navigation.navigate("SignIn");
  };
  const onRegisterUser = () => {
    console.warn("Create new account");
    //Validate and add email confirmation
    navigation.navigate("ConfrimEmail");
  };
  const onTermOfUsePresses = () => {
    console.warn("onTermOfUsePresses");
  };
  const onPrivacyandPolicyPress = () => {
    console.warn("onPrivacyandPolicyPress");
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.heading}>Create New Account</Text>
        <CustomInput
          placeholder="Enter your name"
          value={name}
          setValue={SetName}
        />
        <CustomInput
          placeholder="Enter your email"
          value={email}
          setValue={setEmail}
        />
        <CustomInput
          placeholder="Enter your password"
          secureTextEntry={true}
          value={password}
          setValue={setPassword}
        />
        <CustomInput
          placeholder="Enter your confirm password"
          secureTextEntry={true}
          value={confirmPassword}
          setValue={SetConfirmPassword}
        />
        <CustomButton text="Register" onPress={onRegisterUser} />
        <Text style={styles.text}>
          By registering, you confirm that you accept our{" "}
          <Text style={styles.link} onPress={onTermOfUsePresses}>
            Terms of Use
          </Text>{" "}
          and{" "}
          <Text style={styles.link} onPress={onPrivacyandPolicyPress}>
            Privacy Policy
          </Text>
        </Text>

        <SocialSignInButton />

        <CustomButton
          text="Have an account? Sign In"
          type="TERTIARY"
          onPress={haveAnAccount}
        />
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

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
  text: {
    color: "gray",
    marginVertical: 10,
    lineHeight: 18,
  },
  link: {
    color: "#FDB075",
  },
});
