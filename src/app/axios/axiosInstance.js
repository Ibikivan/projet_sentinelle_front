import axios from "axios"

const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

console.log("Axios base URL:", import.meta.env);

const axiosInstance = axios.create({
    baseURL: baseURL,
    withCredentials: true,
    // headers: {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json',
    // },
})

export default axiosInstance
