import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import { theme } from '../../../../../../../styles/theme';

type Props = {
  number: string;
  x: number;
  y: number;
  availability: string;
};

export const Seat: FC<Props> = ({ number, x, y, availability }) => {
  const color =
    availability === 'BLOCKED' ? theme.ACCENT : theme.SECONDARY_COLOR;
  const style = [
    styles.container,
    {
      left: y * 38,
      top: x * 38,
      backgroundColor: color,
    },
  ];
  return (
    <TouchableOpacity style={style}>
      <View style={styles.seatHeadRest} />
      <Text>{number}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 31,
    height: 33,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  seatHeadRest: {
    top: 20,
    width: 25,
    height: 5,
    borderRadius: 3,
    backgroundColor: theme.SECONDARY_COLOR,
  },
});
