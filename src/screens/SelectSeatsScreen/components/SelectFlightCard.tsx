import { StyleSheet } from 'react-native';
import React, { FC } from 'react';
import { Segment } from '../../../types/flightOfferTypes';
import { Card, TripText } from '../../../components';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

type Props = {
  segment: Segment;
};

export const SelectFlightCard: FC<Props> = segment => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const onPress = () => {
    navigation.navigate('SeatMapScreen', { segment });
  };

  return (
    <Card
      extraStyles={styles.container}
      onPress={onPress}
      pressDisabled={false}>
      <TripText text={segment.segment.departure.iataCode} />
      <TripText text="->" style={{ fontSize: 24 }} />
      <TripText text={segment.segment.arrival.iataCode} />
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
});
