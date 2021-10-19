import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import BottomTabs, { bottomTabIcons } from "../component/home/BottomTabs";
import Header from "../component/home/Header";
import Post from "../component/home/Post";
import Stories from "../component/home/Stories";
import { POSTS } from "../data/post";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons} />
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
