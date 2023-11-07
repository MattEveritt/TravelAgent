import { createSlice } from '@reduxjs/toolkit';
import { FCLocalized } from '../../localization/FCLocalized';

interface InitialState{
  trip: {
    departureAirport: {
      airportName: string,
      iataCode: string,
      cityName: string,
    },
    departureAirportValid: boolean,
    type: string,
    dates: {
      startDate: string,
      untilDate: string,
    }[],
    datesValid: boolean,
    destinations: {
      destination: string,
      googlePlaceId?: string
    }[],
    destinationsValid: boolean,
    travellers: [],
    transport: string
  }
}

const newDateObj = { startDate: FCLocalized('Outbound'), untilDate: FCLocalized('Inbound') };

const initialState: InitialState = {
  trip: {
    departureAirport: {
      airportName: FCLocalized('Search'),
      cityName: '',
      iataCode: '',
    },
    departureAirportValid: true,
    type: 'One-way',
    dates: [newDateObj],
    datesValid: true,
    destinations: [{ destination: FCLocalized('Search') }],
    destinationsValid: true,
    travellers: [],
    transport: '',
  }
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setTripType: (state, action) => {
      state.trip.type = action.payload;
    },
    addBookingDate: (state) => {
      state.trip.dates = [...state.trip.dates, newDateObj];
      state.trip.destinations = [...state.trip.destinations, { destination: FCLocalized('Search') }];
    },
    removeBookingDate: (state) => {
      const newDates = [...state.trip.dates];
      newDates.pop();
      state.trip.dates = newDates;

      const newDestinations = [...state.trip.destinations];
      newDestinations.pop();
      state.trip.destinations = newDestinations;

    },
    setBookingDates: (state, action) => {
      state.trip.dates = [...action.payload];
    },
    setDatesValidity: (state, action) => {
      state.trip.datesValid = action.payload;
    },
    setDestinationsValidity: (state, action) => {
      state.trip.destinationsValid = action.payload;
    },
    setDepartureAirportValidity: (state, action) => {
      state.trip.departureAirportValid = action.payload;
    },
    setBookingDestinations: (state, action) => {
      state.trip.destinations = action.payload;
    },
    setBookingTravellers: (state, action) => {
      state.trip.travellers = action.payload;
    },
    setBookingTransport: (state, action) => {
      state.trip.transport = action.payload;
    },
    setDepartureAirport: (state, action) => {
      state.trip.departureAirport = action.payload;
    },
    clearTripBookingState: (state) => {
      state.trip = { ...initialState.trip };
    }
  },
});

export const {
  setBookingDates, 
  setBookingDestinations, 
  addBookingDate, 
  removeBookingDate, 
  setTripType,
  setBookingTravellers,
  setBookingTransport,
  setDepartureAirport,
  clearTripBookingState,
  setDatesValidity,
  setDepartureAirportValidity,
  setDestinationsValidity,
} = bookingSlice.actions;
export const selectBookingObject = (state: any) => state.trip;
export default bookingSlice.reducer;