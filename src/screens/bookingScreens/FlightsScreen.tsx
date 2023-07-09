import {View, Text, FlatList} from 'react-native';
import React, {useCallback, useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ScreenContainer, FlightCard} from '../../components';
import {fetchFlights} from '../../redux/flights/thunks';

export const FlightsScreen = () => {
  const dispatch = useDispatch();
  // @ts-expect-error TS(2571): Object is of type 'unknown'.
  const flightOffers = useSelector(state => state.flights.flightOffers);

  useEffect(() => {
    // @ts-expect-error TS(2345): Argument of type 'AsyncThunkAction<any, void, Asyn... Remove this comment to see the full error message
    dispatch(fetchFlights());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!flightOffers) {
    return null;
  }

  const renderFlightsScreen = () => (
    // @ts-expect-error TS(2769): No overload matches this call.
    <View styles={{height: '100%'}}>
      <Text style={{height: '10%'}}>FlightsScreen</Text>
      {flightOffers.map((flight: any) => (
        <FlightCard flight={flight} />
      ))}
    </View>
  );

  return <ScreenContainer renderContent={renderFlightsScreen} />;
};
