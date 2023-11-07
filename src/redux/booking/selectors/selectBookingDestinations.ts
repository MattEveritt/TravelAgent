import {createSelector} from '@reduxjs/toolkit';
import {selectSelf} from './selectSelf';

export const selectBookingDestinations = () =>
  createSelector(selectSelf, state => state.trip.destinations);
