import React, { FC, memo } from 'react';
import { TripText, FlightBookingScreensContainer } from '../../components';
import { FCLocalized } from '../../localization/FCLocalized';
import { useAppSelector } from '../../redux';
import { AdditionalLuggage, IncludedLuggageRow } from './components';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

const _LuggageAndInsuranceScreen: FC = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const flightOfferID = useAppSelector(
    state => state.flights.selectedFlightOfferID,
  );

  return (
    <FlightBookingScreensContainer
      onBackPress={() => navigation.goBack()}
      onNextPress={() =>
        navigation.navigate('ChangesAndCancellations', { flightOfferID })
      }
      screenTitle={FCLocalized('Luggage and insurance')}
      screenIndex={2}>
      <TripText text={FCLocalized('Included luggage')} />
      <IncludedLuggageRow flightOfferID={flightOfferID} />
      <TripText text={FCLocalized('Add luggage items')} />
      <AdditionalLuggage flightOfferID={flightOfferID} />
      <TripText text={FCLocalized('Add luggage insurance')} />
      <TripText text={FCLocalized('Add travel insurance')} />
    </FlightBookingScreensContainer>
  );
};

export const LuggageAndInsuranceScreen = memo(_LuggageAndInsuranceScreen);
