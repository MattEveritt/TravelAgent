import {configureStore} from '@reduxjs/toolkit';
import appReducer from '../app/reducer';
import currentTripReducer from '../currentTrip/reducer';
import tripsReducer from '../trips/reducer';
import axiosInstance from './axiosInterceptor';

export default configureStore({
  reducer: {
    app: appReducer,
    currentTrip: currentTripReducer,
    trips: tripsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(axiosInstance),
});
