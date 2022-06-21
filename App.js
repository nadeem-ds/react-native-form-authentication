import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ConfirmEmailScreen from "./src/screens/ConfirmEmailScreen/ConfirmEmailScreen";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen/ForgotPasswordScreen";
import NewPasswordScreen from "./src/screens/NewPasswordScreen/NewPasswordScreen";
import SignInScreen from "./src/screens/SignInScreen/SignInScreen";
import SignUpScreen from "./src/screens/SignupScreen/SignUpScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <SignInScreen /> */}
      {/* <SignUpScreen /> */}
      {/* <ConfirmEmailScreen /> */}
      {/* <ForgotPasswordScreen/> */}
      <NewPasswordScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FBFC",
  },
});
