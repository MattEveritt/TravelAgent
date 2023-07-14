import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosUsersService} from '../../../api';

export const getTravellers = createAsyncThunk(
  'travellers/getTravellers',
  async (action, {getState, rejectWithValue}) => {
    const userId = getState().userAuth.userId;
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
  fulfilled: (state, action) => {
    console.log(action.payload);
    return {
      ...state,
      travellers: action.payload,
    };
  },
  rejected: (state, action) => {
    console.error('get travellers request failed: ', action.payload.status);
  },
};
