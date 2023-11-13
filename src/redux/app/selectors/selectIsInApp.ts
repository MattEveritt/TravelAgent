import { createSelector } from '@reduxjs/toolkit';
import { selectSelf } from './selectSelf';

export const selectIsInApp = () =>
  createSelector(selectSelf, state => state.isInApp);
