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

export const selectChildren = createSelector(
  selectSignedOutTravellersObject,
  object => object.children,
);

export const selectSeniors = createSelector(
  selectSignedOutTravellersObject,
  object => object.seniors,
);

export const selectStudents = createSelector(
  selectSignedOutTravellersObject,
  object => object.students,
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
