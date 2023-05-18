import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import globalStyles from '../styles/globalStyles';
import {useNavigation} from '@react-navigation/native';

export const HomeScreen = () => {
  const navigation = useNavigation();
  const planTripHandler = () => {
    console.log('Go to plan trip');
    navigation.navigate('Trip Plan');
  };

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
