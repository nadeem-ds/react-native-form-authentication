import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const CustomButton = ({ text }) => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#3B71F3",
    alignItems: "center",
    borderRadius: 8,
    padding: 15,
    marginVertical: 15,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
