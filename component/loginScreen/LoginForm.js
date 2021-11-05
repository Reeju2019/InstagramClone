import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const LoginForm = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.inputField}>
        <TextInput
          placeholderTextColor="#444"
          placeholder="Phone number, username or email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
        />
      </View>
      <View style={styles.inputField}>
        <TextInput
          placeholderTextColor="#444"
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          textContentType="password"
          autoCorrect={false}
        />
      </View>
      <View style={{ alignItems: "flex-end", marginBottom: 30 }}>
        <Text style={{ color: "#6BB0F5" }}>Forget Password?</Text>
      </View>
      <Pressable
        titleSize={20}
        style={styles.button}
        onPress={() => console.log("You clicked Me!!!")}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </Pressable>
      {/* <View Style={styles.signUpContainer}>
        <Text style={styles.signUpText}>
          Don't have an account?{" "}
          <Pressable
            titleSize={20}
            style={styles.signUpButton}
            onPress={() => console.log("You clicked Me!!!")}
          >
            <Text style={styles.signUpButton}>Sign Up</Text>
          </Pressable>
        </Text>
      </View> */}
      <View style={styles.signUpContainer}>
        <Text>Don't have a Account</Text>
        <TouchableOpacity>
          <Text style={styles.signupText}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
  },
  inputField: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: "#fafafa",
    marginBottom: 10,
    borderWidth: 1,
  },
  button: (isValid) => ({
    backgroundColor: isValid ? "#0096f6" : "#9acaf7",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 4,
  }),
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 20,
  },
  signUpContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 50,
  },
  signupText: {
    color: "#6BB0F5",
    fontSize: 14,
    fontWeight: "600",
  },
  signUpButton: {
    color: "#6BB0F5",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default LoginForm;
