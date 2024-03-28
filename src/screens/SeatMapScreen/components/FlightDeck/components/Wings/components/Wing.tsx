import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';

type Props = {
  orientation: string;
  end: number;
  start: number;
  width?: number;
};
export const Wing: FC<Props> = ({ orientation, end, start, width }) => {
  if (!end) return null;
  const wingStyle = [
    styles.container,
    {
      height: (end - start) * 38,
      top: start * 38,
      left: orientation === 'left' ? -12 : width ? width * 38 : 0,
    },
  ];
  return <View style={wingStyle} />;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#99B2DD',
    width: 5,
  },
});
