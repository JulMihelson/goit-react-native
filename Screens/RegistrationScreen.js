import backgroundImage from "../assets/images/background-image.jpg";
import backgroundImage2x from "../assets/images/background-image2x.jpg";

import React from "react";
import { useFonts } from "expo-font";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
} from "react-native";

export const RegScreen = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <ImageBackground
      imageStyle={styles.background}
      source={(backgroundImage, backgroundImage2x)}
    >
      <View style={styles.regCard}>
        <View style={styles.avatar}></View>

        <View style={styles.form}>
          <Text style={styles.title}>Реєстрація</Text>
          <TextInput placeholder="Логін" style={styles.input} />
          <TextInput
            placeholder="Адреса електронної пошти"
            style={styles.input}
          />

          <TextInput placeholder="Пароль" style={styles.passInput} />
          <Text style={styles.showPass}>Показати</Text>
        </View>
        <Text style={styles.buttonReg}>Зареєстуватися</Text>

        <Text style={styles.haveAcc}>Вже є акаунт? Увійти</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
  },

  title: {
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    fontWeight: 500,
    letterSpacing: 0.3,
    fontFamily: "Roboto-Bold",
    fontWeight: "bold",
  },
  avatar: {
    backgroundColor: "#F6F6F6",
    width: 120,
    height: 120,
    borderRadius: 16,
    position: "absolute",
    top: -60,
  },
  regCard: {
    marginTop: 263,
    alignItems: "center",
    color: "fff",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 92,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  form: { gap: 12 },
  input: {
    backgroundColor: "#F6F6F6",
    padding: 16,
    borderRadius: 8,
    height: 50,
    width: 343,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  passInput: {
    width: 343,
    backgroundColor: "#F6F6F6",
    marginBottom: 43,
    height: 50,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    position: "relative",
  },
  showPass: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    position: "absolute",
    top: 192,
    right: 16,
    lineHeight: 19,
  },
  buttonReg: {
    marginBottom: 16,
    alignItems: "center",
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    gap: 12,
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
  },
  haveAcc: {
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
    marginBottom: 45,
  },
});
export default RegScreen;
