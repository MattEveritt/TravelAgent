import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const getFlights = () =>
  axios.get('https://test.api.amadeus.com/v2/shopping/flight-offers', {
    headers: {Authorization: 'Bearer qDabd6eMhfQgP20iaGAZi48J4eAM'},
    params: {
      originLocationCode: 'HEL',
      destinationLocationCode: 'AGP',
      departureDate: '2023-10-15',
      adults: 1,
      max: 5,
    },
  });

export const fetchFlights = createAsyncThunk(
  'flights/fetchFlights',
  async () => {
    try {
      const res = await getFlights();
      // console.log('res: ', res.data);
      return res.data;
    } catch (e) {
      console.log('error: ', e);
    }
  },
);

export const fetchFlightsCases = {
  fulfilled: (state, action) => {
    state.dictionaries = action.payload.dictionaries;
    state.flightOffers = [...action.payload.data];
  },
};
