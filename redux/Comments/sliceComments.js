import { createSlice } from "@reduxjs/toolkit";
import {
  addCommentsThunk,
  deleteAllCommentsThunk,
  getCommentsThunk,
} from "./operations";

const initialState = {
  comments: [],
  isLoading: false,
  isError: null,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,

  extraReducers: (builder) =>
    builder
      .addCase(addCommentsThunk.pending, pending)
      .addCase(addCommentsThunk.fulfilled, addCommentsFulfilled)
      .addCase(addCommentsThunk.rejected, rejected)

      .addCase(deleteAllCommentsThunk.pending, pending)
      .addCase(deleteAllCommentsThunk.fulfilled, deleteAllCommentsFulfilled)
      .addCase(deleteAllCommentsThunk.rejected, rejected)

      .addCase(getCommentsThunk.pending, pending)
      .addCase(getCommentsThunk.fulfilled, getCommentsFulfilled)
      .addCase(getCommentsThunk.rejected, rejected),
});

function addCommentsFulfilled(state, { payload }) {
  // console.log("addCommentsFulfilled", payload);
  state.isLoading = false;
  state.isError = null;
  state.comments = [...state.comments, payload];
}
function deleteAllCommentsFulfilled(state) {
  state.isLoading = false;
  state.isError = null;
  state.comments = [];
}
function getCommentsFulfilled(state, { payload }) {
  state.isLoading = false;
  state.isError = null;
  state.comments = [...payload];
}

function pending(state) {
  state.isLoading = true;
  state.isError = null;
}
function rejected(state) {
  state.isLoading = false;
  state.isError = true;
}

export const commentsReducer = commentsSlice.reducer;
