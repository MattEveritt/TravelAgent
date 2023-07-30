import {createAsyncThunk} from '@reduxjs/toolkit';
import { axiosFlightsService } from '../../../api';

const confirmPriceRequest = (flightOffer: {}) =>
  axiosFlightsService({
    url: '/confirmflightprice',
    data: flightOffer
  });

export const confirmFlightPrice = createAsyncThunk(
  'flights/fetchFlights',
  async (action: {}) => {
    try {
      const res = await confirmPriceRequest(action);
      console.log('res: ', res.data);
      return res.data;
    } catch (e) {
      console.log('error: ', e);
    }
  },
);
