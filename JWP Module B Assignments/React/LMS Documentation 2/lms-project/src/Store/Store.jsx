// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Store/Slice/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});