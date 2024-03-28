import { createSelector } from '@reduxjs/toolkit';
import { selectFlightOffer } from './selectFlightOffer';
import { FlightOffer } from '../../../types/flightOfferTypes';

export const selectCheckedBagsByOfferID = createSelector(
  [selectFlightOffer],
  (flightOffer: FlightOffer) =>
    flightOffer?.travelerPricings[0].fareDetailsBySegment[0]
      .includedCheckedBags,
);
