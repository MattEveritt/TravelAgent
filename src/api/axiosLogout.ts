import axios from 'axios';
import { baseURL } from './helpers';

const axiosLogout = axios.create({
  baseURL: `${baseURL}/logout`,
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosLogout;
