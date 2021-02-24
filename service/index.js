import axios from 'axios';

const service = axios.create({
    baseURL: process.env.BASE_API_URL
});

export default service;