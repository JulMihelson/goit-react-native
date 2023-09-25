import { createAsyncThunk } from "@reduxjs/toolkit";
import { addComments, deleteAllComments, getCommentsDB } from "../../Api";

export const addCommentsThunk = createAsyncThunk(
  "comments/addComments",
  addComments
);

export const deleteAllCommentsThunk = createAsyncThunk(
  "comments/deleteAllComments",
  deleteAllComments
);

export const getCommentsThunk = createAsyncThunk(
  "comments/getComments",
  getCommentsDB
);
