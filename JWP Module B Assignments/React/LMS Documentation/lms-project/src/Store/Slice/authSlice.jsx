import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../../firebase/config.js'

export const login = createAsyncThunk('auth/login', async ({ email, password }) => {
  const res = await signInWithEmailAndPassword(auth, email, password)
  return { uid: res.user.uid, email: res.user.email }
})

export const logout = createAsyncThunk('auth/logout', async () => { await signOut(auth) })

const slice = createSlice({
  name: 'auth',
  initialState: { user: null, loading: false, error: null },
  reducers: {},
  extraReducers: (b) => {
    b.addCase(login.pending, (s)=>{s.loading=true; s.error=null})
     .addCase(login.fulfilled, (s,a)=>{s.loading=false; s.user=a.payload})
     .addCase(login.rejected, (s,a)=>{s.loading=false; s.error=a.error.message})
     .addCase(logout.fulfilled, (s)=>{s.user=null})
  }
})
export default slice.reducer