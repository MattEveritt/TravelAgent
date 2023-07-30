import {StyleSheet, TextInput} from 'react-native';
import React from 'react';

export const TripTextInput = ({
  value,
  onChangeText,
  placeHolder
}: any) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeHolder}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
