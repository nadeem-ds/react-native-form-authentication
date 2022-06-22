import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BasisDetail from "./src/ApbCurrent/BasicDetail(S5)/BasisDetail";
import BusinessDetail from "./src/ApbCurrent/BusinessDetail/BusinessDetail";
import CustomButton from "./src/ApbCurrent/CustomButton/CustomButton";
import CustomInput from "./src/ApbCurrent/CustomInput/CustomInput";
import CustomPicker from "./src/ApbCurrent/CustomPicker/CustomPicker";
import Dashboard from "./src/ApbCurrent/Dashboard(s4)/Dashboard";
import EnterKycDetails from "./src/ApbCurrent/EnterKYCDetails(s3)/EnterKycDetails";
import MerchantMobileNumber from "./src/ApbCurrent/MerchantMobileNo(S2)/MerchantMobileNumber";
import MerchantMoileNumberVerificationCode from "./src/ApbCurrent/MerchantMobileNo(S2)/MerchantMoileNumberVerificationCode";
import OnboardCA from "./src/ApbCurrent/OnboardCA(S1)/OnboardCA";
import Navigation from "./src/Navigation/Navigation";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <SignInScreen /> */}
      {/* <SignUpScreen /> */}
      {/* <ConfirmEmailScreen /> */}
      {/* <ForgotPasswordScreen/> */}
      {/* <NewPasswordScreen /> */}
      {/* <Navigation /> */}
      {/* <OnboardCA /> */}
      {/* <MerchantMoileNumberVerificationCode /> */}
      <BusinessDetail />

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
