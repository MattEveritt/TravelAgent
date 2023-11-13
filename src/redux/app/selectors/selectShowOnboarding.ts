import { createSelector } from '@reduxjs/toolkit';
import { selectSelf } from './selectSelf';

export const selectShowOnboarding = () =>
  createSelector(selectSelf, state => state.showOnboarding);
