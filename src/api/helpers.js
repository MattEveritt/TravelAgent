import Config from 'react-native-config';
import {store} from '../redux/store/store';
import {refreshAccessToken} from '../redux/auth/thunks/refreshAccessToken';
import * as SecureStore from 'expo-secure-store';
import {axiosPost} from '.';

export const getAccessToken = () => {
  const token = store.getState().userAuth?.accessToken;
  return token;
};

export const getRefreshToken = async () => {
  try {
    const refreshToken = await SecureStore.getItemAsync('refreshToken');
    return refreshToken;
  } catch (e) {
    return undefined;
  }
};

export const errorHandler = async error => {
  if (error.response?.status === 401) {
    try {
      await store.dispatch(refreshAccessToken());
      const newRequest = {...error.config};
      newRequest.headers.Authorization = `Bearer ${getAccessToken()}`;
      return axiosPost(newRequest);
    } catch (refreshError) {
      console.log('Error while refreshing access token: ', refreshError);
    }
  }
  return Promise.reject(error);
};

export const responseHandler = response => {
  return response;
};

export const setAuthHeader = config => {
  const accessToken = getAccessToken(); // Replace with your logic to get the access token
  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
};

export const baseURL = `${Config.API_URL}/api`;
