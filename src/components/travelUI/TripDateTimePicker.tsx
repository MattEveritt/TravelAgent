import {StyleSheet, View} from 'react-native';
import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import DatepickerRange from 'react-native-range-datepicker';
import {updateTrip} from '../../redux/trips/thunks/updateTrip';

export const TripDateTimePicker = ({
  startDate,
  setStartDate,
  untilDate,
  setUntilDate,
  setModalVisible,
  trip,
}) => {
  const dispatch = useDispatch();
  const handleSave = useCallback(
    (fromDate, toDate) => {
      const updatedTrip = {...trip};
      updatedTrip.from = Date.parse(fromDate);
      updatedTrip.to = Date.parse(toDate);

      dispatch(updateTrip(updatedTrip));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [trip],
  );
  return (
    <View style={{height: '95%'}}>
      <DatepickerRange
        onConfirm={(fromDate, toDate) => {
          handleSave(fromDate, toDate);
          setModalVisible(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
