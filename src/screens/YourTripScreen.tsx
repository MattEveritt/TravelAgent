import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { ScreenContainer } from '../components';
import { FCLocalized } from '../localization/FCLocalized';

export const YourTripScreen = ({}: any) => {
  return (
    <ScreenContainer headerTitle={FCLocalized('Current trip')}>
      <Text>YourTripScreen</Text>
    </ScreenContainer>
  );
};
