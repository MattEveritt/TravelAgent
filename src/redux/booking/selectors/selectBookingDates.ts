import { createSelector } from '@reduxjs/toolkit';
import { selectSelf } from './selectSelf';

export const selectBookingDates = () =>
  createSelector(selectSelf, state => state.trip.dates);
