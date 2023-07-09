import {View, Text} from 'react-native';
import React, {useCallback} from 'react';
import {ScreenContainer} from '../../components/travelUI';

export const ProfileScreen = () => {
  const renderProfileScreen = useCallback(
    () => (
      <View>
        <Text>ProfileScreen</Text>
      </View>
    ),
    [],
  );
  return <ScreenContainer renderContent={renderProfileScreen} />;
};
