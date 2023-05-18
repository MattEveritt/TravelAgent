import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const tripsSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {
    increment(state) {
      state++;
    },
    // resetAccountReducerBackendError(state, action) {
    //   if (state.backendError !== null) {
    //     state.backendError = null;
    //   }
    // },
  },
});

// export const {connectedIdUpdated, resetAccountReducerBackendError} =
//   accountSlice.actions;

export default tripsSlice.reducer;
