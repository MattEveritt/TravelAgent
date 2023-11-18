import { createSelector } from '@reduxjs/toolkit';
import { selectTrip } from './selectTrip';

export const selectBookingDates = () =>
  createSelector(selectTrip, trip => trip.dates);
