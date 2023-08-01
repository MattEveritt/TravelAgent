import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosUsersService} from '../../../api';
import {login} from './login';

export const register = createAsyncThunk(
  'userAuth/register',
  async (action: {email: string, username: string, password: string}, {rejectWithValue, dispatch}) => {
    const {email, username, password} = action;
    try {
      const res = await axiosUsersService({
        data: {
          email: email,
          username: username,
          password: password,
        },
      });
      if (res.status === 201) {
        dispatch(login({username, password}));
        return res.data;
      }
    } catch (e: any) {
      return e.response.status;
    }
  },
);

export const registerCases = {
  fulfilled: (state: any, action: any) => {},
  rejected: (state: any, action: any) => {},
};
