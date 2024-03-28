import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import { Card, TripText } from '../../../components';
import { FCLocalized } from '../../../localization/FCLocalized';

type Props = {
  title: string;
  weight?: number;
  weightUnit?: string;
  dimensions?: string;
};

export const LuggageCard: FC<Props> = ({
  title,
  weight,
  weightUnit,
  dimensions = '',
}) => {
  return (
    <Card>
      <View style={styles.cardRow}>
        <View style={styles.column}>
          <TripText text={title} />
          <TripText text={FCLocalized('Included')} />
        </View>
        <View style={styles.column}>
          <TripText text={`${weight} ${weightUnit}`} />
          <TripText text={dimensions} />
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  column: {
    flexDirection: 'column',
  },
});
