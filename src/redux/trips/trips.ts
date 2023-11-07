import { createSlice } from '@reduxjs/toolkit';
import { getTrips, getTripsCases } from './thunks/getTrips';
import { saveTrip, saveTripCases } from './thunks/saveTrip';
import { deleteTrip, deleteTripCases } from './thunks/deleteTrip';
import { updateTrip, updateTripCases } from './thunks/updateTrip';
import { getDestinationImg } from './thunks';

interface InitialState{
  trips: [],
  isBooking: boolean,
}

const initialState: InitialState = {
  trips: [],
  isBooking: false,
};

const tripsSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {
    toggleBookingFlow: (state) => {
      state.isBooking = !state.isBooking;
    },
  },
  extraReducers: builder => {
    builder.addCase(getTrips.fulfilled, getTripsCases.fulfilled),
    builder.addCase(saveTrip.fulfilled, saveTripCases.fulfilled),
    builder.addCase(saveTrip.rejected, saveTripCases.rejected),
    builder.addCase(deleteTrip.fulfilled, deleteTripCases.fulfilled),
    builder.addCase(deleteTrip.rejected, deleteTripCases.rejected),
    builder.addCase(updateTrip.fulfilled, updateTripCases.fulfilled),
    builder.addCase(updateTrip.rejected, updateTripCases.rejected);
    builder.addCase(getDestinationImg.fulfilled, () => {});
  },
});

export const { toggleBookingFlow } = tripsSlice.actions;
export default tripsSlice.reducer;