import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./Slice/signupSlice";

import loginReducer from "./Slice/loginSlice";

const store = configureStore({
  reducer: {
    signup: signupReducer,
    login: loginReducer,
  },
});

export default store;
