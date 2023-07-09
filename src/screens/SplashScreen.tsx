import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import globalStyles from '../styles/globalStyles';

export const SplashScreen = ({navigation}) => {
  return (
    <View style={globalStyles.screenContainer}>
      <Text>SplashScreen</Text>
    </View>
  );
};
