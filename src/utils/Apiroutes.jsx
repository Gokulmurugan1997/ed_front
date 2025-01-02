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
        authenticate:true
    },
    ATTENDANCE:{
        path:"/ed/attendance",
        authenticate:true
    },
    TIMETABLE:{
        path:"/ed/timetable",
        authenticate:true
    },
    GETDETAILS:{
        path:"/ed/getdetails",
        authenticate:true
    }
}

export default Apiroutes