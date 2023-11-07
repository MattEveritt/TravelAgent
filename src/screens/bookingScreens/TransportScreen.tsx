import { View, Text } from 'react-native';
import React, { useCallback } from 'react';
import { ScreenContainer } from '../../components/travelUI';
import { FCLocalized } from '../../localization/FCLocalized';

export const TransportScreen = () => {
  return (
    <ScreenContainer headerType='BookingNavHeader' headerTitle={FCLocalized('Transport')}>
      <View>
        <Text>TransportScreen</Text>
      </View>
    </ScreenContainer>
  );
};
