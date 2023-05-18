import {createSlice} from '@reduxjs/toolkit';
import {fetchFlights, fetchFlightsCases} from './thunks';

const initialState = {
  itineraries: null,
};

const flightsSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchFlights.fulfilled, fetchFlightsCases.fulfilled);
  },
});

// export const {connectedIdUpdated, resetAccountReducerBackendError} =
//   accountSlice.actions;

export default flightsSlice.reducer;
