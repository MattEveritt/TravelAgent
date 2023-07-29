import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosTravellersService} from '../../../api';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'loda... Remove this comment to see the full error message
import {filter} from 'lodash';

export const deleteTraveller = createAsyncThunk(
  'travellers/deleteTraveller',
  async (action, {getState, rejectWithValue}) => {
    const userId = (getState as any)().userAuth.userId;
    try {
      await axiosTravellersService({
        url: '/deletetraveller',
        method: 'delete',
        data: {
          userId: userId,
          travellerId: action,
        },
      });
      return action;
    } catch (e) {
      rejectWithValue((e as any).message);
    }
  },
);

export const deleteTravellerCases = {
  fulfilled: (state: any, action: any) => {
    const newTravellers = filter(state.travellers, (traveller: any) => {
      return traveller.id !== action.payload;
    });
    return {
      ...state,
      travellers: newTravellers,
    };
  },
  rejected: (state: any, action: any) => {
    console.error('Delete traveller request failed: ', action.payload);
  },
};
