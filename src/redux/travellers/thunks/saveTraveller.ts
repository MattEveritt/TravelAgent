import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosTravellersService} from '../../../api';

export const saveTraveller = createAsyncThunk(
  'travellers/saveTraveller',
  async (action, {getState, rejectWithValue}) => {
    const userId = (getState as any)().userAuth.userId;
    console.log(action);
    const res = await axiosTravellersService({
    url: '/savetraveller',
    data: {
        name: (action as any).name,
        surname: (action as any).surname,
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
  fulfilled: (state: any, action: any) => {
    return {
      ...state,
      travellers: [...state.travellers, {...action.payload}],
    };
  },
  rejected: (state: any, action: any) => {
    console.error('Save traveller request failed: ', action.payload.status);
  },
};
