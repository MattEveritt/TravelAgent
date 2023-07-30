import {StyleSheet, View} from 'react-native';
import React, {useCallback} from 'react';
import {useAppDispatch} from '../../redux';
const DatepickerRange = require ('react-native-range-datepicker');
import {updateTrip} from '../../redux/trips/thunks/updateTrip';

export const TripDateTimePicker = ({
  startDate,
  setStartDate,
  untilDate,
  setUntilDate,
  setModalVisible,
  trip
}: any) => {
  const dispatch = useAppDispatch();
  const handleSave = useCallback(
    (fromDate: any, toDate: any) => {
      const updatedTrip = {...trip};
      updatedTrip.from = Date.parse(fromDate);
      updatedTrip.to = Date.parse(toDate);

      dispatch(updateTrip(updatedTrip));
    },

    [trip],
  );
  return (
    <View style={{height: '95%'}}>
      <DatepickerRange
        onConfirm={(fromDate: any, toDate: any) => {
          handleSave(fromDate, toDate);
          setModalVisible(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
