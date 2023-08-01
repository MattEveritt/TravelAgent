import {createAsyncThunk} from '@reduxjs/toolkit';
import { axiosHotelsService } from '../../../api';

const getHotels = (searchType: string, cityCode: string | undefined, lat: number | undefined, long: number | undefined) =>
  axiosHotelsService({
    url: '/gethotels',
    method: 'get',
    data: {
      searchType,
      cityCode,
      lat,
      long,
    },
  });

interface ActionPayload {
  searchType: string,
  cityCode: string | undefined,
  lat: number | undefined,
  long: number | undefined,
}

export const fetchHotels = createAsyncThunk(
  'hotels/fetchHotels',
  async (action: ActionPayload) => {
    const {searchType, cityCode, lat, long} = action;
    try {
      const res = await getHotels(searchType, cityCode, lat, long);
      console.log('res: ', res.data);
      return res.data;
    } catch (e) {
      console.log('error: ', e);
    }
  },
);
