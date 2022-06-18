import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import globalStyles from '../styles/globalStyles';

const LoadingScreen = ({navigation}) => {
  return (
    <View style={globalStyles.screenContainer}>
      <Text>LoadingScreen</Text>
    </View>
  );
};

export default LoadingScreen;
