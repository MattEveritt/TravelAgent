import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosTripsService} from '../../../api';

export const updateTrip = createAsyncThunk(
  'trips/updateTrip',
  async (action, {getState, rejectWithValue}) => {
    const userId = getState().userAuth.userId;
    const res = await axiosTripsService({
      method: 'put',
      url: '/updateTrip',
      data: {
        destination: action.destination,
        budget: action.budget,
        from: action.from,
        to: action.to,
        travellers: action.travellers,
        users: action.users,
        userId: userId,
        tripId: action.id,
      },
    });
    if (res.status === 204) {
      return action;
    } else {
      rejectWithValue(res.status);
    }
  },
);

export const updateTripCases = {
  fulfilled: (state, action) => {
    const updatedTrips = state.trips.map(trip => {
      if (trip.id === action.payload.id) {
        return {...action.payload};
      } else {
        return trip;
      }
    });
    return {
      ...state,
      trips: updatedTrips,
    };
  },
  rejected: (state, action) => {
    console.log('updateTrip rejected', action.payload);
  },
};
