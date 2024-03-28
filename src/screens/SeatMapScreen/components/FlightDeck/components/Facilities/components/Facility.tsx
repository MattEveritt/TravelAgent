import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import { TripText } from '../../../../../../../components';

type Props = {
  code: string;
  x: number;
  y: number;
};
export const Facility: FC<Props> = ({ code, x, y }) => {
  if (!x || !y) return null;

  const containerStyle = [
    styles.container,
    {
      left: y * 38,
      top: (x - 1) * 38,
    },
  ];

  return (
    <View style={containerStyle}>
      <TripText text={code} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#F5EE9E',
  },
});
