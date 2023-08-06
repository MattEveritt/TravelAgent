import {createAsyncThunk} from '@reduxjs/toolkit';
import { axiosHotelsService } from '../../../api';

const fetchToursAndActivitiesReq = (lat: number, long: number) =>
  axiosHotelsService({
    url: '/toursandactivities',
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

export const fetchToursAndActivities = createAsyncThunk(
  'hotels/fetchToursAndActivities',
  async (action: ActionPayload) => {
    const {lat, long} = action;

    try {
      const res = await fetchToursAndActivitiesReq(lat, long);
      console.log('res: ', res.data);
      return res.data;
    } catch (e) {
      console.log('error: ', e);
    }
  },
);