import { StyleSheet, View } from 'react-native';
import React, { FC, memo } from 'react';
import { NumberSelector } from './NumberSelector';

const _SelectTravellers: FC = () => {
  return (
    <View style={styles.container}>
      <NumberSelector type="adults" />
      <NumberSelector type="youth" />
      <NumberSelector type="infants" />
      <NumberSelector type="infantsOnLap" />
    </View>
  );
};

export const SelectTravellers = memo(_SelectTravellers);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
