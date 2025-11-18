import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice.js'
import studentsReducer from './slices/studentsSlice.js'
import teachersReducer from './slices/teachersSlice.js'
import subjectsReducer from './slices/subjectsSlice.js'
import classesReducer from './slices/classesSlice.js'
import feesReducer from './slices/feesSlice.js'
import syllabusReducer from './slices/syllabusSlice.js'
import examsReducer from './slices/examsSlice.js'
import admissionsReducer from './slices/admissionsSlice.js'

const store = configureStore({
  reducer: {
    auth: authReducer,
    students: studentsReducer,
    teachers: teachersReducer,
    subjects: subjectsReducer,
    classes: classesReducer,
    fees: feesReducer,
    syllabus: syllabusReducer,
    exams: examsReducer,
    admissions: admissionsReducer
  }
});

export default store;

