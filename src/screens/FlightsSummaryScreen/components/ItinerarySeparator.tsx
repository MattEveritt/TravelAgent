import { StyleSheet } from 'react-native';
import React, { FC } from 'react';
import { TripText } from '../../../components';
import { FCLocalized } from '../../../localization/FCLocalized';

type Props = {
  nightsAtDestination: number;
  city: string;
};
export const ItinerarySeparator: FC<Props> = ({
  nightsAtDestination,
  city,
}) => {
  return (
    <TripText
      style={styles.textContainer}
      text={`${FCLocalized('In ')}${city}${FCLocalized(
        ' for ',
      )}${nightsAtDestination}${FCLocalized(' nights')}`}
    />
  );
};

const styles = StyleSheet.create({
  textContainer: {
    marginBottom: 10,
    textAlign: 'center',
  },
});
