import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../CustomInput/CustomButton/CustomButton'

const SocialSignInButton = () => {
    const onSignInwithGoogle = () => {
        console.warn("Sign in with google");
      };
      const onSignInwithFacebook = () => {
        console.warn("Sign in with facebook ");
      };
      const onSignInwithApple = () => {
        console.warn("Sign in with Apple");
      };
  return (
    <>
      <CustomButton
          text="Sign In with Google"
          onPress={onSignInwithGoogle}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />
        <CustomButton
          text="Sign In with Facebook"
          onPress={onSignInwithFacebook}
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        />
        <CustomButton
          text="Sign In with Apple Id"
          onPress={onSignInwithApple}
          bgColor="#e3e3e3"
          fgColor="#363636"
        />
    </>
  )
}

export default SocialSignInButton

const styles = StyleSheet.create({})