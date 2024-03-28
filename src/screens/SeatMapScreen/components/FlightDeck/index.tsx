import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import { Deck } from '../../../../types/seatMapTypes';
import { Exits, Wings, Facilities, Seats } from './components';

type Props = {
  deck: Deck;
};

export const FlightDeck: FC<Props> = ({ deck }) => {
  if (!deck) return null;
  const { deckConfiguration, seats, facilities } = deck;

  const { width, length, startWingsX, endWingsX, exitRowsX } =
    deckConfiguration;

  const containerStyles = [
    styles.container,
    {
      height: length * 38,
      width: width * 38,
    },
  ];

  return (
    <View style={containerStyles}>
      <Seats seats={seats} />
      <Wings start={startWingsX} end={endWingsX} width={width} />
      <Facilities facilities={facilities} />
      <Exits exitRows={exitRowsX} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
