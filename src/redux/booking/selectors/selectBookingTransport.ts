import {createSelector} from '@reduxjs/toolkit';
import {selectSelf} from './selectSelf';

export const selectBookingTransport = () =>
  createSelector(selectSelf, state => state.trip.transport);
