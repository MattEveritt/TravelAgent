import { createSelector } from '@reduxjs/toolkit';
import { selectTrip } from './selectTrip';

export const selectDatesValidity = () =>
  createSelector(selectTrip, trip => trip.datesValid);
