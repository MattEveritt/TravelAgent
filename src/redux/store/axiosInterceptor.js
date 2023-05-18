import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

let headers = {};

const axiosInstance = axios.create({
  baseURL: 'https://', //backendurl
  headers,
});

axiosInstance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject('errorbitches: ', error);
  },
);

export default axiosInstance;
