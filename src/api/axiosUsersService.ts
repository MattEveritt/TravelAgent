import axios from 'axios';
import { responseHandler } from './helpers/responseHandler';
import { errorHandler } from './helpers/errorHandler';
import { setAuthHeader } from './helpers/setAuthHeader';
import { baseURL } from './helpers/baseURL';

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
