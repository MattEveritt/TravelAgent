import {createSlice} from '@reduxjs/toolkit';
import {getTrips, getTripsCases} from './thunks/getTrips';
import {saveTrip, saveTripCases} from './thunks/saveTrip';
import {deleteTrip, deleteTripCases} from './thunks/deleteTrip';
import {updateTrip, updateTripCases} from './thunks/updateTrip';

interface InitialState{
  trips: []
}

const initialState: InitialState = {
  trips: [],
};

const tripsSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getTrips.fulfilled, getTripsCases.fulfilled),
    builder.addCase(saveTrip.fulfilled, saveTripCases.fulfilled),
    builder.addCase(saveTrip.rejected, saveTripCases.rejected),
    builder.addCase(deleteTrip.fulfilled, deleteTripCases.fulfilled),
    builder.addCase(deleteTrip.rejected, deleteTripCases.rejected),
    builder.addCase(updateTrip.fulfilled, updateTripCases.fulfilled),
    builder.addCase(updateTrip.rejected, updateTripCases.rejected)
  },
});

export default tripsSlice.reducer;
