import axios from 'axios';
import { baseURL, responseHandler, errorHandler, setAuthHeader } from './helpers';

const axiosTravellersService = axios.create({
  baseURL: `${baseURL}/travellers`,
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosTravellersService.interceptors.request.use(config =>
  setAuthHeader(config),
);

axiosTravellersService.interceptors.response.use(
  response => responseHandler(response),
  error => errorHandler(error),
);

export default axiosTravellersService;
