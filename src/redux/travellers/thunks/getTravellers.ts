import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosUsersService} from '../../../api';

export const getTravellers = createAsyncThunk(
  'travellers/getTravellers',
  async (action, {getState, rejectWithValue}) => {
    // @ts-expect-error TS(2571): Object is of type 'unknown'.
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
  fulfilled: (state: any, action: any) => {
    return {
      ...state,
      travellers: action.payload,
    };
  },
  rejected: (state: any, action: any) => {
    console.error('get travellers request failed: ', action.payload.status);
  },
};
