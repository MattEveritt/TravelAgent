import {View, Text} from 'react-native';
import React, {useCallback} from 'react';
import {ScreenContainer} from '../../components/travelUI';

export const TravellersScreen = () => {
  const renderTravellersScreen = useCallback(
    () => (
      <View>
        <Text>TravellersScreen</Text>
      </View>
    ),
    [],
  );
  return <ScreenContainer renderContent={renderTravellersScreen} />;
};
