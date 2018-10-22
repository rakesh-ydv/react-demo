import axios from 'axios';

import {BACKEND_URL, BASE_URL} from "./constants/constants";


const axiosInstance = axios.create({
    baseURL: BASE_URL
});

export default axiosInstance;

export const postData = (data) => {
    return axiosInstance.post(BACKEND_URL, data);
};

export const fetchDirectionInfo = (token) => {
    return  axiosInstance.get(BACKEND_URL + '/'+ token);
};