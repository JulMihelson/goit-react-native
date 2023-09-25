import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
const firebaseConfig = {
  apiKey: "AIzaSyBkCzWoSoKRkRSoO3j4JAeTNgRcw-R5CDY",
  authDomain: "my-awesome-hw6.firebaseapp.com",
  databaseURL: "https://my-awesome-hw6-default-rtdb.firebaseio.com",
  projectId: "my-awesome-hw6",
  storageBucket: "my-awesome-hw6.appspot.com",
  messagingSenderId: "172182425927",
  appId: "1:172182425927:web:0ba64b9c0b9f2e423a3c62",
  measurementId: "G-FPDNK3EP9T",
};

const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
