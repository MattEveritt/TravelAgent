import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {TripModal, TripDateTimePicker} from '../travelUI';
import {Icon} from '@rneui/base';

const Dates = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [untilDate, setUntilDate] = useState(null);

  return (
    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text>
            {startDate === null ? '--' : new Date(startDate).toDateString()} -{' '}
            {untilDate === null ? '--' : new Date(untilDate).toDateString()}
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
          />
        }
      />
    </TouchableOpacity>
  );
};

export default Dates;

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
