import { createSelector } from '@reduxjs/toolkit';
import { selectTrip } from './selectTrip';

export const selectBookingDestinations = () =>
  createSelector(selectTrip, trip => trip.destinations);
