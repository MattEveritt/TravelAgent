import axios from 'axios';
import { responseHandler } from './helpers/responseHandler';
import { errorHandler } from './helpers/errorHandler';
import { setAuthHeader } from './helpers/setAuthHeader';
import { baseURL } from './helpers/baseURL';

const axiosFlightsService = axios.create({
  baseURL: `${baseURL}/flights`,
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosFlightsService.interceptors.request.use(config =>
  setAuthHeader(config),
);

axiosFlightsService.interceptors.response.use(
  response => responseHandler(response),
  error => errorHandler(error),
);

export default axiosFlightsService;
