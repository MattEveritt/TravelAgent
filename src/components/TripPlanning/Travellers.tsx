import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {selectAllTravellers} from '../../redux';
import {useSelector} from 'react-redux';
import {Traveller} from './Traveller';

export const Travellers = () => {
  const travellers = useSelector(selectAllTravellers());

  return (
    <View style={{width: '100%'}}>
      {Object.keys(travellers).map(traveller => (
        // @ts-expect-error TS(7015): Element implicitly has an 'any' type because index... Remove this comment to see the full error message
        <Traveller traveller={travellers[traveller]} key={traveller} />
      ))}
    </View>
  )
};

const styles = StyleSheet.create({});
