import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import SignupForm from "../component/signupScreen/SignupForm";

const SignupScreen = () => {
  const Instagram_Logo =
    "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png";
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{ uri: Instagram_Logo, height: 100, width: 100 }} />
      </View>
      <SignupForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 200,
    paddingHorizontal: 12,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
  },
});

export default SignupScreen;
