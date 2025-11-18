import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../Config/Firebase";
import { doc, setDoc } from "firebase/firestore";

const initialState = {
  user: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  errorMessage: "",
};

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async ({ email, password, name }, { rejectWithValue }) => {
    try {
      // Firebase Auth
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      let Uid = userCredentials.user.uid;
      localStorage.setItem("userId", Uid);

      // User Data Firestore me Save
      const userData = {
        name,
        email,
        uid: Uid,
        createdAt: new Date(),
      };

      await setDoc(doc(db, "users", Uid), userData);

      localStorage.setItem("userData", JSON.stringify(userData));

      return userData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.errorMessage = "";
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.user = null;
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.errorMessage = action.payload;
      });
  },
});

export default signupSlice.reducer;
