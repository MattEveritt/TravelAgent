import {createSelector} from '@reduxjs/toolkit';
import {selectSelf} from './selectSelf';

export const selectAllTravellers = () =>
  createSelector(selectSelf, (state) => state.travellers);
