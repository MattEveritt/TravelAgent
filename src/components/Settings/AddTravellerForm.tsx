import React, {useState, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {saveTraveller} from '../../redux';
import {TripTextInput, TripButton} from '../travelUI';

export const AddTravellerForm = ({}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [surname, setSurname] = useState();

  const handleSaveTraveller = useCallback(() => {
    // @ts-expect-error TS(2345): Argument of type 'AsyncThunkAction<any, void, Asyn... Remove this comment to see the full error message
    dispatch(saveTraveller({name, surname}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
