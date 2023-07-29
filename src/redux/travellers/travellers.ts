import {createSlice} from '@reduxjs/toolkit';
import {
  getTravellers,
  getTravellersCases,
  saveTraveller,
  saveTravellerCases,
  deleteTraveller,
  deleteTravellerCases,
  updateTraveller,
  updateTravellerCases,
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
    builder.addCase(
      saveTraveller.fulfilled,
      saveTravellerCases.fulfilled,
      saveTravellerCases.rejected,
    );
    builder.addCase(
      deleteTraveller.fulfilled,
      deleteTravellerCases.fulfilled,
      deleteTravellerCases.rejected,
    );
    builder.addCase(
      updateTraveller.fulfilled,
      updateTravellerCases.fulfilled,
      updateTravellerCases.rejected,
    );
  },
});

export default travellersSlice.reducer;
