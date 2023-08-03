import {createAsyncThunk} from '@reduxjs/toolkit';
import { axiosFlightsService } from '../../../api';

const fetchSeatMapReq = (flightOffer: {}) =>
  axiosFlightsService({
    url: '/flightupsell',
    method: 'post',
    data: {
        flightOffer,
    },
  });

export const fetchSeatMap = createAsyncThunk(
  'flights/fetchSeatMap',
  async (action: {}) => {
    try {
      const res = await fetchSeatMapReq(action);
      console.log('res: ', res.data);
      return res.data;
    } catch (e) {
      console.log('error: ', e);
    }
  },
);