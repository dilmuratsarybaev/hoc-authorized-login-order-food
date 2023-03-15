import axiosInstance from '../config/mealInstance'

const singUp = (data) => {
    return axiosInstance.post('/auth/register', data)
}
export const singIn = (data) => {
    return axiosInstance.post('/auth/login', data)
}

export default singUp
