import axiosInstance from "../../app/axios/axiosInstance"

export const login = async (data) => {
    const response = await axiosInstance.post('/auth/login', data)
    return response.data
}

export const getCurrentUser = async () => {
    const response = await axiosInstance.get('/users/details')
    return response.data
}
