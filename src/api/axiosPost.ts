import axios from 'axios';
import {
  baseURL,
  getAccessToken,
  responseHandler,
  errorHandler,
} from './helpers';

const axiosPost = axios.create({
  baseURL: baseURL,
  method: 'post',
  headers: {
    Authorization: getAccessToken(),
  },
});

export default axiosPost;
