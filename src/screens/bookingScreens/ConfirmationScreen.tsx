import { View, Text } from 'react-native';
import React from 'react';
import { ScreenContainer } from '../../components/travelUI';

export const ConfirmationScreen = () => {
  return (
    <ScreenContainer headerType="CloseHeader" headerTitle="Confirmation">
      <View>
        <Text>ConfirmationScreen</Text>
      </View>
    </ScreenContainer>
  );
};
