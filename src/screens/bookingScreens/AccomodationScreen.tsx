import { View, Text } from 'react-native';
import React from 'react';
import { ScreenContainer } from '../../components/travelUI';
import { FCLocalized } from '../../localization/FCLocalized';

export const AccomodationScreen = () => {

  return (
    <ScreenContainer headerType='BookingNavHeader' headerTitle={FCLocalized('Hotels')}>
      <View>
        <Text>AccomodationScreen</Text>
      </View>
    </ScreenContainer>
  );
};
