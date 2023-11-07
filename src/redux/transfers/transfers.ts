import {createSlice} from '@reduxjs/toolkit';
import {fetchTransfers} from './thunks';

const initialState = {
  itineraries: null,
};

const transfersSlice = createSlice({
  name: 'transfers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTransfers.fulfilled, (state: any, action: any) => {
      state.dictionaries = action.payload.dictionaries;
      state.hotelOffers = [...action.payload.data];
    },);
  },
});

export default transfersSlice.reducer;
