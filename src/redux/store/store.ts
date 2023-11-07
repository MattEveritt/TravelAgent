import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import appReducer from '../app/app';
import currentTripReducer from '../currentTrip/currentTrip';
import tripsReducer from '../trips/trips';
import travellersReducer from '../travellers/travellers';
import flightsReducer from '../flights/flights';
import hotelsReducer from '../hotels/hotels';
import transfersReducer from '../transfers/transfers';
import authReducer from '../auth/authSlice';
import bookingReducer from '../booking/bookingSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  app: appReducer,
  currentTrip: currentTripReducer,
  trips: tripsReducer,
  travellers: travellersReducer,
  flights: flightsReducer,
  hotels: hotelsReducer,
  transfers: transfersReducer,
  userAuth: authReducer,
  booking: bookingReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
