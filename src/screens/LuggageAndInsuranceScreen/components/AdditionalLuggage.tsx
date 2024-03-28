import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import { Card, TripText } from '../../../components';
import { FCLocalized } from '../../../localization/FCLocalized';
import { AddItemCard } from './AddItemCard';
import { selectBagPriceByOfferID, useAppSelector } from '../../../redux';

type Props = {
  flightOfferID: number | null;
};

export const AdditionalLuggage: FC<Props> = ({ flightOfferID }) => {
  const additionalBags = useAppSelector(state =>
    selectBagPriceByOfferID(state, flightOfferID),
  );
  if (additionalBags) {
    return (
      <View style={styles.addItemCardsContainer}>
        <AddItemCard
          title={`1 x ${FCLocalized('Check-in item')}`}
          totalPrice={90}
          luggageType="single"
        />
        <AddItemCard
          title={`2 x ${FCLocalized('Check-in items')}`}
          totalPrice={180}
          luggageType="double"
        />
      </View>
    );
  }

  return (
    <Card>
      <TripText text={FCLocalized('No additional luggage available')} />
    </Card>
  );
};

const styles = StyleSheet.create({
  addItemCardsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 16,
  },
});
