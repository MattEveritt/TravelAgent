import axios from 'axios';
import { baseURL, responseHandler, errorHandler, setAuthHeader } from './helpers';

const axiosTransfersService = axios.create({
  baseURL: `${baseURL}/transfers`,
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosTransfersService.interceptors.request.use(config =>
  setAuthHeader(config),
);

axiosTransfersService.interceptors.response.use(
  response => responseHandler(response),
  error => errorHandler(error),
);

export default axiosTransfersService;
