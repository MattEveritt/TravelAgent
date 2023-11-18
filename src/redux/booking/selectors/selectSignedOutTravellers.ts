import { createSelector } from '@reduxjs/toolkit';
import { selectTrip } from './selectTrip';

// Create a selector for the 'signedOutTravellers' state
const selectSignedOutTravellersObject = createSelector(
  selectTrip,
  trip => trip.signedOutTravellers,
);

export const selectAdults = createSelector(
  selectSignedOutTravellersObject,
  object => object.adults,
);

export const selectYouth = createSelector(
  selectSignedOutTravellersObject,
  object => object.youth,
);

export const selectInfants = createSelector(
  selectSignedOutTravellersObject,
  object => object.infants,
);

export const selectInfantsOnLap = createSelector(
  selectSignedOutTravellersObject,
  object => object.infantsOnLap,
);
