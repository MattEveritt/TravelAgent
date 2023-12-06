import { StyleSheet, View } from 'react-native';
import React, { FC, memo } from 'react';
import { TripText } from '../../travelUI';
import { FCLocalized } from '../../../localization/FCLocalized';
import { locale } from 'expo-localization';
import { theme } from '../../../styles/theme';

type PriceRowProps = {
  grandTotal: string;
  includedCheckedBags: number;
};
const _PriceRow: FC<PriceRowProps> = ({ grandTotal, includedCheckedBags }) => {
  let userLocale = locale;

  let formatter = new Intl.NumberFormat(userLocale, {
    style: 'currency',
    currency: 'USD',
  });

  let currency = formatter.resolvedOptions().currency;

  return (
    <View style={styles.priceRowContainer}>
      <TripText
        text={`${FCLocalized('Included bags')}: ${includedCheckedBags}`}
      />
      <TripText text={`${grandTotal} ${currency}`} style={styles.priceText} />
    </View>
  );
};

export const PriceRow = memo(_PriceRow);

const styles = StyleSheet.create({
  priceRowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: theme.PRIMARY_COLOR,
  },
});
