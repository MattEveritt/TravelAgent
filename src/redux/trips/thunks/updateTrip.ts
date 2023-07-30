import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosTripsService} from '../../../api';

export const updateTrip = createAsyncThunk(
  'trips/updateTrip',
  async (action, {getState, rejectWithValue}) => {
    const userId = (getState as any)().userAuth.userId;
    const res = await axiosTripsService({
    method: 'put',
    url: '/updateTrip',
    data: {
        destination: (action as any).destination,
        budget: (action as any).budget,
        from: (action as any).from,
        to: (action as any).to,
        travellers: (action as any).travellers,
        users: (action as any).users,
        userId: userId,
        tripId: (action as any).id,
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
  fulfilled: (state: any, action: any) => {
    const updatedTrips = state.trips.map((trip: any) => {
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
  rejected: (state: any, action: any) => {
    console.log('updateTrip rejected', action.payload);
  },
};
