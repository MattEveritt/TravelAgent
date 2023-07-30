import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosTripsService} from '../../../api';

export const saveTrip = createAsyncThunk(
  'trips/saveTrip',
  async (action, {getState}) => {
    try {
      const userId = (getState as any)().userAuth.userId;
      const { data } = await axiosTripsService({
    url: '/saveTrip',
    data: {
        destination: (action as any).destination,
        budget: (action as any).budget,
        dates: (action as any).dates,
        travellers: (action as any).travellers,
        users: (action as any).users,
        userId: userId,
    },
});
      return data;
    } catch (e) {
      // @ts-expect-error TS(2769): No overload matches this call.
      throw new Error(e);
    }
  },
);

export const saveTripCases = {
  fulfilled: (state: any, action: any) => {
    return {
      ...state,
      trips: [...state.trips, action.payload],
    };
  },
  rejected: (state: any, action: any) => {
    console.log('saveTrip rejected');
  },
};
