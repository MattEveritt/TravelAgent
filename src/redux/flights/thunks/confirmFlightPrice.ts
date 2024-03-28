import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosFlightsService } from '../../../api';

const confirmPriceRequest = (flightOffer: {}) =>
  axiosFlightsService({
    url: '/confirmflightprice',
    method: 'post',
    data: flightOffer,
  });

interface ActionPayload {
  flightOffer: {};
}

export const confirmFlightPrice = createAsyncThunk(
  'flights/confirmFlightPrice',
  async (action: ActionPayload) => {
    const { flightOffer } = action;
    try {
      const res = await confirmPriceRequest(flightOffer);
      console.log('res: ', res.data);
      return res.data;
    } catch (e) {
      console.log('error: ', e);
    }
  },
);
