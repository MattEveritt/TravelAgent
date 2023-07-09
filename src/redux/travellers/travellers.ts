import {createSlice} from '@reduxjs/toolkit';
import {
  getTravellers,
  getTravellersCases,
  saveTraveller,
  saveTravellerCases,
} from './thunks';

type SliceState = {
  travellers: Array<{}>,
}

const initialState: SliceState = {
  travellers: [],
};

const travellersSlice = createSlice({
  name: 'travellers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getTravellers.fulfilled, getTravellersCases.fulfilled);
    builder.addCase(saveTraveller.fulfilled, saveTravellerCases.fulfilled);
  },
});

export default travellersSlice.reducer;
