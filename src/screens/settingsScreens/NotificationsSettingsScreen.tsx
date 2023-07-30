import {View, Text} from 'react-native';
import React, {useCallback} from 'react';
import {ScreenContainer} from '../../components/travelUI';

export const NotificationsSettingsScreen = () => {
  const renderNotificationsSettingsScreen = useCallback(
    () => (
      <View>
        <Text>NotificationsSettingsScreen</Text>
      </View>
    ),
    [],
  );
  return <ScreenContainer renderContent={renderNotificationsSettingsScreen} />;
};
