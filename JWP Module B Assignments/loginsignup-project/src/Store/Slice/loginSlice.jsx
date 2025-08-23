import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../Config/Firebase";
import { doc, getDoc } from "firebase/firestore";

const initialState = {
  user: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  errorMessage: "",
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      let Uid = userCredentials.user.uid;
      localStorage.setItem("userId", Uid);

      const getData = await getDoc(doc(db, "users", Uid));
      localStorage.setItem("userData", JSON.stringify(getData.data()));

      return getData.data();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      localStorage.removeItem("userId");
      localStorage.removeItem("userData");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.errorMessage = "";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.user = null;
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.errorMessage = action.payload;
      });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
