// import React from 'react'
// import "./App.css";
// // import Navbar from './Components/Navbar/Navbar';
// import Dashboard from './Screens/Dashboard/Dashboard';
// import { Route, Routes } from 'react-router-dom';
// import StudentAdd from './Screens/Students/StudentAdd';
// import StudentList from './Screens/Students/StudentList';
// import TransferStudent from './Screens/Students/TransferStudent';
// import TeacherAdd from './Screens/Teacher/TeacherAdd';
// import TeacherAllocation from './Screens/Teacher/TeacherAllocation';
// import TeacherList from './Screens/Teacher/TeacherList';


// const App = () => {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/studentadd" element={<StudentAdd />} />
//         <Route path="/studentlist" element={<StudentList />} />
//         <Route path="/transferstudent" element={<TransferStudent />} />
//         <Route path="/teacheradd" element={<TeacherAdd />} />
//         <Route path="/teacherallocation" element={<TeacherAllocation />} />
//         <Route path="/teacherlist" element={<TeacherList />} />
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/" element={<Dashboard />} />
//       </Routes>
//     </>
//   )
// }

// export default App































import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login.jsx'
import DashboardLayout from './layouts/DashboardLayout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import ProtectedRoute from './routes/ProtectedRoute.jsx'

// Students
import StudentList from './pages/Students/StudentList.jsx'
import StudentForm from './pages/Students/StudentForm.jsx'
import StudentTransfer from './pages/Students/StudentTransfer.jsx'

// Teachers
import TeacherList from './pages/Teachers/TeacherList.jsx'
import TeacherForm from './pages/Teachers/TeacherForm.jsx'
import TeacherAllocation from './pages/Teachers/TeacherAllocation.jsx'

// Fees
import FeeStructure from './pages/Fees/FeeStructure.jsx'
import FeeSubmission from './pages/Fees/FeeSubmission.jsx'
import FeeVoucher from './pages/Fees/FeeVoucher.jsx'

// Others (skeleton imports could be added as you implement)
import Admission from './pages/Admissions/Admission.jsx'
import ExamSchedule from './pages/Exams/ExamSchedule.jsx'
import ExamResult from './pages/Exams/ExamResult.jsx'
import SchoolRegistration from './pages/School/Registration.jsx'

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/" element={<ProtectedRoute><DashboardLayout/></ProtectedRoute>}>
        <Route path="dashboard" element={<Dashboard/>} />

        {/* Students */}
        <Route path="students" element={<StudentList/>} />
        <Route path="students/add" element={<StudentForm/>} />
        <Route path="students/edit/:id" element={<StudentForm/>} />
        <Route path="students/transfer" element={<StudentTransfer/>} />

        {/* Teachers */}
        <Route path="teachers" element={<TeacherList/>} />
        <Route path="teachers/add" element={<TeacherForm/>} />
        <Route path="teachers/edit/:id" element={<TeacherForm/>} />
        <Route path="teachers/allocate" element={<TeacherAllocation/>} />

        {/* Fees */}
        <Route path="fees" element={<FeeStructure/>} />
        <Route path="fees/submission" element={<FeeSubmission/>} />
        <Route path="fees/voucher" element={<FeeVoucher/>} />

        {/* Admissions */}
        <Route path="admissions" element={<Admission/>} />

        {/* Exams */}
        <Route path="exams" element={<ExamSchedule/>} />
        <Route path="exams/results" element={<ExamResult/>} />

        {/* School */}
        <Route path="school/registration" element={<SchoolRegistration/>} />

        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  )
}
