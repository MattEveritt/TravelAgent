import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosTripsService} from '../../../api';

export const saveTrip = createAsyncThunk(
  'trips/saveTrip',
  async (action, {getState}) => {
    try {
      const userId = getState().userAuth.userId;
      const {data} = await axiosTripsService({
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
    } catch (e) {
      throw new Error(e);
    }
  },
);

export const saveTripCases = {
  fulfilled: (state, action) => {
    return {
      ...state,
      trips: [...state.trips, action.payload],
    };
  },
  rejected: (state, action) => {
    console.log('saveTrip rejected');
  },
};
