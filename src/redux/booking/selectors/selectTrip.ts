import { createSelector } from '@reduxjs/toolkit';
import { selectSelf } from './selectSelf';

// Create a selector for the 'trip' state
export const selectTrip = createSelector(selectSelf, state => state.trip);
