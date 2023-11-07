import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosFlightsService } from '../../../api';

const fetchNearestAirportRequest = (longitude: number, latitude: number) => {
  return (
    axiosFlightsService({
      url: '/closestairport',
      params: {
        lat: latitude,
        long: longitude,
      }
    }));};

export const fetchNearestAirport = createAsyncThunk(
  'flights/fetchNearestAirport',
  async (action: {longitude: number, latitude: number}) => {
    try {
      const res = await fetchNearestAirportRequest(action.longitude, action.latitude);
      return JSON.parse(res.data).data[0];
    } catch (e) {
      console.log('error: ', e);
    }
  },
);
