import {createAsyncThunk, SerializedError} from '@reduxjs/toolkit';
import {axiosTravellersService} from '../../../api';
import { RootState } from '../../store/store';
import { AxiosResponse } from 'axios';

interface SaveTravellerPayload {
  name: string | undefined,
  surname: string | undefined,
}

interface SaveTravellerResponse {
  data: any;
}

export const saveTraveller = createAsyncThunk<
  SaveTravellerResponse, 
  SaveTravellerPayload, 
  {
    state: RootState,
    rejectValue: AxiosResponse 
  }
>(
  'travellers/saveTraveller',
  async (action, {getState, rejectWithValue}) => {
    const userId: string | undefined = getState().userAuth.userId;
    console.log(action);
    const res: AxiosResponse = await axiosTravellersService({
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
