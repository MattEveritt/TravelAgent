import {StyleSheet} from 'react-native';
import React from 'react';
import DatepickerRange from 'react-native-range-datepicker';

const TripDateTimePicker = ({
  startDate,
  setStartDate,
  untilDate,
  setUntilDate,
  setModalVisible,
}) => {
  return (
    <DatepickerRange
      startDate="13052017"
      untilDate="26062017"
      onConfirm={(fromDate, toDate) => {
        setStartDate(fromDate);
        setUntilDate(toDate);
        setModalVisible(false);
      }}
    />
  );
};

export default TripDateTimePicker;

const styles = StyleSheet.create({});
