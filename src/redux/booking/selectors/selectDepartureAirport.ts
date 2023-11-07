import { createSelector } from '@reduxjs/toolkit';
import { selectSelf } from './selectSelf';

export const selectDepartureAirport = () =>
  createSelector(selectSelf, state => state.trip.departureAirport);
