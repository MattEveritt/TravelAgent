import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import TripButton from './TripButton';

const TripTextInput = ({currentValue}) => {
  const [text, setText] = useState();
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder={currentValue}
      />
      <TripButton title="Go" onPress={() => console.log('search ', text)} />
    </View>
  );
};

export default TripTextInput;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
