import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosFlightsService } from '../../../api';

const request = (iataCode: string) => {
  return axiosFlightsService({
    url: '/airportinfo',
    params: {
      iataCode,
    },
  });
};

export const fetchAirportInfoByIATA = createAsyncThunk(
  'flights/fetchAirportInfoByIATA',
  async (action: { iataCode: string }) => {
    try {
      const res = await request(action.iataCode);
      const searchResults = JSON.parse(res.data);
      return searchResults;
    } catch (e: any) {
      if (e.response && e.response.data) {
        const errorData = JSON.parse(e.response.data.error);
        const errorMessage = errorData[0].detail;
        console.log('fetchAirportInfoByAITA error: ', errorMessage);
      }
    }
  },
);
