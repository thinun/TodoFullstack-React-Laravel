import axios from 'axios';

// Connecting to the API
const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
});

// Special function executed before the request is sent or after a response is received
axiosClient.interceptors.request.use(config => {
    return config;
});

axiosClient.interceptors.response.use(
    response => response,
    error => {
        throw error;
    }
);

export default axiosClient;
