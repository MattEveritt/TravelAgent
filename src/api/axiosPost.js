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

// axiosPost.interceptors.response.use(
//   response => responseHandler(response),
//   error => errorHandler(error),
// );

export default axiosPost;
