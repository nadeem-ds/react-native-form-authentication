import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomInput/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const haveAnAccount = () => {
    console.warn("Already a account");
    //alreay a account
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.root}>
      <Text style={styles.heading}>Welcome to HomeScreen Nadeem😊😊😊😊</Text>
      <CustomButton text="Back to home screen" onPress={haveAnAccount} />
    </View>
  );
};

export default HomeScreen;

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
