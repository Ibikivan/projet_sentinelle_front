import axios from "axios"

const baseURL = import.meta.env.API_URL || 'http://localhost:3000/api'

const axiosInstance = axios.create({
    baseURL: baseURL,
    withCredentials: true,
    // headers: {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json',
    // },
})

export default axiosInstance
