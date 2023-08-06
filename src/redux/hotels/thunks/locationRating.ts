import {createAsyncThunk} from '@reduxjs/toolkit';
import { axiosHotelsService } from '../../../api';

const locationRatingRequest = (lat: number, long: number) =>
  axiosHotelsService({
    url: '/locationrating',
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

export const locationRating = createAsyncThunk(
  'hotels/locationRating',
  async (action: ActionPayload) => {
    const {lat, long} = action;
    try {
      const res = await locationRatingRequest(lat, long);
      console.log('res: ', res.data);
      return res.data;
    } catch (e) {
      console.log('error: ', e);
    }
  },
);
