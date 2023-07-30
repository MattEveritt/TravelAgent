import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useCallback, useState} from 'react';
import {updateTrip, useAppDispatch} from '../../redux';
import {TripTextInput, TripModal, TripButton} from '../travelUI';
import {Icon} from '@rneui/base';

export const Budget = ({
  trip
}: any) => {
  const dispatch = useAppDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [budget, setBudget] = useState(trip.budget);

  const handleSave = useCallback(() => {
    const updatedTrip = {...trip};
    updatedTrip.budget = budget;

    dispatch(updateTrip(updatedTrip));
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
