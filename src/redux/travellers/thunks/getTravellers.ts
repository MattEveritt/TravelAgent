import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosUsersService} from '../../../api';

export const getTravellers = createAsyncThunk(
  'travellers/getTravellers',
  async (action, {getState, rejectWithValue}) => {
    const userId = (getState as any)().userAuth.userId;
    const res = await axiosUsersService({
      url: '/travellers',
      method: 'get',
      params: {
        userId: userId,
      },
    });
    if (res.status !== 200) {
      rejectWithValue(res);
    }
    return res.data;
  },
);

export const getTravellersCases = {
  fulfilled: (state: any, action: any) => {
    console.log(action.payload);
    return {
      ...state,
      travellers: action.payload,
    };
  },
  rejected: (state: any, action: any) => {
    console.error('get travellers request failed: ', action.payload.status);
  },
};
