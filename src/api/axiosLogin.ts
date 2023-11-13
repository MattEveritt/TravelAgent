import axios from 'axios';
import { responseHandler } from './helpers/responseHandler';
import { errorHandler } from './helpers/errorHandler';
import { baseURL } from './helpers/baseURL';

console.log('baseURL: ', baseURL);
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
