import React, { FC } from 'react';
import { InnerCard, TripText } from '../../travelUI';
import { theme } from '../../../styles/theme';
import { StyleSheet } from 'react-native';
import { FCLocalized } from '../../../localization/FCLocalized';

type TransportTypeButtonProps = {
  type: string;
  selectedType: string;
  setType: (type: string, index: number) => void;
  index: number;
};

export const TransportTypeButton: FC<TransportTypeButtonProps> = ({
  type,
  selectedType,
  setType,
  index,
}: TransportTypeButtonProps) => {
  const backgroundColor =
    type === selectedType ? theme.PRIMARY_COLOR : theme.WHITE;
  return (
    <InnerCard
      onPress={() => setType(selectedType === type ? '' : type, index)}
      extraStyles={[styles.transportTypeButton, { backgroundColor }]}
      pressDisabled={false}>
      <TripText text={FCLocalized(type)} style={styles.tripTypeText} />
    </InnerCard>
  );
};

const styles = StyleSheet.create({
  transportTypeButton: {
    width: '48%',
    height: '100%',
    backgroundColor: theme.LIGHT_GREY,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  },
  tripTypeText: {
    fontSize: 18,
    fontWeight: '600',
  },
});
