import { createSlice } from "@reduxjs/toolkit";
import {
  addPostThunk,
  deleteAllPostsThunk,
  getPostsThunk,
  setPostIdThunk,
} from "./operations";

const initialState = {
  posts: [],
  isLoading: false,
  isError: null,
  currentPostId: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,

  extraReducers: (builder) =>
    builder
      .addCase(addPostThunk.pending, pending)
      .addCase(addPostThunk.fulfilled, addPostFulfilled)
      .addCase(addPostThunk.rejected, rejected)

      .addCase(deleteAllPostsThunk.pending, pending)
      .addCase(deleteAllPostsThunk.fulfilled, deleteAllPostsFulfilled)
      .addCase(deleteAllPostsThunk.rejected, rejected)

      .addCase(setPostIdThunk.pending, pending)
      .addCase(setPostIdThunk.fulfilled, setPostIdFulfilled)
      .addCase(setPostIdThunk.rejected, rejected)

      .addCase(getPostsThunk.pending, pending)
      .addCase(getPostsThunk.fulfilled, getPostsFulfilled)
      .addCase(getPostsThunk.rejected, rejected),
});

function addPostFulfilled(state, { payload }) {
  state.isLoading = false;
  state.isError = null;
  state.posts = [...state.posts, payload];
}

function deleteAllPostsFulfilled(state) {
  state.isLoading = false;
  state.isError = null;
  state.posts = [];
}
function setPostIdFulfilled(state, { payload }) {
  state.isLoading = false;
  state.isError = null;
  state.currentPostId = payload;
}

function getPostsFulfilled(state, { payload }) {
  state.isLoading = false;
  state.isError = null;
  state.posts = [...payload];
}

function pending(state) {
  state.isLoading = true;
  state.isError = null;
}
function rejected(state) {
  state.isLoading = false;
  state.isError = true;
}

export const postsReducer = postsSlice.reducer;
