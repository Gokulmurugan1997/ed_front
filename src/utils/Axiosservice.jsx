import axios from "axios";

let AxiosService = axios.create({
    baseURL:"http://localhost:8002/",
    headers:{
        "Content-Type":"application/json"
    }
})

export default AxiosService

AxiosService.interceptors.request.use(config=>{
            let token = sessionStorage.getItem('token')

            if(config.authenticate === true && token){
                        config.headers.Authorization=`Bearer ${token}`
            }

            return config
})