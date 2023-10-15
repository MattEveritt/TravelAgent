import {createSelector} from '@reduxjs/toolkit';
import {selectSelf} from './selectSelf';

export const selectIsBooking = () =>
  createSelector(selectSelf, (state) => state.isBooking);
