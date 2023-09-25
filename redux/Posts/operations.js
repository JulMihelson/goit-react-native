import { createAsyncThunk } from "@reduxjs/toolkit";
import { addPost, deleteAllPosts, getPostId, getPostsDB } from "../../Api";

export const addPostThunk = createAsyncThunk("post/addPost", addPost);

export const deleteAllPostsThunk = createAsyncThunk(
  "post/deleteAllPosts",
  deleteAllPosts
);

export const setPostIdThunk = createAsyncThunk("post/getPostId", getPostId);
export const getPostsThunk = createAsyncThunk("post/getPosts", getPostsDB);
