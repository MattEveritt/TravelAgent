import React, { FC, memo } from 'react';
import { TripText, FlightBookingScreensContainer } from '../../components';
import { FCLocalized } from '../../localization/FCLocalized';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

const _ChangesAndCancellationsScreen: FC = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return (
    <FlightBookingScreensContainer
      onBackPress={() => navigation.navigate('LuggageAndInsurance')}
      onNextPress={() => navigation.navigate('SeatSelection')}
      screenTitle={FCLocalized('Changes and Cancellations')}
      screenIndex={3}>
      <TripText text="Info about changes and cancellations will go here" />
    </FlightBookingScreensContainer>
  );
};

export const ChangesAndCancellationsScreen = memo(
  _ChangesAndCancellationsScreen,
);
