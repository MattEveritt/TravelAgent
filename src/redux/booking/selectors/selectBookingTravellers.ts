import { createSelector } from '@reduxjs/toolkit';
import { selectTrip } from './selectTrip';

export const selectBookingTravellers = () =>
  createSelector(selectTrip, trip => trip.travellers);
