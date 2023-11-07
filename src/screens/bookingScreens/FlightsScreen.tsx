import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { ScreenContainer, FlightCard } from '../../components';
import { fetchFlights, useAppDispatch, useAppSelector } from '../../redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FCLocalized } from '../../localization/FCLocalized';

export const FlightsScreen = () => {
  const { params } = useRoute();
  const dispatch = useAppDispatch();
  const flightOffers = useAppSelector(state => state.flights.flightOffers);

  useEffect(() => {
    dispatch(fetchFlights());
  }, []);

  if (!flightOffers) {
    return null;
  }

  return (
    <ScreenContainer headerType='BookingNavHeader' headerTitle={FCLocalized('Flights')}>
      <View style={{ height: '100%' }}>
        <Text style={{ height: '10%' }}>FlightsScreen</Text>
        {flightOffers.map((flight: any) => <FlightCard flight={flight} />)}
      </View>
    </ScreenContainer>
  );
};
