import {createAsyncThunk} from '@reduxjs/toolkit';
import { axiosHotelsService } from '../../../api';

const fetchSafetyRatingReq = (lat: number, long: number) =>
  axiosHotelsService({
    url: '/safetyrating',
    method: 'get',
    data: {
        lat,
        long
    },
  });

interface ActionPayload {
    lat: number,
    long: number
}

export const fetchSafetyRating = createAsyncThunk(
  'hotels/fetchSafetyRating',
  async (action: ActionPayload) => {
    const {lat, long} = action;

    try {
      const res = await fetchSafetyRatingReq(lat, long);
      console.log('res: ', res.data);
      return res.data;
    } catch (e) {
      console.log('error: ', e);
    }
  },
);