import {createAsyncThunk} from '@reduxjs/toolkit';
import { axiosHotelsService } from '../../../api';

const fetchTourOrActivityReq = (id: string) =>
  axiosHotelsService({
    url: '/touroractivityinfo',
    method: 'get',
    data: {
        id
    },
  });

export const fetchTourOrActivityInfo = createAsyncThunk(
  'hotels/fetchTourOrActivityInfo',
  async (action: string) => {

    try {
      const res = await fetchTourOrActivityReq(action);
      console.log('res: ', res.data);
      return res.data;
    } catch (e) {
      console.log('error: ', e);
    }
  },
);