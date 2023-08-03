import {createAsyncThunk} from '@reduxjs/toolkit';
import { axiosFlightsService } from '../../../api';

const deleteBookingReq = (flightOrderId: number) =>
  axiosFlightsService({
    url: '/deletebooking',
    method: 'delete',
    data: {
        flightOrderId,
    },
  });

export const deleteBooking = createAsyncThunk(
  'flights/deleteBooking',
  async (action: number) => {
    try {
      const res = await deleteBookingReq(action);
      console.log('res: ', res.data);
      return res.data;
    } catch (e) {
      console.log('error: ', e);
    }
  },
);