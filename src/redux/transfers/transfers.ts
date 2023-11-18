import { createSlice } from '@reduxjs/toolkit';
import { fetchTransfers } from './thunks';

const initialState = {
  itineraries: null,
};

const transfersSlice = createSlice({
  name: 'transfers',
  initialState,
  reducers: {
    resetTransfersSlice: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(fetchTransfers.fulfilled, (state: any, action: any) => {
      state.dictionaries = action.payload.dictionaries;
      state.hotelOffers = [...action.payload.data];
    });
  },
});

export const { resetTransfersSlice } = transfersSlice.actions;
export default transfersSlice.reducer;
