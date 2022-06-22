import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const CustomInput = ({ placeholder }) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder} />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderWidth: 2,
    width: "100%",
    borderColor: "#e8e8e8",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 8,
    marginVertical: 10,
  },
});
