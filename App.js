import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "react-native-gesture-handler";
import MainComponent from "./Components/MainComponent";

export default function App() {
  return (
    <Provider store={store.store}>
      <PersistGate persistor={store.persistor}>
        <MainComponent />
        {/* <NavigationContainer>
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
        </NavigationContainer> */}
      </PersistGate>
    </Provider>
  );
}
