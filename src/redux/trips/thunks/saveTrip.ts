import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosTripsService } from '../../../api';

interface ActionPayload {
  type: string,
  departureAirport: {},
  destinations: {}[],
  dates: {}[],
  travellers: [],
  transport: string,
}

export const saveTrip = createAsyncThunk(
  'trips/saveTrip',
  async (action: ActionPayload, { getState }) => {
    try {
      const userId = (getState as any)().userAuth.userId;
      console.log(action);
      const { data } = await axiosTripsService({
        url: '/saveTrip',
        data: {
          type: action.type,
          departureAirport: action.departureAirport,
          destinations: action.destinations,
          dates: action.dates,
          travellers: action.travellers,
          transport: action.transport,
          userId: userId,
        },
      });
      console.log(data);
      return data;
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
  rejected: (state: any, action: any) => {
    console.log('saveTrip rejected');
  },
};
