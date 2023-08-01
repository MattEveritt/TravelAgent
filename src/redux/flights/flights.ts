import {createSlice} from '@reduxjs/toolkit';
import {fetchFlights, fetchFlightsCases} from './thunks/fetchFlights';
import { confirmFlightPrice } from './thunks/confirmFlightPrice';
import { bookFlight } from './thunks/bookFlight';

const initialState = {
  itineraries: null,
  bookedFlights: [],
  flightOffers: [],
};

const flightsSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchFlights.fulfilled, fetchFlightsCases.fulfilled);
    builder.addCase(bookFlight.fulfilled, (state, action) => {
      state.bookedFlights = action.payload;
    });
    builder.addCase(bookFlight.rejected, (state, action) => {
    })
  },
});

export default flightsSlice.reducer;
