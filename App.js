import { View } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import PostsScreen from "./Screens/PostsScreen";
import login from "./Screens/RegistrationScreen";
import email from "./Screens/RegistrationScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import LogOut from "./Components/LogOut";
import Home from "./Screens/Home";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const MainStack = createStackNavigator();
export default function App() {
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
    // <NavigationContainer>
    //   <MainStack.Navigator>
    //     {/* <MainStack.Screen name="Registration" component={RegScreen} />
    //     <MainStack.Screen name="Login" component={LoginScreen} /> */}
    //     {/* <MainStack.Screen name="Home" component={Home} /> */}
    //     <MainStack.Screen
    //       name="Публікації"
    //       component={PostsScreen}
    //       options={{
    //         headerTintColor: { color: "#212121" },
    //         headerStyle: {
    //           paddingHorizontal: 16,
    //         },
    //         headerTitleStyle: {
    //           textAlign: "center",
    //           fontSize: 17,
    //           fontWeight: 500,
    //           letterSpacing: 0.3,
    //           fontFamily: "Roboto-Bold",
    //         },
    //         headerRight: () => <LogOut />,
    //       }}
    //     />
    //     {/* <RegScreen name={login} email={email} /> */}
    //     {/* <PostsScreen /> */}
    //     {/* <LoginScreen /> */}
    //   </MainStack.Navigator>
    // </NavigationContainer>
  );
}
