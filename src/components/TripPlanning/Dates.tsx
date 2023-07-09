import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {updateTrip} from '../../redux/trips/thunks/updateTrip';
import {TripModal, TripDateTimePicker} from '../travelUI';
import {Icon} from '@rneui/base';

export const Dates = ({trip}: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [startDate, setStartDate] = useState(trip.from);
  const [untilDate, setUntilDate] = useState(trip.to);

  return (
    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text>
            {!startDate ? '--' : new Date(startDate).toDateString()} -{' '}
            {!untilDate ? '--' : new Date(untilDate).toDateString()}
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon name="edit" />
        </View>
      </View>
      <TripModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        modalContent={
          <TripDateTimePicker
            startDate={startDate}
            setStartDate={setStartDate}
            untilDate={untilDate}
            setUntilDate={setUntilDate}
            setModalVisible={setModalVisible}
            trip={trip}
          />
        }
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    width: '90%',
  },
  iconContainer: {
    width: '10%',
  },
});
