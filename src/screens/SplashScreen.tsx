import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import globalStyles from '../styles/globalStyles';
import { ScreenContainer } from '../components';

export const SplashScreen = ({
  navigation
}: any) => {
  return (
    <ScreenContainer headerDisabled>
      <Text>SplashScreen</Text>
    </ScreenContainer>
  );
};
