import axios from 'axios';
import {baseURL, getRefreshToken} from './helpers';

const axiosRefresh = axios.create({
  baseURL: `${baseURL}/refresh`,
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
  },
  data: {
    refreshToken: getRefreshToken(),
  },
});

export default axiosRefresh;
