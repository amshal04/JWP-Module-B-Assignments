// src/pages/ExamDetails.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CustomDrawer from "../../Drawer";

const ExamDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const exam = location.state;

  if (!exam) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-red-500">
        No exam details available.
      </div>
    );
  }

  return (
    <>
      <CustomDrawer />

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8">
          <h1
            className="text-3xl font-extrabold mb-6 text-center underline"
            style={{ color: "#2a9b42" }}
          >
            Exam Details
          </h1>

          <div className="space-y-4 text-lg">
            <p>
              <strong className="text-gray-900 dark:text-white">Class:</strong>{" "}
              {exam.class}
            </p>
            <p>
              <strong className="text-gray-900 dark:text-white">Subject:</strong>{" "}
              {exam.subject}
            </p>
            <p>
              <strong className="text-gray-900 dark:text-white">Date:</strong>{" "}
              {exam.date}
            </p>
            <p>
              <strong className="text-gray-900 dark:text-white">Start Time:</strong>{" "}
              {exam.startTime}
            </p>
            <p>
              <strong className="text-gray-900 dark:text-white">End Time:</strong>{" "}
              {exam.endTime}
            </p>
            <p>
              <strong className="text-gray-900 dark:text-white">Room No.:</strong>{" "}
              {exam.room}
            </p>
            <p>
              <strong className="text-gray-900 dark:text-white">Invigilator:</strong>{" "}
              {exam.invigilator}
            </p>
            <p>
              <strong className="text-gray-900 dark:text-white">Notes:</strong>{" "}
              {exam.notes}
            </p>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => navigate(-1)}
              className="bg-[#2a9b42] hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow"
            >
              Back to Schedule
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExamDetails;