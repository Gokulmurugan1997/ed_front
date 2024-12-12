const Apiroutes = {
    SIGNUP:{
        path:'/ed/signup',
        authenticate:false
    },
    LOGIN:{
        path:'/ed/login',
        authenticate:false
    },
    FORGETPASSWORD:{
        path:"/ed/forgetPassword",
        authenticate:false
    },
    RESETPASSWORD:{
        path:"/ed/resetPass",
        authenticate:false
    },
    STUDENTDETAILS:{
        path:"/ed/student",
        authenticate:false
    },
    ATTENDNANCE:{
        path:"/ed/attendance",
        authenticate:false
    },
    TIMETABLE:{
        path:"/ed/timetable",
        authenticate:false
    },
    GETDETAILS:{
        path:"/ed/getdetails",
        authenticate:false
    }
}

export default Apiroutes