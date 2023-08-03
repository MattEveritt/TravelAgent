import {createAsyncThunk} from '@reduxjs/toolkit';
import { axiosFlightsService } from '../../../api';

const fetchClosestAirportReq = (lat: number, long: number) =>
  axiosFlightsService({
    url: '/closestairport',
    method: 'get',
    data: {
        lat,
        long,
    },
  });

interface ActionPayload {
    lat: number,
    long: number,
}

export const fetchClosestAirport = createAsyncThunk(
  'flights/fetchClosestAirport',
  async (action: ActionPayload) => {
    const {lat, long} = action;
    try {
      const res = await fetchClosestAirportReq(lat, long);
      console.log('res: ', res.data);
      return res.data;
    } catch (e) {
      console.log('error: ', e);
    }
  },
);