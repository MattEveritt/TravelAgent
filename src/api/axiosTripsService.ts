import axios from 'axios';
import { baseURL, responseHandler, errorHandler, setAuthHeader } from './helpers';

const axiosTripsService = axios.create({
  baseURL: `${baseURL}/trips`,
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosTripsService.interceptors.request.use(config => setAuthHeader(config));

axiosTripsService.interceptors.response.use(
  response => responseHandler(response),
  error => errorHandler(error),
);

export default axiosTripsService;
