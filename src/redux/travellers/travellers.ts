import {createSlice} from '@reduxjs/toolkit';
import {
  getTravellers,
  getTravellersCases,
  saveTraveller,
  deleteTraveller,
  deleteTravellerCases,
  updateTraveller,
  updateTravellerCases,
} from './thunks';

interface TravellersState {
  travellers: [],
}

const initialState = {
  travellers: [],
} as TravellersState;


const travellersSlice = createSlice({
  name: 'travellers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getTravellers.fulfilled, getTravellersCases.fulfilled);
    builder.addCase(saveTraveller.fulfilled, (state: any, action) => {
      return {
        ...state,
        travellers: [...state.travellers, {...action.payload}],
      };
    });
    builder.addCase(saveTraveller.rejected, (state: any, action: any) => {
      console.error('Save traveller request failed: ', action.payload.status);
    }),
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
