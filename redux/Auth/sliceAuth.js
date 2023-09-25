import { createSlice } from "@reduxjs/toolkit";
import {
  logOutThunk,
  loginFirebaseThunk,
  registrationThunkFirebaseDb,
  updateUserProfileThunk,
} from "./operations";

const initialState = {
  currentUser: null,
  currentUserFirebase: null,
  isLoading: false,
  isError: null,
  imageCurrent: null,
  imageCurrentLocation: null,
  imageAvatar: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setImageCurrent: (state, { payload }) => {
      state.imageCurrent = payload;
    },
    setAvatarImage: (state, { payload }) => {
      state.imageAvatar = payload;
    },
  },
  extraReducers: (builder) =>
    builder

      .addCase(logOutThunk.pending, pending)
      .addCase(logOutThunk.fulfilled, logOutFulfilled)
      .addCase(logOutThunk.rejected, rejected)

      .addCase(registrationThunkFirebaseDb.pending, pending)
      .addCase(
        registrationThunkFirebaseDb.fulfilled,
        registrationThunkFirebaseDbFulfilled
      )
      .addCase(registrationThunkFirebaseDb.rejected, rejected)

      .addCase(loginFirebaseThunk.pending, pending)
      .addCase(loginFirebaseThunk.fulfilled, loginFirebaseFulfilled)
      .addCase(loginFirebaseThunk.rejected, rejected)

      .addCase(updateUserProfileThunk.pending, pending)
      .addCase(updateUserProfileThunk.fulfilled, updateFirebaseFulfilled)
      .addCase(updateUserProfileThunk.rejected, rejected),
});
// /updateUserProfileThunk

function loginFirebaseFulfilled(state, { payload }) {
  state.isLoading = false;
  state.currentUser = payload;
  state.currentUserFirebase = payload;
  state.isError = null;
}

function logOutFulfilled(state, { payload }) {
  state.isLoading = false;
  state.currentUser = payload;
  state.currentUserFirebase = payload;
  state.isError = null;
}

function registrationThunkFirebaseDbFulfilled(state, { payload }) {
  state.isLoading = false;
  state.currentUser = payload;
  state.currentUserFirebase = payload;
  state.isError = null;
}
function updateFirebaseFulfilled(state, { payload }) {
  state.isLoading = false;
  state.currentUserFirebase = payload;
  state.isError = null;
}

function pending(state) {
  state.isLoading = true;
}
function rejected(state) {
  state.isLoading = false;
  state.currentUser = null;
  state.isError = true;
}

export const authReducer = authSlice.reducer;

export const imageCurrentReducer = authSlice.actions.setImageCurrent;
export const imageAvatarReducer = authSlice.actions.setAvatarImage;
