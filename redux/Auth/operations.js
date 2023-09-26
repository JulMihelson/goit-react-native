import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  LogOut,
  Registration,
  loginDB,
  registerDB,
  updateUserProfile,
} from "../../Api";

export const loginThunk = createAsyncThunk("auth/login", loginDB);

export const loginFirebaseThunk = createAsyncThunk(
  "auth/loginFirebaseThunk",
  loginDB
);

export const logOutThunk = createAsyncThunk("auth/logOut", LogOut);

export const registrationThunk = createAsyncThunk(
  "auth/registration",
  Registration
);
export const registrationThunkFirebaseDb = createAsyncThunk(
  "auth/registartionFirebaseDb",
  async (body) => {
    const { email, password, displayName } = body;
    const newUser = await registerDB({ email, password, displayName });
    return newUser;
  }
);

export const updateUserProfileThunk = createAsyncThunk(
  "auth/updateUser",
  updateUserProfile
);
