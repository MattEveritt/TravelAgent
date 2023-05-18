import {View, Text} from 'react-native';
import React, {useCallback} from 'react';
import {ScreenContainer} from '../../components/travelUI';

export const ConfirmationScreen = () => {
  const renderConfirmationScreen = useCallback(
    () => (
      <View>
        <Text>ConfirmationScreen</Text>
      </View>
    ),
    [],
  );
  return <ScreenContainer renderContent={renderConfirmationScreen} />;
};
