import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {selectAllTravellers} from '../../redux';
import {useSelector} from 'react-redux';
import {Traveller} from './Traveller';

const renderTravellers = (travellers: any) => {
  const travellersList = travellers.map((traveller: any) => (
    <Traveller traveller={traveller} key={traveller.id} />
  ));

  return travellersList;
};

export const Travellers = () => {
  const travellers = useSelector(selectAllTravellers());

  return <View style={{width: '100%'}}>{renderTravellers(travellers)}</View>;
};

const styles = StyleSheet.create({});
