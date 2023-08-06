import {createAsyncThunk} from '@reduxjs/toolkit';
import { axiosFlightsService } from '../../../api';

const fetchPriceAnalysisReq = (originIataCode: string ,destinationIataCode: string ,departureDate: string) =>
  axiosFlightsService({
    url: '/flightupsell',
    method: 'get',
    data: {
        originIataCode,
        destinationIataCode,
        departureDate
    },
  });

interface ActionPayload {
    originIataCode: string, 
    destinationIataCode: string, 
    departureDate: string
}

export const fetchPriceAnalysis = createAsyncThunk(
  'flights/fetchPriceAnalysis',
  async (action: ActionPayload) => {
    const {originIataCode , destinationIataCode, departureDate} = action;
    try {
      const res = await fetchPriceAnalysisReq(originIataCode ,destinationIataCode ,departureDate);
      console.log('res: ', res.data);
      return res.data;
    } catch (e) {
      console.log('error: ', e);
    }
  },
);