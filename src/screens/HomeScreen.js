import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import globalStyles from '../styles/globalStyles';

const HomeScreen = ({navigation}) => {
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

export default HomeScreen;
