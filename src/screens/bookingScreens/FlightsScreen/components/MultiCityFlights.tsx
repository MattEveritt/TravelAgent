import { Text, View } from 'react-native';
import React, { FC, memo, useEffect } from 'react';
import {
  fetchFlights,
  selectBookingTrip,
  selectFlightOffers,
  useAppDispatch,
  useAppSelector,
} from '../../../../redux';

const _MultiCityFlights: FC = () => {
  const dispatch = useAppDispatch();
  const flightOffers = useAppSelector(selectFlightOffers);
  const tripObj = useAppSelector(selectBookingTrip());

  useEffect(() => {
    dispatch(fetchFlights(tripObj));
  }, [dispatch, tripObj]);

  if (!flightOffers) {
    return null;
  }

  return (
    <View>
      <Text>MultiCityFlights</Text>
    </View>
  );
};

export const MultiCityFlights = memo(_MultiCityFlights);
