import { createSlice } from '@reduxjs/toolkit';
import { fetchHotels } from './thunks';

const initialState = {
  itineraries: null,
};

const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    resetHotelsSlice: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(fetchHotels.fulfilled, (state: any, action: any) => {
      state.dictionaries = action.payload.dictionaries;
      state.hotelOffers = [...action.payload.data];
    });
  },
});

export const { resetHotelsSlice } = hotelsSlice.actions;
export default hotelsSlice.reducer;
