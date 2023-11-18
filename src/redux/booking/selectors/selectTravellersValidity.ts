import { createSelector } from '@reduxjs/toolkit';
import { selectTrip } from './selectTrip';

export const selectTravellersValidity = createSelector(
  selectTrip,
  trip => trip.travellersValid,
);
