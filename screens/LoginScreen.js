import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import LoginForm from "../component/loginScreen/LoginForm";

const LoginScreen = () => {
  const Instagram_Logo =
    "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png";
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{ uri: Instagram_Logo, height: 100, width: 100 }} />
      </View>
      <LoginForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
  },
});

export default LoginScreen;
