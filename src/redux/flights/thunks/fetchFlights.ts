import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosFlightsService } from '../../../api';
import { convertIsoDateToYYYYMMDD } from './utils/convertIsoDateToYYYYMMDD';

type Action = {
  departureAirport: {
    iataCode: string;
  };
  dates: {
    startDate: string;
  }[];
  destinations: {
    iataCode: string;
  }[];
};
const getFlights = (action: Action) =>
  axiosFlightsService({
    url: '/getflights',
    params: {
      originLocationCode: action.departureAirport.iataCode,
      destinationLocationCode: action.destinations[0].iataCode,
      departureDate: convertIsoDateToYYYYMMDD(action.dates[0].startDate),
      adults: 1,
      max: 5,
    },
  });

export const fetchFlights = createAsyncThunk(
  'flights/fetchFlights',
  async (action: Action) => {
    try {
      const res = await getFlights(action);
      const parsedData = JSON.parse(res.data);
      return parsedData.data;
    } catch (e) {
      console.log('FetchFlights, error: ', e);
    }
  },
);
