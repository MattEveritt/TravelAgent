import axios from 'axios';
import { baseURL, responseHandler, errorHandler, setAuthHeader } from './helpers';

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
