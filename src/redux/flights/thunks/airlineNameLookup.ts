import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosFlightsService } from '../../../api';

const airlineNameLookupReq = (airlineCode: string) =>
  axiosFlightsService({
    url: '/airlinenamelookup',
    method: 'get',
    data: {
      airlineCode,
    },
  });

export const airlineNameLookup = createAsyncThunk(
  'flights/airlineNameLookup',
  async (action: string) => {
    try {
      const res = await airlineNameLookupReq(action);
      console.log('res: ', res.data);
      return res.data;
    } catch (e) {
      console.log('error: ', e);
    }
  },
);
