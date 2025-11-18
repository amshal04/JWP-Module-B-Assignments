import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { db } from '../../firebase/config.js'
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore'

const colRef = collection(db, 'students')

export const fetchStudents = createAsyncThunk('students/fetch', async () => {
  const snap = await getDocs(colRef)
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
})

export const addStudent = createAsyncThunk('students/add', async (payload) => {
  const { id, ...data } = payload
  const ref = await addDoc(colRef, data)
  return { id: ref.id, ...data }
})

export const updateStudent = createAsyncThunk('students/update', async (payload) => {
  const { id, ...data } = payload
  await updateDoc(doc(db, 'students', id), data)
  return payload
})

export const deleteStudent = createAsyncThunk('students/delete', async (id) => {
  await deleteDoc(doc(db, 'students', id))
  return id
})

const slice = createSlice({
  name: 'students',
  initialState: { list: [], loading: false, error: null },
  reducers: {},
  extraReducers: (b) => {
    b.addCase(fetchStudents.pending, (s)=>{s.loading=true})
     .addCase(fetchStudents.fulfilled, (s,a)=>{s.loading=false; s.list=a.payload})
     .addCase(fetchStudents.rejected, (s,a)=>{s.loading=false; s.error=a.error.message})
     .addCase(addStudent.fulfilled, (s,a)=>{s.list.unshift(a.payload)})
     .addCase(updateStudent.fulfilled, (s,a)=>{
        const i = s.list.findIndex(x=>x.id===a.payload.id)
        if(i>-1) s.list[i]=a.payload
     })
     .addCase(deleteStudent.fulfilled, (s,a)=>{
        s.list = s.list.filter(x=>x.id!==a.payload)
     })
  }
})
export default slice.reducer