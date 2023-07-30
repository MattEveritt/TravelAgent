import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {CheckBox} from '@rneui/base';

export const Traveller = ({
  traveller
}: any) => {
  const [checked, setChecked] = useState(false);
  const toggleCheckbox = () => setChecked(!checked);
  return (
    <View style={styles.container}>
      <Text>
        {traveller.name} {traveller.surname}
      </Text>
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
