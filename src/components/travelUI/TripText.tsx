import {StyleSheet, Text} from 'react-native';
import React from 'react';

export const TripText = ({
  text,
  style
}: any) => {
  return <Text style={style ? style : styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: 'black'
  }
});
