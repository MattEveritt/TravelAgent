import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { TripModal, TripText, InnerCard } from '../../travelUI';
import { RangeDatePicker } from './RangeDatePicker';
import { SingleDatePicker } from './SingleDatePicker';
import { Icon } from '@rneui/base';
import { FCLocalized } from '../../../localization/FCLocalized';
import {
  selectBookingDates,
  selectDatesValidity,
  setBookingDates,
  setDatesValidity,
  useAppDispatch,
  useAppSelector,
} from '../../../redux';
import { theme } from '../../../styles/theme';

const ModalHeaderContent = ({ dateText }: { dateText: string | undefined }) => (
  <View style={styles.modalHeaderContainer}>
    <TripText text={dateText} style={styles.modalHeaderText} />
  </View>
);

export const DatesSelector = ({
  minDate = undefined,
  setMinDate = undefined,
  extraStyles = undefined,
  singleDate = true,
}: any) => {
  const dispatch = useAppDispatch();
  const dates = useAppSelector(selectBookingDates());
  const [modalVisible, setModalVisible] = useState(false);
  const { startDate, untilDate }: { startDate: string; untilDate: string } =
    dates[0];

  const setDates = (startDateString: string, untilDateString?: string) => {
    if (!dates[0]) return;
    const newDates = [
      {
        startDate: startDateString || startDate,
        untilDate: untilDateString || untilDate,
      },
    ];
    dispatch(setBookingDates(newDates));
    if (singleDate && !untilDateString) {
      dispatch(setDatesValidity(true));
    }
    if (!singleDate) {
      dispatch(setDatesValidity(true));
    }
  };

  const datesValid = useAppSelector(selectDatesValidity());

  const okButtonDisabled = startDate === 'OutBound' || untilDate === 'Inbound';

  const dateText = singleDate
    ? startDate === 'Outbound'
      ? FCLocalized(startDate)
      : new Date(startDate).toDateString()
    : `${
      startDate === 'Outbound'
        ? FCLocalized(startDate)
        : new Date(startDate).toDateString()
    } - ${
      untilDate === 'Inbound'
        ? FCLocalized(untilDate)
        : new Date(untilDate).toDateString()
    }`;

  const onCancelPress = () => {
    const startDateString = FCLocalized('Outbound');
    const untilDateString = FCLocalized('Inbound');
    setDates(startDateString, untilDateString);
    setModalVisible(false);
  };

  const onOkPress = () => {
    setModalVisible(false);
  };

  const datePickerSelector = () =>
    singleDate ? (
      <SingleDatePicker
        startDate={startDate}
        setDates={setDates}
        setModalVisible={setModalVisible}
        setMinDate={setMinDate}
        minDate={minDate}
      />
    ) : (
      <RangeDatePicker
        startDate={startDate}
        setDates={setDates}
        untilDate={untilDate}
      />
    );
  return (
    <InnerCard
      onPress={() => setModalVisible(!modalVisible)}
      pressDisabled={false}
      extraStyles={[
        styles.container,
        extraStyles,
        !datesValid && { borderColor: theme.RED_ERROR },
      ]}>
      <Icon
        name="calendar-edit"
        type="material-community"
        containerStyle={styles.iconContainer}
      />
      <View style={styles.titleContainer}>
        <TripText text={dateText} style={styles.dateCardText} />
      </View>
      <View style={styles.iconContainer} />
      <TripModal
        modalVisible={modalVisible}
        title={FCLocalized('Choose the dates')}
        headerContent={
          !singleDate
            ? () => <ModalHeaderContent dateText={dateText} />
            : undefined
        }
        onCancelPress={onCancelPress}
        onOkPress={!singleDate ? onOkPress : undefined}
        okButtonDisabled={okButtonDisabled}
        modalContent={datePickerSelector()}
      />
    </InnerCard>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    marginBottom: 0,
  },
  titleContainer: {
    width: '80%',
    alignItems: 'center',
  },
  iconContainer: {
    width: '10%',
  },
  modalHeaderContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalHeaderText: {
    fontSize: 20,
    fontWeight: '700',
  },
  dateCardText: {
    fontSize: 16,
  },
});
