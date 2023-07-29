import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {useState, useCallback} from 'react';
import {Icon} from '@rneui/themed';
import {TripText} from '../travelUI';
import {useDispatch} from 'react-redux';
import {updateTrip} from '../../redux/trips/thunks/updateTrip';
import {DestinationSearchModal} from './DestinationSearchModal';

export const Destination = ({trip}) => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [destination, setDestination] = useState(trip.destination);

  const handleSaveTrip = useCallback(() => {
    dispatch(updateTrip({...trip, destination: destination}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [destination]);

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <TripText text={trip.destination} />
          </View>
          <View style={styles.iconContainer}>
            <Icon name="edit" />
          </View>
        </View>
      </TouchableOpacity>
      <DestinationSearchModal
        destination={destination}
        setDestination={setDestination}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onPress={handleSaveTrip}
      />
    </View>
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
