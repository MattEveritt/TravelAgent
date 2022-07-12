import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {TripTextInput, TripModal} from '../travelUI';
import {Icon} from '@rneui/base';

const Budget = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text>500.00 Euros</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon name="edit" />
        </View>
      </View>
      <TripModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        modalContent={<TripTextInput currentValue="500.00" />}
      />
    </TouchableOpacity>
  );
};

export default Budget;

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
