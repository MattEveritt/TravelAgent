import { createSlice } from '@reduxjs/toolkit';
import { bookFlight, fetchFlights } from './thunks';

const initialState = {
  itineraries: null,
  bookedFlights: [],
  flightOffers: [],
};

const flightsSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {
    resetFlightsSlice: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(fetchFlights.fulfilled, (state: any, action: any) => {
      state.flightOffers = [...state.flightOffers, [...action.payload]];
    });
    builder.addCase(bookFlight.fulfilled, (state, action) => {
      state.bookedFlights = action.payload;
    });
    builder.addCase(bookFlight.rejected, () => {});
  },
});

export const { resetFlightsSlice } = flightsSlice.actions;
export default flightsSlice.reducer;
