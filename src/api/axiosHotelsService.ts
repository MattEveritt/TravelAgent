import axios from 'axios';
import { baseURL, responseHandler, errorHandler, setAuthHeader } from './helpers';

const axiosHotelsService = axios.create({
  baseURL: `${baseURL}/hotels`,
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosHotelsService.interceptors.request.use(config =>
  setAuthHeader(config),
);

axiosHotelsService.interceptors.response.use(
  response => responseHandler(response),
  error => errorHandler(error),
);

export default axiosHotelsService;
