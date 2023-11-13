import {createSlice} from '@reduxjs/toolkit';

type InitialState = {
  isInApp: boolean;
};

const initialState: InitialState = {
  isInApp: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsInApp(state, action) {
      state.isInApp = action.payload;
    },
    // resetAccountReducerBackendError(state, action) {
    //   if (state.backendError !== null) {
    //     state.backendError = null;
    //   }
    // },
  },
});

export const { setIsInApp } =
  appSlice.actions;

export default appSlice.reducer;
