import axios from 'axios';
import {baseURL} from './helpers';

const axiosRefresh = axios.create({
  baseURL: `${baseURL}/refresh`,
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosRefresh;
