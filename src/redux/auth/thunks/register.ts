import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosUsersService} from '../../../api';
import {login} from './login';

export const register = createAsyncThunk(
  'userAuth/register',
  async (action, {rejectWithValue, dispatch}) => {
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
    } catch (e) {
      return e.response.status;
    }
  },
);

export const registerCases = {
  fulfilled: (state, action) => {},
  rejected: (state, action) => {},
};
