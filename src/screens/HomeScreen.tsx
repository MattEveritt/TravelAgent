import React from 'react';
import { Text, Button } from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { useCallback } from 'react';
import { FCLocalized } from '../localization/FCLocalized';
import { ScreenContainer } from '../components';
import { SelectFlightSeatMap } from './SelectSeatsScreen/components';

export const HomeScreen = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const planTripHandler = useCallback(() => {
    navigation.navigate('Trip Plan');
  }, [navigation]);

  return <SelectFlightSeatMap flightOfferID={1} />;

  //   return (
  //     <ScreenContainer headerTitle={FCLocalized('Explore')}>
  //       <Text>{FCLocalized('welcome')}Hey Matthew!</Text>
  //       <Button
  //         onPress={planTripHandler}
  //         title="Plan your next trip"
  //         color="orange"
  //         accessibilityLabel="Press this button to go to trip planning screen"
  //       />
  //     </ScreenContainer>
  //   );
};
