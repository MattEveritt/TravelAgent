import {StyleSheet, Text} from 'react-native';
import React from 'react';

export const TripText = ({text, color = undefined}) => {
  return <Text style={color ? {color: color} : styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: 'black'
  }
});
