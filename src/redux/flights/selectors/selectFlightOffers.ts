import { createSelector } from '@reduxjs/toolkit';
import { selectSelf } from './selectSelf';

export const selectFlightOffers = createSelector(
  [selectSelf],
  flights => flights.flightOffers,
);
