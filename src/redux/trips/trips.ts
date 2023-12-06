import { createSlice } from '@reduxjs/toolkit';
import { getTrips, getTripsCases } from './thunks/getTrips';
import { saveTrip, saveTripCases } from './thunks/saveTrip';
import { deleteTrip, deleteTripCases } from './thunks/deleteTrip';
import { updateTrip, updateTripCases } from './thunks/updateTrip';
import { getDestinationImg } from './thunks';

export interface TripsType {
  id?: string;
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
  userId?: string;
  createdAt?: string;
  updatedAt?: string;
}
interface TripStateType {
  trips: TripsType[];
  isBooking: boolean;
}

const initialState: TripStateType = {
  trips: [],
  isBooking: false,
};

const tripsSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {
    resetTripsSlice: () => initialState,
    toggleBookingFlow: state => {
      state.isBooking = !state.isBooking;
    },
  },
  extraReducers: builder => {
    builder.addCase(getTrips.fulfilled, getTripsCases.fulfilled),
      builder.addCase(saveTrip.fulfilled, saveTripCases.fulfilled),
      builder.addCase(saveTrip.rejected, saveTripCases.rejected),
      builder.addCase(deleteTrip.fulfilled, deleteTripCases.fulfilled),
      builder.addCase(deleteTrip.rejected, deleteTripCases.rejected),
      builder.addCase(updateTrip.fulfilled, updateTripCases.fulfilled),
      builder.addCase(updateTrip.rejected, updateTripCases.rejected);
    builder.addCase(getDestinationImg.fulfilled, () => {});
  },
});

export const { toggleBookingFlow, resetTripsSlice } = tripsSlice.actions;
export default tripsSlice.reducer;
