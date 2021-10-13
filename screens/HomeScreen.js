import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Header from "../component/home/Header";

const HomeScreen = () => {
  return (
    // <SafeAreaView>
    //   <Text style={{ color: "#fff" }}>Header</Text>
    //   <Header />
    // </SafeAreaView>
    <SafeAreaView style={styles.container}>
      <Header />
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
