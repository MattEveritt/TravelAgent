import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosFlightsService } from '../../../api';

const fetchBookingReq = (flightOrderId: number) =>
  axiosFlightsService({
    url: '/fetchbooking',
    method: 'get',
    data: {
      flightOrderId,
    },
  });

export const fetchBooking = createAsyncThunk(
  'flights/fetchBooking',
  async (action: number) => {
    try {
      const res = await fetchBookingReq(action);
      console.log('res: ', res.data);
      return res.data;
    } catch (e) {
      console.log('error: ', e);
    }
  },
);
