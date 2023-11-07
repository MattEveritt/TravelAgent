import {createSelector} from '@reduxjs/toolkit';
import {selectSelf} from './selectSelf';

export const selectBookingTravellers = () =>
  createSelector(selectSelf, state => state.trip.travellers);
