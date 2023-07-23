import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import globalStyles from '../styles/globalStyles';
import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import { FCLocalized, init } from '../localization/FCLocalized';

export const HomeScreen = () => {
  const navigation = useNavigation();
  const planTripHandler = useCallback(() => {
    navigation.navigate('Trip Plan');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={globalStyles.screenContainer}>
      <Text>{FCLocalized('welcome')}Hey Matthew!</Text>
      <Button
        onPress={planTripHandler}
        title="Plan your next trip"
        color="orange"
        accessibilityLabel="Press this button to go to trip planning screen"
      />
    </View>
  );
};
