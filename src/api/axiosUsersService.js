import axios from 'axios';
import {baseURL, responseHandler, errorHandler, setAuthHeader} from './helpers';

const axiosUsersService = axios.create({
  baseURL: `${baseURL}/users`,
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosUsersService.interceptors.request.use(config => setAuthHeader(config));

axiosUsersService.interceptors.response.use(
  response => responseHandler(response),
  error => errorHandler(error),
);

export default axiosUsersService;
