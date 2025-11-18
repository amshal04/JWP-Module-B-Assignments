import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { db } from '../../firebase/config.js'
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore'

// Collections
const teachersCol = collection(db, 'teachers')
const allocationsCol = collection(db, 'teacher_allocations')

// --- Teachers CRUD ---
export const fetchTeachers = createAsyncThunk('teachers/fetch', async () => {
  const snap = await getDocs(teachersCol)
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
})

export const addTeacher = createAsyncThunk('teachers/add', async (payload) => {
  const { id, ...data } = payload
  const ref = await addDoc(teachersCol, data)
  return { id: ref.id, ...data }
})

export const updateTeacher = createAsyncThunk('teachers/update', async (payload) => {
  const { id, ...data } = payload
  await updateDoc(doc(db, 'teachers', id), data)
  return payload
})

export const deleteTeacher = createAsyncThunk('teachers/delete', async (id) => {
  await deleteDoc(doc(db, 'teachers', id))
  return id
})

// --- Allocation CRUD ---
export const fetchAllocations = createAsyncThunk('teachers/fetchAllocations', async () => {
  const snap = await getDocs(allocationsCol)
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
})

export const addAllocation = createAsyncThunk('teachers/addAllocation', async (payload) => {
  const ref = await addDoc(allocationsCol, payload)
  return { id: ref.id, ...payload }
})

export const deleteAllocation = createAsyncThunk('teachers/deleteAllocation', async (id) => {
  await deleteDoc(doc(db, 'teacher_allocations', id))
  return id
})

const slice = createSlice({
  name:'teachers',
  initialState:{ list:[], allocations:[], loading:false, allocLoading:false, error:null },
  reducers:{} ,
  extraReducers:(b)=>{
    // teachers
    b.addCase(fetchTeachers.pending,(s)=>{s.loading=true})
     .addCase(fetchTeachers.fulfilled,(s,a)=>{s.loading=false; s.list=a.payload})
     .addCase(fetchTeachers.rejected,(s,a)=>{s.loading=false; s.error=a.error.message})
     .addCase(addTeacher.fulfilled,(s,a)=>{s.list.unshift(a.payload)})
     .addCase(updateTeacher.fulfilled,(s,a)=>{ const i=s.list.findIndex(x=>x.id===a.payload.id); if(i>-1) s.list[i]=a.payload })
     .addCase(deleteTeacher.fulfilled,(s,a)=>{ s.list = s.list.filter(x=>x.id!==a.payload) })

    // allocations
    b.addCase(fetchAllocations.pending,(s)=>{s.allocLoading=true})
     .addCase(fetchAllocations.fulfilled,(s,a)=>{s.allocLoading=false; s.allocations=a.payload})
     .addCase(fetchAllocations.rejected,(s,a)=>{s.allocLoading=false; s.error=a.error.message})
     .addCase(addAllocation.fulfilled,(s,a)=>{s.allocations.unshift(a.payload)})
     .addCase(deleteAllocation.fulfilled,(s,a)=>{ s.allocations = s.allocations.filter(x=>x.id!==a.payload) })
  }
})
export default slice.reducer