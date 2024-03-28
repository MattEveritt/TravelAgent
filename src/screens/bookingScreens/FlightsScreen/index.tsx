import React, { FC, memo, useCallback, useEffect } from 'react';
import { ScreenContainer } from '../../../components';
import {
  useAppSelector,
  selectTripById,
  selectIsLoggedIn,
  fetchFlights,
  useAppDispatch,
  selectFlightOffers,
} from '../../../redux';
import { useRoute } from '@react-navigation/native';
import { FCLocalized } from '../../../localization/FCLocalized';
import { useResetLoggedOutTripState } from '../../../hooks';
import { FlightConfirmedMessage, FlightOffers } from './components';
import { ActivityIndicator } from 'react-native';
import { theme } from '../../../styles/theme';

const _FlightsScreen: FC = () => {
  const dispatch = useAppDispatch();
  const { resetLoggedOutTripState } = useResetLoggedOutTripState();
  const { params } = useRoute() as { params: { tripId: string } };
  const tripObj = useAppSelector(selectTripById(params?.tripId));
  const flightConfirmed = useAppSelector(
    state => state.flights.flightsConfirmed,
  );
  const isLoggedIn = useAppSelector(selectIsLoggedIn());
  const flightOffers = useAppSelector(selectFlightOffers);
  const fetchFlightStatus = useAppSelector(
    state => state.flights.fetchFlightsStatus,
  );

  useEffect(() => {
    if (!tripObj) return;
    dispatch(fetchFlights(tripObj));
  }, [dispatch, tripObj]);

  const renderContent = useCallback(() => {
    if (fetchFlightStatus === 'loading' || !tripObj)
      return (
        <ActivityIndicator
          style={{ flex: 1 }}
          size="large"
          color={theme.PRIMARY_COLOR}
        />
      );

    if (flightConfirmed) return <FlightConfirmedMessage />;

    return <FlightOffers flightOffers={flightOffers} tripObj={tripObj} />;
  }, [fetchFlightStatus, flightConfirmed, flightOffers, tripObj]);

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
