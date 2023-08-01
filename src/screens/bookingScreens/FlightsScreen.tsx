import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {ScreenContainer, FlightCard} from '../../components';
import {fetchFlights, useAppDispatch, useAppSelector} from '../../redux';

export const FlightsScreen = () => {
  const dispatch = useAppDispatch();
  const flightOffers = useAppSelector(state => state.flights.flightOffers);

  useEffect(() => {
    dispatch(fetchFlights());
  }, []);

  if (!flightOffers) {
    return null;
  }

  const renderFlightsScreen = () => (
    <View style={{height: '100%'}}>
      <Text style={{height: '10%'}}>FlightsScreen</Text>
      {flightOffers.map((flight: any) => <FlightCard flight={flight} />)}
    </View>
  );

  return <ScreenContainer renderContent={renderFlightsScreen} />;
};
