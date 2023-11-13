import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  isInApp: boolean;
  showOnboarding: boolean;
};

const initialState: InitialState = {
  isInApp: false,
  showOnboarding: true,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsInApp(state, action) {
      state.isInApp = action.payload;
      if (action.payload) {
        state.showOnboarding = false;
      }
    },
    setShowOnboarding(state, action) {
      state.showOnboarding = action.payload;
    },
    // resetAccountReducerBackendError(state, action) {
    //   if (state.backendError !== null) {
    //     state.backendError = null;
    //   }
    // },
  },
});

export const { setIsInApp, setShowOnboarding } = appSlice.actions;

export default appSlice.reducer;
