import { Text, View } from 'react-native';
import React, { FC, memo, useEffect } from 'react';
import {
  fetchFlights,
  selectBookingTrip,
  selectFlightOffers,
  useAppDispatch,
  useAppSelector,
} from '../../../../redux';

const _MultiCityAccomodation: FC = () => {
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
      <Text>MultiCityAccomodation</Text>
    </View>
  );
};

export const MultiCityAccomodation = memo(_MultiCityAccomodation);
