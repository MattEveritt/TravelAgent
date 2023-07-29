import {StyleSheet, View} from 'react-native';
import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import DatepickerRange from 'react-native-range-datepicker';
import {updateTrip} from '../../redux/trips/thunks/updateTrip';

export const TripDateTimePicker = ({
  startDate,
  setStartDate,
  untilDate,
  setUntilDate,
  setModalVisible,
  trip
}: any) => {
  const dispatch = useDispatch();
  const handleSave = useCallback(
    (fromDate: any, toDate: any) => {
      const updatedTrip = {...trip};
      updatedTrip.from = Date.parse(fromDate);
      updatedTrip.to = Date.parse(toDate);

      // @ts-expect-error TS(2345): Argument of type 'AsyncThunkAction<void, void, Asy... Remove this comment to see the full error message
      dispatch(updateTrip(updatedTrip));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
