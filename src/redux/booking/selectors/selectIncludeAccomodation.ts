import { createSelector } from '@reduxjs/toolkit';
import { selectTrip } from './selectTrip';

export const selectIncludeAccomodation = createSelector(
  selectTrip,
  trip => trip.includeAccomodation,
);
