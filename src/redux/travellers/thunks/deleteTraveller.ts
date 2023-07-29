import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosTravellersService} from '../../../api';
import {filter} from 'lodash';

export const deleteTraveller = createAsyncThunk(
  'travellers/deleteTraveller',
  async (action, {getState, rejectWithValue}) => {
    const userId = getState().userAuth.userId;
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
      rejectWithValue(e.message);
    }
  },
);

export const deleteTravellerCases = {
  fulfilled: (state, action) => {
    const newTravellers = filter(state.travellers, traveller => {
      return traveller.id !== action.payload;
    });
    return {
      ...state,
      travellers: newTravellers,
    };
  },
  rejected: (state, action) => {
    console.error('Delete traveller request failed: ', action.payload);
  },
};
