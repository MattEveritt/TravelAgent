import {View, Text, FlatList} from 'react-native';
import React, {useCallback, useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ScreenContainer, FlightCard} from '../../components';
import {fetchFlights} from '../../redux/flights/thunks';

export const FlightsScreen = () => {
  const dispatch = useDispatch();
  const flightOffers = useSelector(state => state.flights.flightOffers);

  useEffect(() => {
    dispatch(fetchFlights());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!flightOffers) {
    return null;
  }

  const renderFlightsScreen = () => (
    <View styles={{height: '100%'}}>
      <Text style={{height: '10%'}}>FlightsScreen</Text>
      {flightOffers.map(flight => (
        <FlightCard flight={flight} />
      ))}
    </View>
  );

  return <ScreenContainer renderContent={renderFlightsScreen} />;
};
