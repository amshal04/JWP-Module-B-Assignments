import React from "react";
import CustomDrawer from "../../Drawer"; // ✅ Dashboard Drawer
import { useNavigate } from "react-router-dom";

const ExamSchedule = () => {
  const navigate = useNavigate();

  const exams = [
    { id: 1, subject: "Mathematics", class: "Class 1", date: "2024-08-15", startTime: "09:00 AM", endTime: "12:00 PM" },
    { id: 2, subject: "English", class: "Class 1", date: "2024-08-16", startTime: "10:00 AM", endTime: "01:00 PM" },
    { id: 3, subject: "Science", class: "Class 2", date: "2024-08-17", startTime: "08:30 AM", endTime: "11:30 AM" },
    { id: 4, subject: "Computer Science", class: "Class 2", date: "2024-08-18", startTime: "09:30 AM", endTime: "12:30 PM" },
    { id: 5, subject: "Pakistan Studies", class: "Class 3", date: "2024-08-19", startTime: "10:00 AM", endTime: "01:00 PM" },
    { id: 6, subject: "Islamiyat", class: "Class 3", date: "2024-08-20", startTime: "09:00 AM", endTime: "11:00 AM" },
    { id: 7, subject: "Urdu", class: "Class 4", date: "2024-08-21", startTime: "08:30 AM", endTime: "11:00 AM" },
    { id: 8, subject: "Physics", class: "Class 4", date: "2024-08-22", startTime: "12:00 PM", endTime: "03:00 PM" },
    { id: 9, subject: "Chemistry", class: "Class 5", date: "2024-08-23", startTime: "09:00 AM", endTime: "12:00 PM" },
    { id: 10, subject: "Biology", class: "Class 5", date: "2024-08-24", startTime: "10:00 AM", endTime: "01:00 PM" },
  ];

  const handleViewDetails = (exam) => {
    navigate("/exam/detail", { state: exam });
  };

  return (
    <>
      <CustomDrawer />

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
        <h1 className="text-center text-4xl font-extrabold mb-8" style={{ color: "#2a9b42" }}>
          Exam Schedule
        </h1>

        <div className="space-y-5 max-w-2xl mx-auto">
          {exams.map((exam) => (
            <div
              key={exam.id}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6"
            >
              <h2 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">
                {exam.class} - {exam.subject}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                <strong>Date:</strong> {exam.date}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                <strong>Start Time:</strong> {exam.startTime} |{" "}
                <strong>End Time:</strong> {exam.endTime}
              </p>

              <div className="mt-4 text-left">
                <button
                  onClick={() => handleViewDetails(exam)}
                  className="bg-[#2a9b42] hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExamSchedule;