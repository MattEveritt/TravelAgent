import { Text, View } from 'react-native';
import React, { FC, memo } from 'react';

const _FlightConfirmedMessage: FC = () => {
  return (
    <View>
      <Text>Your confirmed flight details here!</Text>
    </View>
  );
};

export const FlightConfirmedMessage = memo(_FlightConfirmedMessage);
