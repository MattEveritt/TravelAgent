import {createSlice} from '@reduxjs/toolkit';

const initialState = {};

const currentTripSlice = createSlice({
  name: 'currentTrip',
  initialState,
  reducers: {
    // connectedIdUpdated(state, action) {
    //   state.connectedId = action.payload.profileId;
    //   if (action.payload.deviceId) {
    //     state.deviceId = action.payload.deviceId;
    //   }
    // },
    // resetAccountReducerBackendError(state, action) {
    //   if (state.backendError !== null) {
    //     state.backendError = null;
    //   }
    // },
  },
});

// export const {connectedIdUpdated, resetAccountReducerBackendError} =
//   accountSlice.actions;

export default currentTripSlice.reducer;
