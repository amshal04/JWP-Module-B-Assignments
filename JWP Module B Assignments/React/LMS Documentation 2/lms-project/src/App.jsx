// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Signup from "./Screen/SignUp";
import Login from "./Screen/LoginForm";
import Dashboard from "./Components/Dashboard";
import ProtectedRoute from "./Components/ProtectedRoute";

// Student
import StdAdd from "./Screen/Projects/Students/StdAdd.jsx";
import StdList from "./Screen/Projects/Students/StdList.jsx";

// Teacher
import TeacherAdd from "./Screen/Projects/Teachers/TeacherAdd.jsx";
import TeacherList from "./Screen/Projects/Teachers/TeacherList.jsx";

// Subject
import SubjectAdd from "./Screen/Projects/Subjects/SubjectAdd.jsx";
import SubjectList from "./Screen/Projects/Subjects/SubjectList.jsx";

// Class
import ClassAdd from "./Screen/Projects/Class/ClassAdd.jsx";
import ClassList from "./Screen/Projects/Class/ClassList.jsx";

// Syllabus
import SyllabusAdd from "./Screen/Projects/Syllabus/SyllabusAdd.jsx";
import SyllabusList from "./Screen/Projects/Syllabus/SyllabusList.jsx";

// Attendance
import AttendanceForm from "./Screen/Projects/Attendance/AttendanceAdd.jsx";
import AttendanceList from "./Screen/Projects/Attendance/AttendanceList.jsx";

// Result
import ResultForm from "./Screen/Projects/Result/ResultAdd.jsx";
import ResultList from "./Screen/Projects/Result/ResultList.jsx";
import ExamSchedule from "./Screen/Projects/Result/ExamShedule.jsx";
import ExamDetails from "./Screen/Projects/Result/ExamDetails.jsx";

// Fees
import FeeStructure from "./Screen/Projects/Fees/FeeStructure.jsx";
import FeeVoucher from "./Screen/Projects/Fees/FeeVoucher.jsx";
import FeeSubmission from "./Screen/Projects/Fees/FeeSubmission.jsx";

const App = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Students */}
        <Route path="/std/add" element={<StdAdd />} />
        <Route path="/std/list" element={<StdList />} />

        {/* Teachers */}
        <Route path="/teacher/add" element={<TeacherAdd />} />
        <Route path="/teacher/list" element={<TeacherList />} />

        {/* Subjects */}
        <Route path="/sub/add" element={<SubjectAdd />} />
        <Route path="/sub/list" element={<SubjectList />} />

        {/* Classes */}
        <Route path="/class/add" element={<ClassAdd />} />
        <Route path="/class/list" element={<ClassList />} />

        {/* Syllabus */}
        <Route path="/syllabus/add" element={<SyllabusAdd />} />
        <Route path="/syllabus/list" element={<SyllabusList />} />

        {/* Attendance */}
        <Route path="/attendence/form" element={<AttendanceForm />} />
        <Route path="/attendence/list" element={<AttendanceList />} />

        {/* Results */}
        <Route path="/result/add" element={<ResultForm />} />
        <Route path="/result/list" element={<ResultList />} />
        <Route path="/examschedule" element={<ExamSchedule />} />
        <Route path="/exam/detail" element={<ExamDetails />} />

        {/* Fees */}
        <Route path="/fee/stru" element={<FeeStructure />} />
        <Route path="/fee/voucher" element={<FeeVoucher />} />
        <Route path="/fee/submission" element={<FeeSubmission />} />
      </Route>
    </Routes>
  );
};

export default App;