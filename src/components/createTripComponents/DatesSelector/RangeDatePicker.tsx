import React from 'react';
import { FCLocalized } from '../../../localization/FCLocalized';
// @ts-ignore
import DatepickerRange from 'react-native-range-datepicker';
import { theme } from '../../../styles/theme';

type RangeDatePickerProps = {
  startDate: string,
  untilDate: string,
  setDates: (startDateString: string, untilDateString: string) => void,
}

export const RangeDatePicker = ({ startDate, untilDate, setDates }: RangeDatePickerProps) => {
  const handleOnSelect = (startDate: Date, untilDate: Date) => {
    const startDateString = !startDate ? FCLocalized('Outbound') : new Date(startDate).toISOString();
    const untilDateString = !untilDate ? FCLocalized('Inbound') : new Date(untilDate).toISOString();
    setDates(startDateString, untilDateString);
  };

  return (
    <DatepickerRange 
      startDate={startDate}
      untilDate={untilDate}
      showReset={false}
      showClose={false}
      showConfirmButton={false}
      showSelectionInfo={false}
      showButton={false}
      selectedBackgroundColor={theme.ACCENT}
      minDate={new Date().toISOString()}
      onSelect={handleOnSelect}
    />
  );
};
