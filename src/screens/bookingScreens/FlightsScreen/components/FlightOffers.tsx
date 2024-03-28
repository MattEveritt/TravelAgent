import { FlatList, StyleSheet } from 'react-native';
import React, { FC, memo } from 'react';
import { FlightOffer } from '../../../../types/flightOfferTypes';
import { TripsType } from '../../../../redux/trips/trips';
import { FlightCard } from '../../../../components';
import { getCityNames } from './utils';

type Props = {
  flightOffers: FlightOffer[];
  tripObj: TripsType;
};

const renderFlight = (
  item: { item: FlightOffer },
  index: number,
  cityNames: {
    departure: string;
    destination: string;
  }[],
) => {
  const { itineraries, price, travelerPricings } = item.item;

  const departureDate = itineraries[0].segments[0].departure.at.split('T')[0];

  if (!itineraries || !itineraries[0]) return null;
  return (
    <FlightCard
      key={index}
      flightOfferID={index}
      itineraries={itineraries}
      departureDate={departureDate}
      cityNames={cityNames}
      price={price}
      includedCheckedBags={
        travelerPricings[0].fareDetailsBySegment[0].includedCheckedBags
      }
    />
  );
};

const _FlightOffers: FC<Props> = ({ flightOffers, tripObj }) => {
  if (!flightOffers) {
    return null;
  }

  const cityNames = getCityNames(tripObj);

  return (
    <FlatList
      style={styles.flatListStyle}
      contentContainerStyle={styles.contentContainerStyle}
      data={flightOffers}
      renderItem={({ item, index }) => renderFlight({ item }, index, cityNames)}
    />
  );
};

export const FlightOffers = memo(_FlightOffers);

const styles = StyleSheet.create({
  flatListStyle: {
    margin: -16,
  },
  contentContainerStyle: {
    padding: 16,
  },
});
