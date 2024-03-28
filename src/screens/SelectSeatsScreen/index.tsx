import React, { memo } from 'react';
import { useAppSelector } from '../../redux';
import { FlightBookingScreensContainer } from '../../components/FlightBookingScreensContainer';
import { SelectFlightSeatMap } from './components/SelectFlightSeatMap';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { FCLocalized } from '../../localization/FCLocalized';

const _SelectSeatsScreen = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const flightOfferID = useAppSelector(
    state => state.flights.selectedFlightOfferID,
  );

  if (!flightOfferID) return null;

  return (
    <FlightBookingScreensContainer
      onBackPress={() => navigation.navigate('ChangesAndCancellations')}
      onNextPress={() => navigation.navigate('FlightsConfirmation')}
      screenIndex={4}
      screenTitle={FCLocalized('Seat selection')}>
      <SelectFlightSeatMap flightOfferID={flightOfferID} />
    </FlightBookingScreensContainer>
  );
};

export const SelectSeatsScreen = memo(_SelectSeatsScreen);
