import {createSlice} from '@reduxjs/toolkit';
import {
  confirmFlightPrice, 
  bookFlight, 
  airlineNameLookup, 
  deleteBooking, 
  fetchBooking, 
  fetchCheapestDates, 
  fetchClosestAirport, 
  fetchFlights, 
  fetchFlightUpsells, 
  fetchPriceAnalysis, 
  fetchSeatMap, 
  searchCity
} from './thunks';

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
    builder.addCase(fetchFlights.fulfilled, (state: any, action: any) => {
      state.dictionaries = action.payload.dictionaries;
      state.flightOffers = [...action.payload.data];
    });
    builder.addCase(bookFlight.fulfilled, (state, action) => {
      state.bookedFlights = action.payload;
    });
    builder.addCase(bookFlight.rejected, (state, action) => {
    })
  },
});

export default flightsSlice.reducer;
