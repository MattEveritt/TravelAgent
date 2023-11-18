import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllTrips } from '../../redux';
import { StyleSheet, View } from 'react-native';
import { TripCard, Trip } from './TripCard';

export const Trips = () => {
  const trips = useSelector(selectAllTrips());
  if (!trips) return null;

  return (
    <View style={styles.container}>
      {trips?.map((trip: Trip, i) => <TripCard trip={trip} key={i} />)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
