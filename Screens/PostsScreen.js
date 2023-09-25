import React from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import avatarImage from "../assets/images/avatar-image.jpg";
import avatarImage2x from "../assets/images/avatar-image2x.jpg";
import { useFonts } from "expo-font";

const PostsScreen = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView>
      <ScrollView style={styles.box}>
        <View>
          <View style={styles.userBox}>
            <Image
              style={{ width: 60, height: 60 }}
              source={(avatarImage, avatarImage2x)}
            ></Image>
            <View style={styles.userInfo}>
              <Text style={styles.login}>Natali Romanova</Text>
              <Text style={styles.email}>email@example.com</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {
    height: "100%",
    width: "100%",
  },
  title: {
    color: "#212121",
    textAlign: "center",
    fontSize: 17,
    fontWeight: 500,
    letterSpacing: 0.3,
  },
  titleBlock: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  userBox: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    gap: 8,
  },
  userInfo: {
    flexDirection: "column",
  },
  login: {
    color: "#212121",
    fontSize: 13,
    fontFamily: "Roboto-Bold",
  },
  email: {
    color: "rgba(33, 33, 33, 0.80)",
    fontSize: 11,
  },
});
export default PostsScreen;
