import { createSelector } from '@reduxjs/toolkit';
import { selectSelf } from './selectSelf';

export const selectBookingTrip = () =>
  createSelector(selectSelf, state => state.trip);
