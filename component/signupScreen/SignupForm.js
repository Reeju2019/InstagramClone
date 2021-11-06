import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";

const SignupForm = () => {
  const SignupFormSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("An email is required"),
    username: Yup.string()
      .required("A username is required")
      .min(3, "Username must be at least 3 characters"),
    password: Yup.string()
      .required("A password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .required("A password is required")
      .min(6, "Password must be at least 6 characters"),
  });
  return (
    <View>
      <Text>Form</Text>
    </View>
  );
};

export default SignupForm;
