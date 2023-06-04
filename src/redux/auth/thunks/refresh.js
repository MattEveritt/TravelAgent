import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosRefresh} from '../../../api';

export const refreshAccessToken = createAsyncThunk(
  'userAuth/refreshAccessToken',
  async action => {
    try {
      const {data} = await axiosRefresh();

      return data;
    } catch (e) {
      return e.response.status;
    }
  },
);

export const refreshAxiosTokenCases = {
  fulfilled: (state, action) => {
    if (!action.payload.token) {
      if (action.payload === 401) {
        return {
          ...state,
          isLoggedIn: false,
        };
      }
    }
    if (action.payload.token) {
      return {
        ...state,
        accessToken: action.payload.token,
      };
    }
  },
};
