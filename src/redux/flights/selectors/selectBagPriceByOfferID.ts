import { createSelector } from '@reduxjs/toolkit';
import { selectFlightOffer } from './selectFlightOffer';
import { FlightOffer } from '../../../types/flightOfferTypes';

export const selectBagPriceByOfferID = createSelector(
  [selectFlightOffer],
  (flightOffer: FlightOffer) => {
    const checkedBagsAdditionalService =
      flightOffer?.price.additionalServices?.filter(
        service => service.type === 'CHECKED_BAGS',
      );

    if (!checkedBagsAdditionalService || !checkedBagsAdditionalService.length) {
      return null;
    }

    return checkedBagsAdditionalService[0]?.amount;
  },
);
