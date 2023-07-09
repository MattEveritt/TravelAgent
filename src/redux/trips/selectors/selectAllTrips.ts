import {createSelector} from '@reduxjs/toolkit';
import {selectSelf} from './selectSelf';

export const selectAllTrips = () =>
  createSelector(selectSelf, state => state.trips);
