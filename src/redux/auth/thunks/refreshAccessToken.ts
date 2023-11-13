import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosRefresh from '../../../api/axiosRefresh';
import * as SecureStore from 'expo-secure-store';

export const refreshAccessToken = createAsyncThunk(
  'userAuth/refreshAccessToken',
  async (action, {rejectWithValue}) => {
    const refreshToken = await SecureStore.getItemAsync('refreshToken');
    const res = await axiosRefresh({
      data: {
        refreshToken: refreshToken,
      },
    });

    if (res.status !== 200) {
      rejectWithValue(res.status);
    }

    if (res.data.refreshToken) {
      await SecureStore.setItemAsync(
        'refreshToken',
        res.data.refreshToken,
      ).catch(error => {
        console.error('Error storing refreshToken: ', error);
      });
    }

    return res.data;
  },
);

export const refreshAccessTokenCases = {
  fulfilled: (state: any, action: any) => {
    return {
      ...state,
      accessToken: action.payload.token,
    };
  },
  rejected: (state: any, action: any) => {
    if (action.payload === 401) {
      return {
        ...state,
        isLoggedIn: false,
      };
    }
    return {
      ...state,
      isLoggedIn: false,
    };
  },
};
