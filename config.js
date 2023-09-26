import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
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

if (!getApps().length) {
  initializeApp(firebaseConfig);
}
const auth = initializeAuth(getApp(), {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(getApp());
export const storage = getStorage(getApp());
