import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import AddNewPost from "../component/NewPost/AddNewPost";

const NewPostScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
      <AddNewPost />
    </SafeAreaView>
  );
};

export default NewPostScreen;
