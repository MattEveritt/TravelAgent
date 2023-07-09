import {createSlice} from '@reduxjs/toolkit';
import {getTrips, getTripsCases} from './thunks/getTrips';
import {saveTrip, saveTripCases} from './thunks/saveTrip';
import {deleteTrip, deleteTripCases} from './thunks/deleteTrip';
import {updateTrip, updateTripCases} from './thunks/updateTrip';

const initialState = {
  trips: [],
  value: 0,
};

const tripsSlice = createSlice({
  name: 'trips',
  initialState,
  extraReducers: builder => {
    builder.addCase(getTrips.fulfilled, getTripsCases.fulfilled);
    builder.addCase(
      saveTrip.fulfilled,
      saveTripCases.fulfilled,
      saveTripCases.rejected,
    );
    builder.addCase(
      deleteTrip.fulfilled,
      deleteTripCases.fulfilled,
      deleteTripCases.rejected,
    );
    builder.addCase(
      updateTrip.fulfilled,
      updateTripCases.fulfilled,
      updateTripCases.rejected,
    );
  },
});

export default tripsSlice.reducer;
