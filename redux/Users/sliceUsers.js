import { createSlice } from "@reduxjs/toolkit";
import { addUserThunk } from "./operations";

const initialState = {
  users: [],
  isLoading: false,
  isError: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(addUserThunk.pending, pending)
      .addCase(addUserThunk.fulfilled, addUserFulfilled)
      .addCase(addUserThunk.rejected, rejected),
});

function addUserFulfilled(state, { payload }) {
  state.isLoading = false;
  state.users = [...state.users, payload];
}

function pending(state) {
  state.isLoading = true;
  state.isError = null;
}
function rejected(state) {
  state.isLoading = false;
  state.currentUser = null;
  state.isError = true;
}

export const usersReducer = usersSlice.reducer;
