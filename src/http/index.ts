import axios from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";

//TODO(1)
export const API_URL = `http://localhost:80/api/v1`;

const $api = axios.create({
    baseURL: API_URL,
})

$api.interceptors.request.use((config) => {
    if (localStorage.getItem('token')) {
        config.headers.Authorization = 'Bearer_' + localStorage.getItem('token')
        console.log(localStorage.getItem("token"))
    }
    return config;
})

$api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    console.log(error.config)
    const originalRequest = error.config;
    if (error.response.status === 403 &&  !error.config._isRetry === true) {
        originalRequest._isRetry = true
        console.log("refr1")
        try {
            const response = await axios.post<AuthResponse>(`${API_URL}/refresh`, {
                accessToken: localStorage.getItem('token'),
                refreshToken: localStorage.getItem('refresh')
            })
            console.log("refr " + response.data)
        }catch (e){
            console.log(e)
        }

    }
    console.log(error.response)
    throw error;

})

export default $api;