import axios from 'axios';
import { responseHandler } from './helpers/responseHandler';
import { errorHandler } from './helpers/errorHandler';
import { setAuthHeader } from './helpers/setAuthHeader';
import { baseURL } from './helpers/baseURL';

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
