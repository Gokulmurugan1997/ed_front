// utils/Approutes.jsx
import Login from "../controller/Login";
import Signin from "../controller/Signin";
import ForgetPassword from "../controller/Forgotpassword";
import Home from "../controller/Home";
import Teacher from "../controller/Teacher";
import Student from "../controller/Student";
import Parent from "../controller/Parent";
import Mark from "../controller/Teacher/Mark";
import Attendance from "../controller/Teacher/Attendance";
import TimeTable from "../controller/Teacher/TimeTable";
import ParentAttendance from "../controller/Parents/Attendance";
import ParentMarks from "../controller/Parents/Marks";
import ParentTimetable from "../controller/Parents/TimeTable";
import ProtectedRoute from "../controller/ProtectedRoute";
import { Navigate } from "react-router-dom";


const AppRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/forgetpassword",
    element: <ForgetPassword />,
  },
  {
    path: "/home",
    element: <ProtectedRoute isAuthenticated={true}><Home /></ProtectedRoute>, // Example of protected route
  },
  {
    path: "/teacher",
    element: <ProtectedRoute isAuthenticated={true}><Teacher /></ProtectedRoute>, // Protected
  },
  {
    path: "/student",
    element: <ProtectedRoute isAuthenticated={true}><Student /></ProtectedRoute>, // Protected
  },
  {
    path: "/parent",
    element: <ProtectedRoute isAuthenticated={true}><Parent /></ProtectedRoute>, // Protected
  },
  {
    path: "/mark",
    element: <ProtectedRoute isAuthenticated={true}><Mark /></ProtectedRoute>, // Protected
  },
  {
    path: "/attendance",
    element: <ProtectedRoute isAuthenticated={true}><Attendance /></ProtectedRoute>, // Protected
  },
  {
    path: "/timetable",
    element: <ProtectedRoute isAuthenticated={true}><TimeTable /></ProtectedRoute>, // Protected
  },
  {
    path: "/parent/timetable",
    element: <ProtectedRoute isAuthenticated={true}><ParentTimetable /></ProtectedRoute>, // Protected
  },
  {
    path: "/parent/attendance",
    element: <ProtectedRoute isAuthenticated={true}><ParentAttendance /></ProtectedRoute>, // Protected
  },
  {
    path: "/parent/marks",
    element: <ProtectedRoute isAuthenticated={true}><ParentMarks /></ProtectedRoute>, // Protected
  },
  {
    path: "*",
    element: <Navigate to="/login" />,
  },
];

export default AppRoutes;
