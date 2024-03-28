import { createSelector } from '@reduxjs/toolkit';
import { selectFlightOffers } from './selectFlightOffers';

export const selectFlightOffer = createSelector(
  [selectFlightOffers, (state, flightOfferID) => flightOfferID],
  (flightOffers, flightOfferID) => flightOffers[flightOfferID],
);
