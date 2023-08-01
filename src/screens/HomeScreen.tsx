import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import globalStyles from '../styles/globalStyles';
import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import { FCLocalized, init } from '../localization/FCLocalized';

export const HomeScreen = () => {
  const navigation = useNavigation();
  const planTripHandler = useCallback(() => {
    // @ts-expect-error TS(2769): No overload matches this call.
    navigation.navigate('Trip Plan');
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
