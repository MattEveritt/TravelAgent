import {View, Text} from 'react-native';
import React, {useCallback} from 'react';
import {ScreenContainer} from '../../components/travelUI';

export const AccountScreen = () => {
  const renderAccountScreen = useCallback(
    () => (
      <View>
        <Text>AccountScreen</Text>
      </View>
    ),
    [],
  );
  return <ScreenContainer renderContent={renderAccountScreen} />;
};
