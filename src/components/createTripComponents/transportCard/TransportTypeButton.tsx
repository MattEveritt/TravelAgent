import React, { FC } from 'react';
import { InnerCard, TripText } from '../../travelUI';
import { theme } from '../../../styles/theme';
import { StyleSheet } from 'react-native';
import { FCLocalized } from '../../../localization/FCLocalized';
import { CheckBox } from '@rneui/base';

type TransportTypeButtonProps = {
  type: string;
  selectedType: string;
  setType: (type: string, index: number) => void;
  index: number;
  fullWidth?: boolean;
};

export const TransportTypeButton: FC<TransportTypeButtonProps> = ({
  type,
  selectedType,
  setType,
  index,
  fullWidth,
}) => {
  return (
    <InnerCard
      onPress={() => setType(selectedType === type ? '' : type, index)}
      extraStyles={[styles.transportTypeButton, fullWidth && styles.fullWidth]}
      pressDisabled={false}>
      <TripText text={FCLocalized(type)} style={styles.tripTypeText} />
      <CheckBox
        checked={selectedType === type}
        style={styles.checkBox}
        containerStyle={{ backgroundColor: 'transparent' }}
      />
    </InnerCard>
  );
};

const styles = StyleSheet.create({
  transportTypeButton: {
    width: '48%',
    height: '100%',
    backgroundColor: theme.WHITE,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
    flexDirection: 'row',
  },
  tripTypeText: {
    fontSize: 18,
    fontWeight: '600',
  },
  fullWidth: {
    width: '80%',
  },
  checkBox: {
    margin: 0,
    backgroundColor: 'transparent',
  },
});
