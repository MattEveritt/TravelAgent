import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosUsersService} from '../../../api';

export const getTrips = createAsyncThunk(
  'trips/getTrips',
  async (action, {getState}) => {
    try {
      const userId = (getState as any)().userAuth.userId;
      const {data} = await axiosUsersService({
        url: '/trips',
        method: 'get',
        params: {
          userId: userId,
        },
      });
      return data;
    } catch (e) {
      return (e as any).message;
    }
  },
);

export const getTripsCases = {
  fulfilled: (state: any, action: any) => {
    if (action.payload.e) {
      console.error(action.payload.e);
    }
    return {
      ...state,
      trips: action.payload,
    };
  },
};
