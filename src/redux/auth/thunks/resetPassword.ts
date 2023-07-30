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
      return (e as any).response.status;
    }
      
    }
);

export const resetPasswordCases = {
  fulfilled: (state: any, action: any) => {},
  rejected: (state: any, action: any) => {},
};
