import axios from "axios";

let AxiosService = axios.create({
    baseURL:"https://ed-back-fiqz.onrender.com",
    headers:{
        "Content-Type":"application/json"
    }
})

export default AxiosService