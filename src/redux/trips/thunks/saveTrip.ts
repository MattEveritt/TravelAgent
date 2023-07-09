import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosTripsService} from '../../../api';

export const saveTrip = createAsyncThunk(
  'trips/saveTrip',
  async (action, {getState}) => {
    try {
      // @ts-expect-error TS(2571): Object is of type 'unknown'.
      const userId = getState().userAuth.userId;
      const {data} = await axiosTripsService({
        url: '/saveTrip',
        data: {
          // @ts-expect-error TS(2339): Property 'destination' does not exist on type 'voi... Remove this comment to see the full error message
          destination: action.destination,
          // @ts-expect-error TS(2339): Property 'budget' does not exist on type 'void'.
          budget: action.budget,
          // @ts-expect-error TS(2339): Property 'dates' does not exist on type 'void'.
          dates: action.dates,
          // @ts-expect-error TS(2339): Property 'travellers' does not exist on type 'void... Remove this comment to see the full error message
          travellers: action.travellers,
          // @ts-expect-error TS(2339): Property 'users' does not exist on type 'void'.
          users: action.users,
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
