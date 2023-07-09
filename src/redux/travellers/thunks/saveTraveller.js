import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosTravellersService} from '../../../api';

export const saveTraveller = createAsyncThunk(
  'travellers/saveTraveller',
  async (action, {getState, rejectWithValue}) => {
    const userId = getState().userAuth.userId;
    console.log(action);
    const res = await axiosTravellersService({
      url: '/savetraveller',
      data: {
        name: action.name,
        surname: action.surname,
        userId: userId,
      },
    });
    if (res.status !== 201) {
      rejectWithValue(res);
    }
    return res.data;
  },
);

export const saveTravellerCases = {
  fulfilled: (state, action) => {
    return {
      ...state,
      travellers: [...state.travellers, {...action.payload}],
    };
  },
  rejected: (state, action) => {
    console.error('Save traveller request failed: ', action.payload.status);
  },
};
