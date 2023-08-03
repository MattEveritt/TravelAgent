import {createAsyncThunk} from '@reduxjs/toolkit';
import { axiosFlightsService } from '../../../api';

const getFlights = () =>
  axiosFlightsService({
    url: '/getflights',
    params: {
      originLocationCode: 'HEL',
      destinationLocationCode: 'AGP',
      departureDate: '2023-10-15',
      adults: 1,
      max: 5,
    },
  });

export const fetchFlights = createAsyncThunk(
  'flights/fetchFlights',
  async () => {
    try {
      const res = await getFlights();
      console.log('res: ', res.data);
      return res.data;
    } catch (e) {
      console.log('error: ', e);
    }
  },
);