import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosTripsService} from '../../../api';

export const updateTrip = createAsyncThunk(
  'trips/updateTrip',
  async (action, {getState, rejectWithValue}) => {
    // @ts-expect-error TS(2571): Object is of type 'unknown'.
    const userId = getState().userAuth.userId;
    const res = await axiosTripsService({
      method: 'put',
      url: '/updateTrip',
      data: {
        // @ts-expect-error TS(2339): Property 'destination' does not exist on type 'voi... Remove this comment to see the full error message
        destination: action.destination,
        // @ts-expect-error TS(2339): Property 'budget' does not exist on type 'void'.
        budget: action.budget,
        // @ts-expect-error TS(2339): Property 'from' does not exist on type 'void'.
        from: action.from,
        // @ts-expect-error TS(2339): Property 'to' does not exist on type 'void'.
        to: action.to,
        // @ts-expect-error TS(2339): Property 'travellers' does not exist on type 'void... Remove this comment to see the full error message
        travellers: action.travellers,
        // @ts-expect-error TS(2339): Property 'users' does not exist on type 'void'.
        users: action.users,
        userId: userId,
        // @ts-expect-error TS(2339): Property 'id' does not exist on type 'void'.
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
