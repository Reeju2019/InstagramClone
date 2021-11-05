import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../assets/header-logo.png")}
        />
      </TouchableOpacity>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("NewPostScreen")}>
          <Image
            style={styles.icon}
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>2</Text>
          </View>
          <Image
            style={styles.icon}
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    height: 50,
    width: 100,
    resizeMode: "contain",
  },
  iconContainer: {
    width: 140,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    width: 30,
    height: 30,
  },
  unreadBadge: {
    zIndex: 1,
    position: "absolute",
    backgroundColor: "#ff3250",
    width: 25,
    height: 20,
    right: -4,
    top: -10,
    borderRadius: 10,
    alignItems: "center",
  },
  unreadBadgeText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Header;
