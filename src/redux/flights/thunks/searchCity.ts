import {createAsyncThunk} from '@reduxjs/toolkit';
import { axiosFlightsService } from '../../../api';

const searchCityReq = (searchString: string) =>
  axiosFlightsService({
    url: '/searchcity',
    method: 'get',
    data: {
        searchString,
    },
  });

export const searchCity = createAsyncThunk(
  'flights/searchCity',
  async (action: string) => {
    try {
      const res = await searchCityReq(action);
      console.log('res: ', res.data);
      return res.data;
    } catch (e) {
      console.log('error: ', e);
    }
  },
);