import { createSelector } from '@reduxjs/toolkit';
import { selectSelf } from './selectSelf';

export const selectUserId = () =>
  createSelector(selectSelf, state => state.userId);
