import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import { TripText } from '../../../../../../../components';
import { FCLocalized } from '../../../../../../../localization/FCLocalized';

type Props = {
  row: number;
};
export const Exit: FC<Props> = ({ row }) => {
  const containerStyle = [
    styles.exitContainer,
    {
      top: (row - 1) * 38,
    },
  ];
  return (
    <View>
      <TripText style={containerStyle} text={FCLocalized('EXIT')} />
      <TripText
        style={[containerStyle, { right: 8 }]}
        text={FCLocalized('EXIT')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  exitContainer: {
    position: 'absolute',
    backgroundColor: 'transparent',
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
});
