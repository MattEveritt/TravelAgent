import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosFlightsService } from '../../../api';

const fetchSeatMapReq = (flightOffer: {}) =>
  axiosFlightsService({
    url: '/flightofferseatmap',
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
      return JSON.parse(res.data);
    } catch (e: any) {
      throw new Error(`Error fetching seat map: ${e}`);
    }
  },
);
