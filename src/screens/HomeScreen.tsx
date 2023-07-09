import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import globalStyles from '../styles/globalStyles';
import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';

export const HomeScreen = () => {
  const navigation = useNavigation();
  const planTripHandler = useCallback(() => {
    console.log('Go to plan trip');
    // @ts-expect-error TS(2769): No overload matches this call.
    navigation.navigate('Trip Plan');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={globalStyles.screenContainer}>
      <Text>Hey Matthew!</Text>
      <Button
        onPress={planTripHandler}
        title="Plan your next trip"
        color="orange"
        accessibilityLabel="Press this button to go to trip planning screen"
      />
    </View>
  );
};
