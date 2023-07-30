import {createAsyncThunk} from '@reduxjs/toolkit';
import { axiosTransfersService } from '../../../api';

const getTransfers = (cityCode: string) =>
  axiosTransfersService({
    url: '/gettransfers',
    params: {
        cityCode
    },
  });

export const fetchTransfers = createAsyncThunk(
  'transfers/fetchTransfers',
  async (cityCode: string) => {
    try {
      const res = await getTransfers(cityCode);
      console.log('res: ', res.data);
      return res.data;
    } catch (e) {
      console.log('error: ', e);
    }
  },
);
