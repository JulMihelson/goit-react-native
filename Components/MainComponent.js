import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
// import rootReducer from "../redux/Root/sliceRoot";

import "react-native-gesture-handler";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import RegistrationScreen from "../Screens/RegistrationScreen";
import CommentsScreen from "../Screens/CommentsScreen";
import MapScreen from "../Screens/MapScreen";
import Home from "../Screens/Home";
import LoginScreen from "../Screens/LoginScreen";
import LogOut from "./LogOut";

const MainStack = createStackNavigator();

export const MainComponent = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="LoginScreen">
        <MainStack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Comments"
          component={CommentsScreen}
          options={{
            title: "Коментарі",
            headerTitleAlign: "center",
          }}
        />
        <MainStack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            title: "Геолокація",
            headerTitleAlign: "center",
          }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={({ route }) => {
            const navigationRoute =
              getFocusedRouteNameFromRoute(route) ?? "Posts";

            switch (navigationRoute) {
              case "Posts": {
                return {
                  headerStyle: {
                    backgroundColor: "#FFFFFF",
                  },
                  headerTitleStyle: {
                    fontFamily: "Roboto-Medium",
                    fontSize: 17,
                  },
                  headerRight: LogOut,
                };
              }
              case "Create": {
              }
              case "Profile":
              default: {
                return {
                  headerShown: false,
                };
              }
            }
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
export default MainComponent;
