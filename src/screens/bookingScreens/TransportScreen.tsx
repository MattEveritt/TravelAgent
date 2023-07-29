import {View, Text} from 'react-native';
import React, {useCallback} from 'react';
import {ScreenContainer} from '../../components/travelUI';

export const TransportScreen = () => {
  const renderTransportScreen = useCallback(
    () => (
      <View>
        <Text>TransportScreen</Text>
      </View>
    ),
    [],
  );
  return <ScreenContainer renderContent={renderTransportScreen} />;
};
