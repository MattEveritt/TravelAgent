import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosTripsService} from '../../../api';

interface ActionPayload {
  destination: string,
  budget: number,
  dates: string,
  travellers: [],
  users: [],
}

export const saveTrip = createAsyncThunk(
  'trips/saveTrip',
  async (action: ActionPayload, {getState}) => {
    try {
      const userId = (getState as any)().userAuth.userId;
      const { data } = await axiosTripsService({
    url: '/saveTrip',
    data: {
        destination: action.destination,
        budget: action.budget,
        dates: action.dates,
        travellers: action.travellers,
        users: action.users,
        userId: userId,
    },
});
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
