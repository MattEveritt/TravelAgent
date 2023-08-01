import {createAsyncThunk} from '@reduxjs/toolkit';
import { axiosTransfersService } from '../../../api';

const cancelTransferRequest = (orderId: string, confirmationNumber: string) =>
  axiosTransfersService({
    url: '/canceltransfer',
    method: 'post',
    data: {
        orderId,
        confirmationNumber,
    },
  });

interface ActionPayload{
    orderId: string,
    confirmationNumber: string,
}

export const cancelTransfer = createAsyncThunk(
  'transfers/cancelTransfer',
  async (action: ActionPayload) => {
    const {orderId, confirmationNumber} = action;
    
    try {
      const res = await cancelTransferRequest(orderId, confirmationNumber);
      console.log('res: ', res.data);
      return res.data;
    } catch (e) {
      console.log('error: ', e);
    }
  },
);
