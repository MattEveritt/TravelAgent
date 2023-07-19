import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosUsersService} from '../../../api';

export const resetPassword = createAsyncThunk(
  'userAuth/resetPassword',
  async (action) => {
    try {
      const {status} = await axiosUsersService({
        url:'/resetpassword',
        data: {
          email: action,
        },
      });
      return status;
    } catch (e) {
      return e.response.status;
    }
      
    }
);

export const resetPasswordCases = {
  fulfilled: (state, action) => {},
  rejected: (state, action) => {},
};