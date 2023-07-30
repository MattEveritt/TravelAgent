import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosUsersService} from '../../../api';
import {login} from './login';

export const register = createAsyncThunk(
  'userAuth/register',
  async (action, {rejectWithValue, dispatch}) => {
    // @ts-expect-error TS(2339): Property 'email' does not exist on type 'void'.
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
        // @ts-expect-error TS(2554): Expected 0 arguments, but got 1.
        dispatch(login({username, password}));
        return res.data;
      }
    } catch (e) {
      return (e as any).response.status;
    }
  },
);

export const registerCases = {
  fulfilled: (state: any, action: any) => {},
  rejected: (state: any, action: any) => {},
};
