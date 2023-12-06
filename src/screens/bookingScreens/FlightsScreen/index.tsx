import React, { FC, memo, useCallback } from 'react';
import { ScreenContainer } from '../../../components';
import {
  useAppSelector,
  selectTripById,
  selectIsLoggedIn,
} from '../../../redux';
import { useRoute } from '@react-navigation/native';
import { FCLocalized } from '../../../localization/FCLocalized';
import { useResetLoggedOutTripState } from '../../../hooks';
import { OneWayFlights, ReturnFlights, MultiCityFlights } from './components';

const _FlightsScreen: FC = () => {
  const { resetLoggedOutTripState } = useResetLoggedOutTripState();
  const { params } = useRoute() as { params: { tripId: string } };
  const tripObj = useAppSelector(selectTripById(params?.tripId));
  const isLoggedIn = useAppSelector(selectIsLoggedIn());

  const renderContent = useCallback(() => {
    switch (tripObj?.type) {
      case 'One-way':
        return <OneWayFlights tripObj={tripObj} />;
      case 'Return':
        return <ReturnFlights />;
      case 'Multi-city':
        return <MultiCityFlights />;
      default:
        return null;
    }
  }, [tripObj]);

  const onBackPressExtra = () => {
    if (!isLoggedIn) {
      resetLoggedOutTripState();
    }
  };

  return (
    <ScreenContainer
      onBackPressExtra={onBackPressExtra}
      headerType="BookingNavHeader"
      headerTitle={FCLocalized('Flights')}>
      {renderContent()}
    </ScreenContainer>
  );
};

export const FlightsScreen = memo(_FlightsScreen);
