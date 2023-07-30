import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosTripsService} from '../../../api';

export const deleteTrip = createAsyncThunk(
  'trips/deleteTrip',
  async (action: {}, {rejectWithValue}) => {
    const {status} = await axiosTripsService({
      url: '/deleteTrip',
      method: 'delete',
      params: {
        id: action,
      },
    });
    if (status === 204) {
      return action;
    } else {
      return rejectWithValue(status);
    }
  },
);

export const deleteTripCases = {
  fulfilled: (state: any, action: any) => {
    const newTrips = state.trips.filter((trip: any) => trip.id !== action.payload);
    return {
      ...state,
      trips: newTrips,
    };
  },
  rejected: (state: any, action: any) => {
    console.log(action.payload);
    console.log('deleteTrip rejected');
  },
};
