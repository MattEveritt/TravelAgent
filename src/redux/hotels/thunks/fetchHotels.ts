import {createAsyncThunk} from '@reduxjs/toolkit';
import { axiosHotelsService } from '../../../api';

const getHotels = (cityCode: string) =>
  axiosHotelsService({
    url: '/gethotels',
    params: {
        cityCode
    },
  });

export const fetchHotels = createAsyncThunk(
  'hotels/fetchHotels',
  async (cityCode: string) => {
    try {
      const res = await getHotels(cityCode);
      console.log('res: ', res.data);
      return res.data;
    } catch (e) {
      console.log('error: ', e);
    }
  },
);
