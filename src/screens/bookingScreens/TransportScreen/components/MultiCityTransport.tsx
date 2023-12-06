import { Text, View } from 'react-native';
import React, { FC, memo, useEffect } from 'react';
import {
  fetchFlights,
  selectBookingTrip,
  selectFlightOffers,
  useAppDispatch,
  useAppSelector,
} from '../../../../redux';

const _MultiCityTransport: FC = () => {
  const dispatch = useAppDispatch();
  const flightOffers = useAppSelector(selectFlightOffers);
  const tripObj = useAppSelector(selectBookingTrip());

  useEffect(() => {
    dispatch(fetchFlights(tripObj));
  }, [dispatch, tripObj]);

  if (!flightOffers) {
    return null;
  }

  console.log('flightOffers', flightOffers);
  return (
    <View>
      <Text>MultiCityTransport</Text>
    </View>
  );
};

export const MultiCityTransport = memo(_MultiCityTransport);
