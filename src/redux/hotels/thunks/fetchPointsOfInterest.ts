import {createAsyncThunk} from '@reduxjs/toolkit';
import { axiosHotelsService } from '../../../api';

const fetchPointsOfInterestReq = (lat: number, long: number) =>
  axiosHotelsService({
    url: '/pointsofinterest',
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

export const fetchPointsOfInterest = createAsyncThunk(
  'hotels/fetchPointsOfInterest',
  async (action: ActionPayload) => {
    const {lat, long} = action;

    try {
      const res = await fetchPointsOfInterestReq(lat, long);
      console.log('res: ', res.data);
      return res.data;
    } catch (e) {
      console.log('error: ', e);
    }
  },
);