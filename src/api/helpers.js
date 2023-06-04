import {store} from '../redux/store/store';
import {refresh} from '../redux/auth/thunks/refresh';
import * as SecureStore from 'expo-secure-store';

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

export const errorHandler = error => {
  return Promise.reject(error);
};

export const responseHandler = async response => {
  if (response.status === 401) {
    await store.dispatch(refresh());
    console.log(response);
  }
  return response;
};

export const setAuthHeader = config => {
  const accessToken = getAccessToken(); // Replace with your logic to get the access token
  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
};

export const baseURL = 'http://10.0.2.2:3001/api';
