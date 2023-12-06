import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosFlightsService } from '../../../api';

const fetchClosestAirportReq = (lat: number, lng: number) =>
  axiosFlightsService({
    url: '/closestairport',
    method: 'get',
    params: {
      lat,
      lng,
    },
  });

interface ActionPayload {
  lat: number;
  lng: number;
}

export const fetchClosestAirport = createAsyncThunk(
  'flights/fetchClosestAirport',
  async (action: ActionPayload) => {
    const { lat, lng } = action;
    try {
      const { data } = await fetchClosestAirportReq(lat, lng);

      const parsedData = JSON.parse(data);
      return parsedData.data[0];
    } catch (e: any) {
      console.log('FetchClosestAirport error: ', e.message);
      return 'error';
    }
  },
);
