import {createAsyncThunk} from '@reduxjs/toolkit';
import { axiosHotelsService } from '../../../api';

const fetchPOIInfoReq = (poiId: string) =>
  axiosHotelsService({
    url: '/poiinfo',
    method: 'get',
    data: {
        poiId
    },
  });

export const fetchPOIInfo = createAsyncThunk(
  'hotels/fetchPOIInfo',
  async (action: {poiId: string}) => {
    const {poiId} = action;

    try {
      const res = await fetchPOIInfoReq(poiId);
      console.log('res: ', res.data);
      return res.data;
    } catch (e) {
      console.log('error: ', e);
    }
  },
);