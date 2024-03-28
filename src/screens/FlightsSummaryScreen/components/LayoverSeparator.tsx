import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import { FCLocalized } from '../../../localization/FCLocalized';
import { TripText } from '../../../components';
import { theme } from '../../../styles/theme';
import { Icon } from '@rneui/base';

type Segment = {
  arrival: {
    at: string;
  };
  departure: {
    at: string;
  };
};

type LayoverSeparatorProps = {
  segments: Segment[];
  index: number;
};

export const LayoverSeparator: FC<LayoverSeparatorProps> = ({
  index,
  segments,
}) => {
  const layoverStart = segments[index].arrival.at.substring(11, 16);
  const layoverEnd = segments[index + 1].departure.at.substring(11, 16);
  const layoverDurationInMinutes = Math.floor(
    (new Date(`2021-01-01T${layoverEnd}:00`).getTime() -
      new Date(`2021-01-01T${layoverStart}:00`).getTime()) /
      60000,
  );
  const layoverDurationString = `${Math.floor(
    layoverDurationInMinutes / 60,
  )}h ${layoverDurationInMinutes % 60 ? layoverDurationInMinutes % 60 : 0}m`;
  return (
    <View style={styles.layoverContainer}>
      <View style={styles.dottedLine} />
      <View style={styles.layoverInfo}>
        <Icon
          name="clock-outline"
          type="material-community"
          size={16}
          style={styles.clockIcon}
        />
        <TripText text={`${layoverDurationString} ${FCLocalized('layover')}`} />
      </View>
      <View style={styles.dottedLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  layoverContainer: {
    marginVertical: 15,
  },
  dottedLine: {
    borderStyle: 'dotted',
    height: 1,
    borderWidth: 1,
    borderColor: theme.SECONDARY_COLOR,
  },
  layoverInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  clockIcon: {
    marginRight: 10,
  },
});
