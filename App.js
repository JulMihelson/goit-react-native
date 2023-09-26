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
      </PersistGate>
    </Provider>
  );
}
