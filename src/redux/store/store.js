import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import appReducer from '../app/app';
import currentTripReducer from '../currentTrip/currentTrip';
import tripsReducer from '../trips/trips';
import axios from 'axios';
import flightsReducer from '../flights/flights';
import authReducer from '../auth/authSlice';
import axiosMiddleware from 'redux-axios-middleware';

const client = axios.create({
  baseURL: 'http://localhost:3000/api',
  responseType: 'json',
});

const axiosInstance = axiosMiddleware(client);

const middleware = [...getDefaultMiddleware(), axiosInstance];

const rootReducer = combineReducers({
  app: appReducer,
  currentTrip: currentTripReducer,
  trips: tripsReducer,
  flights: flightsReducer,
  userAuth: authReducer,
});

export default configureStore({
  reducer: rootReducer,
  middleware,
});
