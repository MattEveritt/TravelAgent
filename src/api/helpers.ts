import {store} from '../redux/store/store';
import {refreshAccessToken} from '../redux/auth/thunks/refreshAccessToken';
import * as SecureStore from 'expo-secure-store';
// @ts-expect-error TS(2307): Cannot find module '@env' or its corresponding typ... Remove this comment to see the full error message
import {URL} from '@env';
import {axiosPost} from '.';

export const getAccessToken = () => {
  // @ts-expect-error TS(2339): Property 'accessToken' does not exist on type '{ i... Remove this comment to see the full error message
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

export const errorHandler = async (error: any) => {
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

export const responseHandler = (response: any) => {
  return response;
};

export const setAuthHeader = (config: any) => {
  const accessToken = getAccessToken(); // Replace with your logic to get the access token
  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
};

export const baseURL = `${URL}/api`;
