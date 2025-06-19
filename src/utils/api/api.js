import axiosInstance from "../../app/axios/axiosInstance"

export const login = async (data) => {
    const response = await axiosInstance.post('/auth/login', data)
    return response.data
}

export const createUser = async (user) => {
    const response = await axiosInstance.post('/users', user)
    return response.data
}

export const getCurrentUser = async () => {
    const response = await axiosInstance.get('/users/details')
    return response.data
}

export const getAllCities = async () => {
    const response = await axiosInstance.get('/cities')
    return response.data
}

export const requestAccountRestoration = async (phoneNumber) => {
    const response = await axiosInstance.post('/users/request-restauration', { phoneNumber })
    return response.data
}

export const verifyRestorationOTP = async (data) => {
    const response = await axiosInstance.post('/users/verify-restauration', data)
    return response.data
}

export const requestToChangePhoneNumber = async (newPhoneNumber) => {
    const response = await axiosInstance.post('/auth/change-phone-number', newPhoneNumber)
    return response.data
}

export const verifyNumberChangeOtp = async (data) => {
    const response = await axiosInstance.post('/auth/verify-phone-otp', data)
    return response.data
}

export const currentUserChangePwd = async (data) => {
    const response = await axiosInstance.post('/auth/change-password', data)
    return response.data
}

export const requestForChangeForgotedPwd = async (phoneNumber) => {
    const response = await axiosInstance.post('/auth/forgot-password', phoneNumber)
    return response.data
}

export const verifyChangePwdOtp = async (data) => {
    const response = await axiosInstance.post('/auth/verify-password-otp', data)
    return response.data
}

export const resetPassword = async (data) => {
    const response = await axiosInstance.post('/auth/reset-password', data)
    return response.data
}
