import { createSlice } from '@reduxjs/toolkit';
import { FCLocalized } from '../../localization/FCLocalized';

interface InitialState {
  trip: {
    departureAirport: {
      airportName: string;
      iataCode: string;
      cityName: string;
    };
    departureAirportValid: boolean;
    type: string;
    dates: {
      startDate: string;
      untilDate: string;
    }[];
    datesValid: boolean;
    destinations: {
      destination: string;
      googlePlaceId: string;
      iataCode: string;
    }[];
    destinationsValid: boolean;
    travellers: [];
    signedOutTravellers: {
      adults: number;
      youth: number;
      infants: number;
      infantsOnLap: number;
    };
    travellersValid: boolean;
    transport: string[];
    includeAccomodation: boolean;
  };
}

const newDateObj = {
  startDate: FCLocalized('Outbound'),
  untilDate: FCLocalized('Inbound'),
};

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
    destinations: [
      { destination: FCLocalized('Search'), googlePlaceId: '', iataCode: '' },
    ],
    destinationsValid: true,
    travellers: [],
    signedOutTravellers: {
      adults: 0,
      youth: 0,
      infants: 0,
      infantsOnLap: 0,
    },
    travellersValid: true,
    transport: [''],
    includeAccomodation: false,
  },
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    resetBookingSlice: () => initialState,
    setTripType: (state, action) => {
      state.trip.type = action.payload;
    },
    addBookingDate: state => {
      state.trip.dates = [...state.trip.dates, newDateObj];
      state.trip.destinations = [
        ...state.trip.destinations,
        { destination: FCLocalized('Search'), googlePlaceId: '', iataCode: '' },
      ];
      state.trip.transport = [...state.trip.transport, ''];
    },
    removeBookingDate: state => {
      const newDates = [...state.trip.dates];
      newDates.pop();
      state.trip.dates = newDates;

      const newDestinations = [...state.trip.destinations];
      newDestinations.pop();
      state.trip.destinations = newDestinations;

      const newTransportArray = [...state.trip.transport];
      newTransportArray.pop();
      state.trip.transport = newTransportArray;
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
    setTravellersValidity: (state, action) => {
      state.trip.travellersValid = action.payload;
    },
    setBookingDestinations: (state, action) => {
      state.trip.destinations = action.payload;
    },
    setBookingTravellers: (state, action) => {
      state.trip.travellers = action.payload;
    },
    setAdults: (state, action) => {
      state.trip.signedOutTravellers.adults = action.payload;
    },
    setYouth: (state, action) => {
      state.trip.signedOutTravellers.youth = action.payload;
    },
    setInfants: (state, action) => {
      state.trip.signedOutTravellers.infants = action.payload;
    },
    setInfantsOnLap: (state, action) => {
      state.trip.signedOutTravellers.infantsOnLap = action.payload;
    },
    setBookingTransport: (state, action) => {
      state.trip.transport = action.payload;
    },
    setDepartureAirport: (state, action) => {
      state.trip.departureAirport = action.payload;
    },
    clearTripBookingState: state => {
      const initialTrip = initialState.trip;
      state.trip = { ...initialTrip };
    },
    setIncludeAccomodation: (state, action) => {
      state.trip.includeAccomodation = action.payload;
    },
  },
});

export const {
  setBookingDates,
  setBookingDestinations,
  addBookingDate,
  removeBookingDate,
  setTripType,
  setBookingTravellers,
  setAdults,
  setYouth,
  setInfants,
  setInfantsOnLap,
  setBookingTransport,
  setDepartureAirport,
  clearTripBookingState,
  setDatesValidity,
  setDepartureAirportValidity,
  setDestinationsValidity,
  setTravellersValidity,
  setIncludeAccomodation,
  resetBookingSlice,
} = bookingSlice.actions;
export const selectBookingObject = (state: any) => state.trip;
export default bookingSlice.reducer;
