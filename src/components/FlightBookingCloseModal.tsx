import React, { FC, memo } from 'react';
import { TripModal } from './travelUI';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { FCLocalized } from '../localization/FCLocalized';

type Props = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
};

const _FlightBookingCloseModal: FC<Props> = ({
  modalVisible,
  setModalVisible,
}) => {
  const navigate: NavigationProp<ParamListBase> = useNavigation();

  const onConfirm = () => {
    navigate.navigate('Flights');
  };

  const onCancel = () => {
    setModalVisible(false);
  };
  return (
    <TripModal
      modalVisible={modalVisible}
      title={FCLocalized('Exit booking?')}
      onOkPress={onConfirm}
      onCancelPress={onCancel}
      isAlert
      alertText={FCLocalized(
        'Are you sure you want to close the booking? All the information will be lost.',
      )}
    />
  );
};

export const FlightBookingCloseModal = memo(_FlightBookingCloseModal);
