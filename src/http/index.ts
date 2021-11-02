import axios from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";

//TODO(1)
export const API_URL =`http://localhost:8075/api/v1`;

const $api = axios.create({
    baseURL: API_URL,

})

console.log('api-url'+process.env.API)

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

$api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    console.log(error.response)

})

export default $api;