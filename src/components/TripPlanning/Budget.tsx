import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useDispatch} from 'react-redux';
import {updateTrip} from '../../redux/trips/thunks/updateTrip';
import {TripTextInput, TripModal, TripButton} from '../travelUI';
import {Icon} from '@rneui/base';

export const Budget = ({trip}) => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [budget, setBudget] = useState(trip.budget);

  const handleSave = useCallback(() => {
    const updatedTrip = {...trip};
    updatedTrip.budget = budget;

    dispatch(updateTrip(updatedTrip));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [budget, trip]);

  return (
    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text>{budget ? budget : '0.00'} €</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon name="edit" />
        </View>
      </View>
      <TripModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        modalContent={
          <>
            <TripTextInput
              value={budget}
              onChangeText={setBudget}
              placeHolder="€"
            />
            <TripButton title="Save" onPress={handleSave} />
          </>
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
