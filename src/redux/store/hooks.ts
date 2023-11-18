import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';
import { resetAppSlice } from '../app/app';
import { resetAuthSlice } from '../auth/authSlice';
import { resetTransfersSlice } from '../transfers/transfers';
import { resetBookingSlice } from '../booking/bookingSlice';
import { resetCurrentTripSlice } from '../currentTrip/currentTrip';
import { resetHotelsSlice } from '../hotels/hotels';
import { resetFlightsSlice } from '../flights/flights';
import { resetTravellersSlice } from '../travellers/travellers';
import { resetTripsSlice } from '../trips/trips';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useResetStore = () => {
  const dispatch = useAppDispatch();

  const resetStore = () => {
    dispatch(resetAppSlice());
    dispatch(resetAuthSlice());
    dispatch(resetTransfersSlice());
    dispatch(resetBookingSlice());
    dispatch(resetCurrentTripSlice());
    dispatch(resetHotelsSlice());
    dispatch(resetFlightsSlice());
    dispatch(resetTravellersSlice());
    dispatch(resetTripsSlice());
  };
  return { resetStore };
};
