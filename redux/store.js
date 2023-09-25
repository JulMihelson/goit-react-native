import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Auth/sliceAuth";
import { usersReducer } from "./Users/sliceUsers";
import { postsReducer } from "./Posts/slicePosts";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { commentsReducer } from "./Comments/sliceComments";

const postsConfig = {
  key: "posts",
  storage: AsyncStorage,
};
const authConfig = {
  key: "auth",
  storage: AsyncStorage,
};
const usersConfig = {
  key: "users",
  storage: AsyncStorage,
};
const commentConfig = {
  key: "comments",
  storage: AsyncStorage,
};
// const posts = persistReducer(postsConfig, postsReducer);
const auth = persistReducer(authConfig, authReducer);
// const users = persistReducer(usersConfig, usersReducer);
// const comments = persistReducer(commentConfig, commentsReducer);

const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth,
    users: usersReducer,
    comments: commentsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export default { store, persistor };
