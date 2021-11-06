import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";

const LoginForm = () => {
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("An email is required"),
    password: Yup.string()
      .required("A password is required")
      .min(8, "Password must be at least 8 characters"),
  });
  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, actions) => {
          console.log(values);
          // actions.setSubmitting(false);
        }}
        validationSchema={LoginFormSchema}
        validateOnMount={true}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Phone number, username or email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.password.length || values.password.length >= 8
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Password"
                autoCapitalize="none"
                secureTextEntry={true}
                textContentType="password"
                autoCorrect={false}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </View>
            <View style={{ alignItems: "flex-end", marginBottom: 30 }}>
              <Text style={{ color: "#6BB0F5" }}>Forget Password?</Text>
            </View>
            <Pressable
              titleSize={20}
              style={styles.button(isValid)}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Log In</Text>
            </Pressable>
            <View style={styles.signUpContainer}>
              <Text>Don't have a Account?</Text>
              <TouchableOpacity>
                <Text style={styles.signupText}> Sign Up</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 90,
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
    marginTop: 30,
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
