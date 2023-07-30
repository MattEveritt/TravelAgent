import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import globalStyles from '../styles/globalStyles';

export const SplashScreen = ({
  navigation
}: any) => {
  return (
    <View style={globalStyles.screenContainer}>
      <Text>SplashScreen</Text>
    </View>
  );
};
