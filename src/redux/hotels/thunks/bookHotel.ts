import {createAsyncThunk} from '@reduxjs/toolkit';
import { axiosHotelsService } from '../../../api';

const bookHotelRequest = (body: {}) =>
  axiosHotelsService({
    url: '/gethoteloffers',
    method: 'get',
    data: {
        ...body
    },
  });

export const bookHotel = createAsyncThunk(
  'hotels/bookHotel',
  async (action: {}) => {

    try {
      const res = await bookHotelRequest(action);
      console.log('res: ', res.data);
      return res.data;
    } catch (e) {
      console.log('error: ', e);
    }
  },
);
