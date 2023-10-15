import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

export const TripTextInput = ({
  value,
  onChangeText,
  placeHolder,
  secureTextEntry = false,
}: any) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeHolder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: 50,
    borderRadius: 25,
    marginVertical: 12,
    borderWidth: 1,
    width: '100%'
  },
  textInput: {
    paddingLeft: 20
  }
});
