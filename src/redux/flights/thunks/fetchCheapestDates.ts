import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosFlightsService } from '../../../api';

const fetchCheapestDatesReq = (origin: string, destination: string) =>
  axiosFlightsService({
    url: '/cheapestdates',
    method: 'get',
    data: {
      origin,
      destination,
    },
  });

interface ActionPayload {
  origin: string;
  destination: string;
}

export const fetchCheapestDates = createAsyncThunk(
  'flights/fetchCheapestDates',
  async (action: ActionPayload) => {
    const { origin, destination } = action;
    try {
      const res = await fetchCheapestDatesReq(origin, destination);
      console.log('res: ', res.data);
      return res.data;
    } catch (e) {
      console.log('error: ', e);
    }
  },
);
