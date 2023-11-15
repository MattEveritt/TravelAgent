import React from 'react';
import { Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { FCLocalized } from '../localization/FCLocalized';
import { ScreenContainer } from '../components';

export const HomeScreen = () => {
  const navigation = useNavigation();
  const planTripHandler = useCallback(() => {
    // @ts-expect-error TS(2769): No overload matches this call.
    navigation.navigate('Trip Plan');
  }, [navigation]);

  return (
    <ScreenContainer headerTitle={FCLocalized('Explore')}>
      <Text>{FCLocalized('welcome')}Hey Matthew!</Text>
      <Button
        onPress={planTripHandler}
        title="Plan your next trip"
        color="orange"
        accessibilityLabel="Press this button to go to trip planning screen"
      />
    </ScreenContainer>
  );
};
