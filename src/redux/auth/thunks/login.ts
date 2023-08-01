import {createAsyncThunk} from '@reduxjs/toolkit';
import * as SecureStore from 'expo-secure-store';
import {axiosLogin} from '../../../api';

export const login = createAsyncThunk('userAuth/login', async (action: { username: string; password: string}) => {
  const {username, password} = action;
  try {
    const {data} = await axiosLogin({
      data: {
        username: username,
        password: password,
      },
    });
    if (data.refreshToken) {
      await SecureStore.setItemAsync('refreshToken', data.refreshToken).catch(
        error => {
          console.error('Error storing refreshToken: ', error);
        },
      );
    }
    return data;
  } catch (e) {
    console.log(e);
    return (e as any).response.status;
  }
});

export const loginCases = {
  fulfilled: (state: any, action: any) => {
    if (!action.payload.token) {
      if (action.payload === 401) {
        return {
          ...state,
          logInError: 'Incorrect username or password',
        };
      }
      return {
        ...state,
        logInError: 'Login error',
      };
    }
    if (action.payload.token && action.payload.userId) {
      return {
        ...state,
        userId: action.payload.userId,
        accessToken: action.payload.token,
        isLoggedIn: true,
        logInError: undefined,
      };
    }
  },
};
