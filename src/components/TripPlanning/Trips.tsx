import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {selectAllTrips} from '../../redux';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {deleteTrip, useAppDispatch, toggleBookingFlow} from '../../redux';
import {useNavigation} from '@react-navigation/native';
import { Card, TripText } from '../travelUI';
import { Icon, Image } from '@rneui/base';
import { theme } from '../../styles/theme';

interface Trip {
  destination: string,
  id: string,
};
const TripCard = ({
  trip,
  i
}: any) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const handleDeleteTrip = () => {
    dispatch(deleteTrip(trip.id));
  };

  const handleSelectTrip = () => {
    navigation.navigate('Booking navigator');
  };

  const destinationNameArray = trip.destination.split(', ');
  const cityName = destinationNameArray[0];
  const countryName = destinationNameArray[destinationNameArray.length -1];
  const departureYear = '2024';
  const dates = '14 Mar - 18 Mar';

  return (
    <Card onPress={() => handleSelectTrip()}>
      <Image style={styles.imgStyles} source={{uri: ('https://images.unsplash.com/photo-1547473341-7602ffc0ae43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')}} />
      <View style={styles.destinationRow}>
        <TripText text={`${cityName} ${departureYear}`} style={styles.cityNameText}/>
        <View style={styles.countryName}>
          <TripText text={countryName} style={styles.countryNameText} />
          <Icon name='map-marker-outline' type='material-community' color={theme.PRIMARY_COLOR} />
        </View>
      </View>
      <TripText text={dates} style={styles.datesRow} />
    </Card>
  );
};

export const Trips = () => {
  const trips = useSelector(selectAllTrips());

  return (
    <View style={styles.container}>
      {trips.map((trip: Trip, i) => <TripCard trip={trip} index={i}/>)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  datesRow: {
    color: theme.PRIMARY_COLOR,
    paddingTop: 5
  },
  imgStyles: {
    height: 200, 
    width: '100%', 
    borderRadius: 8, 
    marginBottom: 10
  },
  TripButtonContainer: {
    backgroundColor: '#FFD580',
    flexDirection: 'row',
    // alignItems: 'center',
    // alignContent: 'space-between',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 10,
  },
  TripButtons: {
    width: '45%',
  },
  countryNameText: {
    color: theme.PRIMARY_COLOR,
    fontSize: 18
  },
  countryName: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  destinationRow: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
  cityNameText: {
    fontSize: 18,
  }
});
