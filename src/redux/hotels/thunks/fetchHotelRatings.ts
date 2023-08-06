import {createAsyncThunk} from '@reduxjs/toolkit';
import { axiosHotelsService } from '../../../api';

const fetchHotelRatingsRequest = (hotelIds: string) =>
  axiosHotelsService({
    url: '/hotelratings',
    method: 'get',
    data: {
        hotelIds
    },
  });

interface ActionPayload {
    hotelIds: string,
}

export const fetchHotelRatings = createAsyncThunk(
  'hotels/fetchHotelRatings',
  async (action: ActionPayload) => {
    const {hotelIds} = action;

    try {
      const res = await fetchHotelRatingsRequest(hotelIds);
      console.log('res: ', res.data);
      return res.data;
    } catch (e) {
      console.log('error: ', e);
    }
  },
);