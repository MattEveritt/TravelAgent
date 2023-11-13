import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TripText } from '../travelUI/TripText';
import { HEADER_HEIGHT_PERCENTAGE, HEADER_COLOR } from './constants';

export const TitleOnlyHeader = ({
  titleText,
  headerDisabled,
}: {
  titleText: string;
  headerDisabled: boolean;
}) => {
  if (headerDisabled) return null;

  return (
    <View style={styles.headerContainer}>
      <TripText text={titleText} style={styles.title} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: HEADER_HEIGHT_PERCENTAGE,
    width: '100%',
    backgroundColor: HEADER_COLOR,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
