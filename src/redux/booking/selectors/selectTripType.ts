import { createSelector } from '@reduxjs/toolkit';
import { selectSelf } from './selectSelf';

export const selectTripType = () =>
  createSelector(selectSelf, state => state.trip.type);
