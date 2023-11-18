import { createSelector } from '@reduxjs/toolkit';
import { selectTrip } from './selectTrip';

export const selectDepartureAirportValidity = () =>
  createSelector(selectTrip, trip => trip.departureAirportValid);
