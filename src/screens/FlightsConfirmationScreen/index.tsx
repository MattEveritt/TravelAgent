import React, { memo, useState } from 'react';
import {
  FlightBookingScreensContainer,
  TripModal,
  TripText,
} from '../../components';
import { FCLocalized } from '../../localization/FCLocalized';
import { setFlightsConfirmed, useAppDispatch } from '../../redux';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

const _FlightsConfirmationScreen = () => {
  const dispatch = useAppDispatch();
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);

  const onConfirmPress = () => {
    setConfirmModalVisible(true);
  };

  const confirmationModalOkPress = () => {
    dispatch(setFlightsConfirmed(true));
    navigation.navigate('Hotels');
  };

  return (
    <FlightBookingScreensContainer
      onNextPress={onConfirmPress}
      onBackPress={() => navigation.navigate('SeatSelection')}
      screenIndex={5}
      screenTitle={FCLocalized('Flight confirmation')}>
      <TripText text={FCLocalized('Extras')} />
      <TripModal
        modalVisible={confirmModalVisible}
        title={FCLocalized('Flight confirmation')}
        onOkPress={confirmationModalOkPress}
        onCancelPress={() => setConfirmModalVisible(false)}
        isAlert
        alertText={FCLocalized('Are you sure all the information is correct?')}
      />
    </FlightBookingScreensContainer>
  );
};

export const FlightsConfirmationScreen = memo(_FlightsConfirmationScreen);
