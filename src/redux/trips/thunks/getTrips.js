import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosUsersService} from '../../../api';

export const getTrips = createAsyncThunk(
  'trips/getTrips',
  async (action, {getState}) => {
    try {
      const userId = getState().userAuth.userId;
      const {data} = await axiosUsersService({
        url: '/trips',
        method: 'get',
        params: {
          userId: userId,
        },
      });
      console.log(data);
      return data;
    } catch (e) {
      console.log(e);
      return e.message;
    }
  },
);

export const getTripsCases = {
  fulfilled: (state, action) => {
    if (action.payload.e.error) {
      console.error(action.payload.e);
    }
    return {
      ...state,
      trips: action.payload,
    };
  },
};
