import { createAsyncThunk } from "@reduxjs/toolkit";
import { addUser } from "../../Api";

export const addUserThunk = createAsyncThunk("users/addUser", addUser);
