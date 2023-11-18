import { createSelector } from '@reduxjs/toolkit';
import { selectTrip } from './selectTrip';

export const selectTripType = () =>
  createSelector(selectTrip, trip => trip.type);
