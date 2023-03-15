import axios from 'axios'
import { store } from '../store/index'
const BASE_URL =
    'http://ec2-3-122-253-30.eu-central-1.compute.amazonaws.com:5500/api/v1'

const axiosInstance = axios.create({
    baseURL: BASE_URL,
})
axiosInstance.interceptors.request.use(
    function (config) {
        const newConfig = {
            ...config,
            headers: {
                ...config.headers,
                Authorization: store.getState().auth.token,
            },
        }
        return newConfig
    },
    function (error) {
        return Promise.reject(error)
    }
)
export default axiosInstance
