import { createSelector } from '@reduxjs/toolkit';
import { selectTrip } from './selectTrip';

export const selectDestinationsValidity = () =>
  createSelector(selectTrip, trip => trip.destinationsValid);
