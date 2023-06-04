import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  trips: [],
  value: 0,
};

const tripsSlice = createSlice({
  name: 'trips',
  initialState,
});

export default tripsSlice.reducer;
