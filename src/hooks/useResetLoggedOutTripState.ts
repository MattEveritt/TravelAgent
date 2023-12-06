import { resetTripsSlice, useAppDispatch } from '../redux';
import { resetTravellersSlice } from '../redux/travellers/travellers';
import { resetFlightsSlice } from '../redux/flights/flights';
import { resetHotelsSlice } from '../redux/hotels/hotels';
import { resetCurrentTripSlice } from '../redux/currentTrip/currentTrip';
import { resetBookingSlice } from '../redux/booking/bookingSlice';
import { resetTransfersSlice } from '../redux/transfers/transfers';

export const useResetLoggedOutTripState = () => {
  const dispatch = useAppDispatch();

  const resetLoggedOutTripState = () => {
    dispatch(resetTransfersSlice());
    dispatch(resetBookingSlice());
    dispatch(resetCurrentTripSlice());
    dispatch(resetHotelsSlice());
    dispatch(resetFlightsSlice());
    dispatch(resetTravellersSlice());
    dispatch(resetTripsSlice());
  };
  return { resetLoggedOutTripState };
};
