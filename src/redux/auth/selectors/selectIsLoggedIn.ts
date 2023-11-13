import { createSelector } from '@reduxjs/toolkit';
import { selectSelf } from './selectSelf';

export const selectIsLoggedIn = () =>
  createSelector(selectSelf, state => state.isLoggedIn);
