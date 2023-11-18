import { createSelector } from '@reduxjs/toolkit';
import { selectTrip } from './selectTrip';

export const selectBookingTrip = () => createSelector(selectTrip, trip => trip);
