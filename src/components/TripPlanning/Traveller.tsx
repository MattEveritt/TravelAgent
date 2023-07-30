import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {CheckBox} from '@rneui/base';

export const Traveller = ({
  traveller
}: any) => {
  const [checked, setChecked] = useState();
  // @ts-expect-error TS(2345): Argument of type 'true' is not assignable to param... Remove this comment to see the full error message
  const toggleCheckbox = () => setChecked(!checked);
  return (
    <View style={styles.container}>
      <Text>
        {traveller.name} {traveller.surname}
      </Text>
      <CheckBox
        // @ts-expect-error TS(2322): Type 'undefined' is not assignable to type 'boolea... Remove this comment to see the full error message
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
