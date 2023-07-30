import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosTravellersService} from '../../../api';
import {filter} from 'lodash';

export const deleteTraveller = createAsyncThunk(
  'travellers/deleteTraveller',
  async (action: string, {getState, rejectWithValue}) => {
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
      return rejectWithValue((e as any).message);
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
