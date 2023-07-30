import {createSlice} from '@reduxjs/toolkit';
import {getTrips, getTripsCases} from './thunks/getTrips';
import {saveTrip, saveTripCases} from './thunks/saveTrip';
import {deleteTrip, deleteTripCases} from './thunks/deleteTrip';
import {updateTrip, updateTripCases} from './thunks/updateTrip';

const initialState = {
  trips: [],
  value: 0,
};

// @ts-expect-error TS(2345): Argument of type '{ name: "trips"; initialState: {... Remove this comment to see the full error message
const tripsSlice = createSlice({
  name: 'trips',
  initialState,
  extraReducers: builder => {
    builder.addCase(getTrips.fulfilled, getTripsCases.fulfilled);
    builder.addCase(
      saveTrip.fulfilled,
      saveTripCases.fulfilled,
      // @ts-expect-error TS(2554): Expected 2 arguments, but got 3.
      saveTripCases.rejected,
    );
    builder.addCase(
      deleteTrip.fulfilled,
      deleteTripCases.fulfilled,
      // @ts-expect-error TS(2554): Expected 2 arguments, but got 3.
      deleteTripCases.rejected,
    );
    builder.addCase(
      updateTrip.fulfilled,
      updateTripCases.fulfilled,
      // @ts-expect-error TS(2554): Expected 2 arguments, but got 3.
      updateTripCases.rejected,
    );
  },
});

export default tripsSlice.reducer;
