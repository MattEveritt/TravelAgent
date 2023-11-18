import React, { Dispatch, SetStateAction } from 'react';
import { theme } from '../../../styles/theme';

const { SingleDatepicker } = require('react-native-range-datepicker');

type SingleDatePickerProps = {
  startDate: string;
  setDates: (startDateString: string) => void;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  setMinDate: Dispatch<SetStateAction<string>>;
  minDate: string;
};

export const SingleDatePicker = ({
  startDate,
  setDates,
  setModalVisible,
  setMinDate,
  minDate,
}: SingleDatePickerProps) => {
  const handleOnSelect = (date: Date) => {
    if (setMinDate) {
      setMinDate(new Date(date).toISOString());
    }
    setDates(new Date(date).toISOString());
    setModalVisible(false);
  };

  return (
    <SingleDatepicker
      startDate={startDate}
      selectedBackgroundColor={theme.PRIMARY_COLOR}
      onSelect={handleOnSelect}
      showClose={false}
      minDate={minDate || new Date().toISOString()}
    />
  );
};
