import React, { Component } from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import FormikPostUploader from "./FormikPostUploader";

const AddNewPost = () => (
  <SafeAreaView style={styles.container}>
    <Header />
    <FormikPostUploader />
    {/* <View style={styles.container}>
    </View> */}
  </SafeAreaView>
);
const Header = () => (
  <View style={styles.headerContainer}>
    <TouchableOpacity>
      <Image
        source={{
          uri: "https://img.icons8.com/ios-glyphs/90/ffffff/back.png",
        }}
        style={{ width: 30, height: 30 }}
      />
    </TouchableOpacity>
    <Text style={styles.headerText}>New Post</Text>
    <TouchableOpacity>
      <Text
        style={{
          color: "white",
          fontSize: 18,
          fontWeight: "700",
          marginTop: 5,
        }}
      >
        {/* Post */}
      </Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    paddingTop: 35,
    backgroundColor: "#000",
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  headerText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 20,
    marginRight: 25,
  },
});

export default AddNewPost;
