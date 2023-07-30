import {View, Text} from 'react-native';
import React, {useCallback} from 'react';
import {ScreenContainer} from '../../components/travelUI';

export const FlightSettingsScreen = () => {
  const renderFlightSettingsScreen = useCallback(
    () => (
      <View>
        <Text>FlightSettingsScreen</Text>
      </View>
    ),
    [],
  );
  return <ScreenContainer renderContent={renderFlightSettingsScreen} />;
};
