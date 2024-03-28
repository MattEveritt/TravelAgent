import { createSlice } from '@reduxjs/toolkit';
import { bookFlight, fetchFlights, fetchSeatMap } from './thunks';
import { SeatMap } from '../../types/seatMapTypes';

interface IFlightsState {
  itineraries: any;
  bookedFlights: any;
  flightOffers: any;
  fetchFlightsStatus: string;
  additionalOptions: {
    extraBaggage: any;
  };
  selectedFlightOfferID: number | null;
  cityNames: { destination: string; departure: string }[];
  seatMapData: SeatMap | null;
  seatMapStatus: 'idle' | 'loading' | 'failed';
  flightsConfirmed: boolean;
  selectedOffer: any;
}

const initialState: IFlightsState = {
  itineraries: null,
  bookedFlights: [],
  flightOffers: [],
  fetchFlightsStatus: 'idle',
  additionalOptions: {
    extraBaggage: null,
  },
  selectedFlightOfferID: null,
  cityNames: [],
  seatMapData: null,
  seatMapStatus: 'idle',
  flightsConfirmed: false,
  selectedOffer: [],
};

const flightsSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {
    setExtraBaggage: (state, action) => {
      state.additionalOptions.extraBaggage = action.payload;
    },
    setFlightsConfirmed: (state, action) => {
      state.flightsConfirmed = action.payload;
    },
    setSelectedFlightOffer: (state, action) => {
      state.cityNames = action.payload.cityNames;
      state.selectedFlightOfferID = action.payload.flightOfferID;
    },
    resetFlightsSlice: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(fetchFlights.pending, state => {
      state.fetchFlightsStatus = 'loading';
    });
    builder.addCase(fetchFlights.fulfilled, (state, action) => {
      const newFlightOffers = action.payload;
      state.flightOffers = newFlightOffers;
      state.fetchFlightsStatus = 'idle';
    });
    builder.addCase(fetchFlights.rejected, state => {
      state.fetchFlightsStatus = 'idle';
    });
    builder.addCase(fetchSeatMap.fulfilled, (state, action) => {
      state.seatMapStatus = 'idle';
      state.seatMapData = action.payload;
    });
    builder.addCase(fetchSeatMap.pending, state => {
      state.seatMapStatus = 'loading';
    });
    builder.addCase(fetchSeatMap.rejected, state => {
      state.seatMapStatus = 'failed';
    });
    builder.addCase(bookFlight.fulfilled, (state, action) => {
      state.bookedFlights = action.payload;
    });
    builder.addCase(bookFlight.rejected, () => {});
  },
});

export const {
  resetFlightsSlice,
  setExtraBaggage,
  setFlightsConfirmed,
  setSelectedFlightOffer,
} = flightsSlice.actions;
export default flightsSlice.reducer;
