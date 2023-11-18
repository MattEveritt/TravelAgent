import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosTripsService } from '../../../api';

interface ActionPayload {
  type: string;
  departureAirport: {};
  destinations: {}[];
  dates: {}[];
  travellers: [];
  transport: string[];
}

export const saveTrip = createAsyncThunk(
  'trips/saveTrip',
  async (action: ActionPayload, { getState }) => {
    try {
      const { userId, isLoggedIn } = (getState as any)().userAuth;

      let res;

      const tripData = {
        type: action.type,
        departureAirport: action.departureAirport,
        destinations: action.destinations,
        dates: action.dates,
        travellers: action.travellers,
        transport: action.transport,
        userId: userId,
      };

      if (isLoggedIn) {
        const { data } = await axiosTripsService({
          url: '/saveTrip',
          data: tripData,
        });
        res = data;
      } else {
        res = tripData;
      }

      return res;
    } catch (e: any) {
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
  rejected: () => {
    console.log('saveTrip rejected');
  },
};
