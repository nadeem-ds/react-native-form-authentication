import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";

const CustomPicker = ({label}) => {
  const [pickValue, setPickValue] = useState("");
  return (
    <View style={styles.pickerStyle}>
      <Text style={styles.pickerlabel}>{label}</Text>
      <Picker onValueChange={setPickValue} selectedValue={pickValue}>
        <Picker.item label="nad1" value="Nadeem1" />
        <Picker.item label="nad2" value="Nadeem2" />
        <Picker.item label="nad3" value="Nadeem3" />
        <Picker.item label="nad4" value="Nadeem4" />
      </Picker>
    </View>
  );
};

export default CustomPicker;

const styles = StyleSheet.create({
  pickerStyle: {
    backgroundColor: "navyblue",
    width: "100%",
    fontWeight: "bold",
    margin: 10,
    borderRadius: 5,
  },
  pickerlabel: {
    marginHorizontal: 8,
    padding: 2,
  },
});
