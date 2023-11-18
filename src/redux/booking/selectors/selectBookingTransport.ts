import { createSelector } from '@reduxjs/toolkit';
import { selectTrip } from './selectTrip';

export const selectBookingTransport = () =>
  createSelector(selectTrip, trip => trip.transport);
