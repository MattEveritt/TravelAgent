import React, { FC, memo, useCallback } from 'react';
import { ScreenContainer } from '../../../components/travelUI';
import { FCLocalized } from '../../../localization/FCLocalized';
import { MultiCityTransport, ReturnTransport } from './components';
import {
  selectIsLoggedIn,
  selectTripById,
  useAppSelector,
} from '../../../redux';
import { useResetLoggedOutTripState } from '../../../hooks';
import { useRoute } from '@react-navigation/native';

const _TransportScreen: FC = () => {
  const { resetLoggedOutTripState } = useResetLoggedOutTripState();
  const { params } = useRoute() as { params: { tripId: string } };
  const tripObj = useAppSelector(selectTripById(params?.tripId || undefined));
  const isLoggedIn = useAppSelector(selectIsLoggedIn());

  const renderContent = useCallback(() => {
    switch (tripObj?.type) {
      case 'Return':
        return <ReturnTransport />;
      case 'Multi-city':
        return <MultiCityTransport />;
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

export const TransportScreen = memo(_TransportScreen);
