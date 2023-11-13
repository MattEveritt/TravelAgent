import axios from 'axios';
import { responseHandler } from './helpers/responseHandler';
import { errorHandler } from './helpers/errorHandler';
import { setAuthHeader } from './helpers/setAuthHeader';
import { baseURL } from './helpers/baseURL';

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
