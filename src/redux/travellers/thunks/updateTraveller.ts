import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosTravellersService} from '../../../api';

export const updateTraveller = createAsyncThunk(
  'travellers/updateTraveller',
  async (action, {getState, rejectWithValue}) => {
    // @ts-expect-error TS(2339): Property 'name' does not exist on type 'void'.
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
