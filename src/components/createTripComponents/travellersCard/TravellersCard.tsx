import React, { FC, memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useAppSelector, selectIsLoggedIn } from '../../../redux';
import { Card, TripText } from '../../travelUI';
import { FCLocalized } from '../../../localization/FCLocalized';
import { SelectSavedTravellers } from './SelectSavedTravellers';
import { SelectTravellers } from './SelectTravellers';

const _TravellersCard: FC = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn());

  return (
    <Card>
      <TripText text={FCLocalized('Travellers')} style={styles.title} />
      <View style={[styles.travellersCardStyles]} />
      {isLoggedIn ? <SelectSavedTravellers /> : <SelectTravellers />}
    </Card>
  );
};

export const TravellersCard = memo(_TravellersCard);

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 18,
    marginBottom: 3,
  },
  travellersCardStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  travellersName: { marginLeft: 10, fontSize: 16 },
});
