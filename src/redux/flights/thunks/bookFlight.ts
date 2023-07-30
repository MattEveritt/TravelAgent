import {createAsyncThunk} from '@reduxjs/toolkit';
import { axiosFlightsService } from '../../../api';

const bookFlightRequest = (flightOffer: {}, travellers: []) =>
  axiosFlightsService({
    url: '/bookflight',
    data: {
        flightOffer,
        travellers,
    }
  });

interface ActionPayloadType {
    flightOffer: {},
    travellers: [],
}

export const bookFlight = createAsyncThunk(
  'flights/bookFlight',
  async (action: ActionPayloadType, {rejectWithValue}) => {
    const {flightOffer, travellers} = action;
    try {
      const res = await bookFlightRequest(flightOffer, travellers);
      console.log('res: ', res.data);
      return res.data;
    } catch (e) {
      console.log('error: ', e);
      return rejectWithValue(e);
    }
  },
);
