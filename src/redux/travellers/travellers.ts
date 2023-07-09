import {createSlice} from '@reduxjs/toolkit';
import {
  getTravellers,
  getTravellersCases,
  saveTraveller,
  saveTravellerCases,
} from './thunks';

const initialState = {
  travellers: [],
  value: 0,
};

const travellersSlice = createSlice({
  name: 'travellers',
  initialState,
  extraReducers: builder => {
    builder.addCase(getTravellers.fulfilled, getTravellersCases.fulfilled);
    builder.addCase(saveTraveller.fulfilled, saveTravellerCases.fulfilled);
  },
});

export default travellersSlice.reducer;
