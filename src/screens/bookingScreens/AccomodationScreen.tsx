import {View, Text} from 'react-native';
import React, {useCallback} from 'react';
import {ScreenContainer} from '../../components/travelUI';

export const AccomodationScreen = () => {
  const renderAccomodation = useCallback(
    () => (
      <View>
        <Text>AccomodationScreen</Text>
      </View>
    ),
    [],
  );
  return <ScreenContainer renderContent={renderAccomodation} />;
};
