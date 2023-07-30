import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosTravellersService} from '../../../api';

type ActionPayload = {
  name: string,
  surname: string,
}
export const saveTraveller = createAsyncThunk(
  'travellers/saveTraveller',
  async (action: ActionPayload, {getState, rejectWithValue}) => {
    const userId = (getState as any)().userAuth.userId;
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
