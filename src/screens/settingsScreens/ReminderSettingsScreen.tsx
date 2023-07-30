import {View, Text} from 'react-native';
import React, {useCallback} from 'react';
import {ScreenContainer} from '../../components/travelUI';

export const ReminderSettingsScreen = () => {
  const renderReminderSettingsScreen = useCallback(
    () => (
      <View>
        <Text>ReminderSettingsScreen</Text>
      </View>
    ),
    [],
  );
  return <ScreenContainer renderContent={renderReminderSettingsScreen} />;
};
