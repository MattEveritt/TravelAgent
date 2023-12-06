import { StyleSheet, View } from 'react-native';
import React, { FC, memo } from 'react';
import { theme } from '../../../styles/theme';
import { TripText } from '../../travelUI';
import { Icon } from '@rneui/base';

type JourneyRowProps = {
  departureIataCode: string;
  destinationIataCode: string;
};

const _JourneyRow: FC<JourneyRowProps> = ({
  departureIataCode,
  destinationIataCode,
}) => {
  return (
    <View style={styles.journeyRow}>
      <TripText text={departureIataCode} style={styles.iataCode} />
      <Icon
        name="airplane-takeoff"
        type="material-community"
        size={16}
        containerStyle={styles.planeIcon}
      />
      <View style={styles.dottedLine} />
      <Icon
        name="airplane"
        type="ionicon"
        color={theme.SECONDARY_COLOR}
        size={16}
        containerStyle={styles.planeIcon}
      />
      <View style={styles.dottedLine} />
      <Icon
        name="airplane-landing"
        type="material-community"
        size={16}
        color={theme.PRIMARY_COLOR}
        containerStyle={styles.planeIcon}
      />
      <TripText
        text={destinationIataCode}
        style={[styles.iataCode, styles.primaryColor]}
      />
    </View>
  );
};

export const JourneyRow = memo(_JourneyRow);

const styles = StyleSheet.create({
  journeyRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iataCode: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  primaryColor: {
    color: theme.PRIMARY_COLOR,
  },
  dottedLine: {
    borderStyle: 'dashed',
    flex: 2.5,
    height: 1,
    borderWidth: 1,
    borderColor: theme.SECONDARY_COLOR,
  },
  planeIcon: {
    flex: 1,
  },
});
