import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosUsersService } from '../../../api';
import { login } from './login';

type Action = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};
export const register = createAsyncThunk(
  'userAuth/register',
  async (action: Action, { dispatch }) => {
    const { email, firstName, lastName, password } = action;
    try {
      const res = await axiosUsersService({
        data: {
          email,
          firstName,
          lastName,
          password,
        },
      });
      if (res.status === 201) {
        dispatch(login({ email, password }));
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
