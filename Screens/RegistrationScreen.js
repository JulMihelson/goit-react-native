import backgroundImage from "../assets/images/background-image.jpg";
import backgroundImage2x from "../assets/images/background-image2x.jpg";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Keyboard,
  Pressable,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Button,
} from "react-native";

export const RegistrationScreen = () => {
  const navigation = useNavigation();

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    console.log(login, email, password, "user details");
    setLogin("");
    setEmail("");
    setPassword("");
  };
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View>
      <ImageBackground
        imageStyle={styles.background}
        source={(backgroundImage, backgroundImage2x)}
      >
        <View style={styles.box}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.regCard}>
              <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={{ alignItems: "center" }}
              >
                <View style={styles.avatar}></View>

                <View style={styles.form}>
                  <Text style={styles.title}>Реєстрація</Text>
                  <TextInput
                    onChangeText={setLogin}
                    value={login}
                    placeholder="Логін"
                    style={styles.input}
                  />
                  <TextInput
                    onChangeText={setEmail}
                    placeholder="Адреса електронної пошти"
                    style={styles.input}
                    value={email}
                  />
                  <View>
                    <TextInput
                      onChangeText={setPassword}
                      value={password}
                      placeholder="Пароль"
                      style={styles.passInput}
                    />
                    <Text style={styles.showPass}>Показати</Text>
                  </View>
                </View>
              </KeyboardAvoidingView>
              <Button
                onPress={register}
                style={styles.buttonRegistration}
                title="Зареєстуватися"
              ></Button>
              <View style={styles.haveAcc}>
                <Text>Вже є акаунт? </Text>
                <Text onPress={() => navigation.navigate("LoginScreen")}>
                  Увійти
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  regCard: {
    height: 549,
    alignItems: "center",
    color: "fff",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 92,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  box: {
    height: "100%",
    justifyContent: "flex-end",
  },
  background: {
    height: "100%",
    width: "100%",
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
    top: -150,
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
    top: 16,
    right: 16,
    lineHeight: 19,
  },
  buttonReg: {
    backgroundColor: "#FF8833",
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 32,
    borderRadius: 100,
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
  },
  haveAcc: {
    flexDirection: "row",
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
    marginBottom: 45,
    marginTop: 16,
  },
});
export default RegistrationScreen;
