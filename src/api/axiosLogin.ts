import axios from 'axios';
import { baseURL, responseHandler, errorHandler } from './helpers';

const axiosLogin = axios.create({
  baseURL: `${baseURL}/login`,
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
  },
});
axios.interceptors.request.use(config => {
  config.timeout = 5000; // Wait for 5 seconds before timing out
  return config;
});

export default axiosLogin;
