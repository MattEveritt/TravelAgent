import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosTravellersService} from '../../../api';

interface ActionPayload{
  name: string,
  surname: string,
  middleNames: string,
  birthdate: string,
  travellerId: string,
}

export const updateTraveller = createAsyncThunk(
  'travellers/updateTraveller',
  async (action: ActionPayload, {getState, rejectWithValue}) => {
    const {name, surname, middleNames, birthdate, travellerId} = action;
    const userId = (getState as any)().userAuth.userId;
    const res = await axiosTravellersService({
      url: '/updatetraveller',
      method: 'put',
      data: {
        name: name,
        surname: surname,
        middleNames: middleNames,
        birthdate: birthdate,
        userId: userId,
        travellerId: travellerId,
      },
    });
    if (res.status !== 201) {
      rejectWithValue(res);
    }
    return res.data;
  },
);

export const updateTravellerCases = {
  fulfilled: (state: any, action: any) => {
    return {
      ...state,
      travellers: {
        ...state.travellers,
        [action.payload.travellerId]: {...action.payload},
      },
    };
  },
  rejected: (state: any, action: any) => {
    console.error('Update traveller request failed: ', action.payload.status);
  },
};
