import axios from 'axios';
import { responseHandler } from './helpers/responseHandler';
import { errorHandler } from './helpers/errorHandler';
import { setAuthHeader } from './helpers/setAuthHeader';
import { baseURL } from './helpers/baseURL';

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
