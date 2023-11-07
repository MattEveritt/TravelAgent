import { createSelector } from '@reduxjs/toolkit';
import { selectSelf } from './selectSelf';

export const selectDestinationsValidity = () =>
  createSelector(selectSelf, state => state.trip.destinationsValid);