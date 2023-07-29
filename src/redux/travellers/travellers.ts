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

// @ts-expect-error TS(2345): Argument of type '{ name: "travellers"; initialSta... Remove this comment to see the full error message
const travellersSlice = createSlice({
  name: 'travellers',
  initialState,
  extraReducers: builder => {
    builder.addCase(getTravellers.fulfilled, getTravellersCases.fulfilled);
    builder.addCase(
      saveTraveller.fulfilled,
      saveTravellerCases.fulfilled,
      // @ts-expect-error TS(2554): Expected 2 arguments, but got 3.
      saveTravellerCases.rejected,
    );
    builder.addCase(
      deleteTraveller.fulfilled,
      deleteTravellerCases.fulfilled,
      // @ts-expect-error TS(2554): Expected 2 arguments, but got 3.
      deleteTravellerCases.rejected,
    );
    builder.addCase(
      updateTraveller.fulfilled,
      updateTravellerCases.fulfilled,
      // @ts-expect-error TS(2554): Expected 2 arguments, but got 3.
      updateTravellerCases.rejected,
    );
  },
});

export default travellersSlice.reducer;
