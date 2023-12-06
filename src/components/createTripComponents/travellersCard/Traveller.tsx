import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { CheckBox } from '@rneui/base';
import { TripText } from '../../travelUI';
import { formatTravellersName } from '../../../utils/formatTravellersName';
import { TravellerType } from './SelectSavedTravellers';

export const Traveller = ({
  traveller,
  checkedTravellers,
  setCheckedTravellers,
}: any) => {
  const isChecked = !!checkedTravellers.find(
    (travellerObject: TravellerType) => travellerObject.id === traveller.id,
  );
  const [checked, setChecked] = useState(isChecked);
  const toggleCheckbox = () => {
    let newTravellers = [];
    if (checked) {
      newTravellers = checkedTravellers.filter(
        (checkedTraveller: { id: string }) =>
          checkedTraveller.id !== traveller.id,
      );
    } else {
      newTravellers = checkedTravellers.concat(traveller);
    }
    setCheckedTravellers(newTravellers);
    setChecked(!checked);
  };
  return (
    <View style={styles.container}>
      <TripText text={formatTravellersName(traveller)} />
      <CheckBox
        checked={checked}
        onPress={toggleCheckbox}
        size={18}
        containerStyle={styles.checkBoxContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
  },
  checkBoxContainer: {
    padding: 0,
    margin: 0,
    width: '30%',
    alignSelf: 'flex-end',
  },
});
