import React, {useState, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {saveTraveller, useAppDispatch} from '../../redux';
import {TripTextInput, TripButton} from '../travelUI';

export const AddTravellerForm = ({}) => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const handleSaveTraveller = useCallback(() => {
    dispatch(saveTraveller({name, surname}));
  }, [name, surname]);

  return (
    <View style={styles.container}>
      <TripTextInput
        value={name}
        onChangeText={setName}
        placeHolder={'travellers name'}
      />
      <TripTextInput
        value={surname}
        onChangeText={setSurname}
        placeHolder={'travellers surname'}
      />
      <TripButton onPress={handleSaveTraveller} title={'Save traveller'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});
