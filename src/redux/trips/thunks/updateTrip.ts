import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosTripsService} from '../../../api';

type ActionPayload = {
  destination: string,
  budget: number,
  from: Date,
  to: Date,
  travellers: [string],
  users: [string],
  id: string,
}
export const updateTrip = createAsyncThunk(
  'trips/updateTrip',
  async (action: ActionPayload, {getState, rejectWithValue}) => {
    const userId = (getState as any)().userAuth.userId;
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
      return rejectWithValue(res.status);
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
