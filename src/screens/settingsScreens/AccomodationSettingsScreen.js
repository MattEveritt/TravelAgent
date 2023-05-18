import {View, Text} from 'react-native';
import React, {useCallback} from 'react';
import {ScreenContainer} from '../../components/travelUI';

export const AccomodationSettingsScreen = () => {
  const renderAccomodationSettingsScreen = useCallback(
    () => (
      <View>
        <Text>AccomodationSettingsScreen</Text>
      </View>
    ),
    [],
  );
  return <ScreenContainer renderContent={renderAccomodationSettingsScreen} />;
};
