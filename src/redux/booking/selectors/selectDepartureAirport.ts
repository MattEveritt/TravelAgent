import { createSelector } from '@reduxjs/toolkit';
import { selectTrip } from './selectTrip';

export const selectDepartureAirport = () =>
  createSelector(selectTrip, trip => trip.departureAirport);
