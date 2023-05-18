import {createSlice} from '@reduxjs/toolkit';

const initialState = {};

const appSlice = createSlice({
  name: 'app',
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

export default appSlice.reducer;
