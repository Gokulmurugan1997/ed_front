import Login from "../controller/Login";
import { Navigate } from "react-router-dom";
import Signin from "../controller/Signin";
import ForgetPassword from "../controller/Forgotpassword";
import Home from "../controller/Home";
import Teacher from "../controller/Teacher";
import Student from "../controller/Student";
import Parent from "../controller/Parent"
import Mark from "../controller/Teacher/Mark";
import Attendance from "../controller/Teacher/Attendance";
import TimeTable from "../controller/Teacher/TimeTable";
import ParentAttendance from "../controller/Parents/Attendance";
import ParentMarks from "../controller/Parents/Marks";
import ParentTimetable from "../controller/Parents/TimeTable";

const AppRoutes = [
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"*",
        element:<Navigate to = 'login'/>
    },
    {
        path:"/signin",
        element:<Signin/>
    },
    {
        path:"/forgetpassword",
        element:<ForgetPassword/>
    },
    {
        path:"/home",
        element:<Home/>
    },
    {
        path:"/teacher",
        element:<Teacher/>
    },
    {
        path:"/student",
        element:<Student/>
    },
    {
        path:"/parent",
        element:<Parent/>
    },
    {
        path:"/mark",
        element:<Mark/>
    },
    {
        path:"/attendance",
        element:<Attendance/>
    },
    {
        path:"/timetable",
        element:<TimeTable/>
    },
    {
        path:"/parent/timetable",
        element:<ParentTimetable/>
    },
    {
        path:"/parent/attendance",
        element:<ParentAttendance/>
    },
    {
        path:"/parent/marks",
        element:<ParentMarks/>
    }
]

export default AppRoutes