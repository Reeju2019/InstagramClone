import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Header from "../component/home/Header";
import Stories from "../component/home/Stories";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    backgroundColor: "#000",
    flex: 1,
  },
});

export default HomeScreen;
