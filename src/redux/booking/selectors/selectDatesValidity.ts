import { createSelector } from '@reduxjs/toolkit';
import { selectSelf } from './selectSelf';

export const selectDatesValidity = () =>
  createSelector(selectSelf, state => state.trip.datesValid);
