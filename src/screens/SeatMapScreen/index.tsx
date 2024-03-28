import React, { FC, useEffect } from 'react';
import {
  fetchSeatMap,
  selectFlightOffer,
  useAppDispatch,
  useAppSelector,
} from '../../redux';
import { seatMapData } from '../SelectSeatsScreen/seatMapData';
import { FlightDeck } from './components/FlightDeck';
import { ScrollView, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

type Params = {
  flightOfferID: number;
};

export const SeatMapScreen: FC = () => {
  //   const params: Params = useRoute().params;
  //   const dispatch = useAppDispatch();
  //   const seatMapData = useAppSelector(state => state.flights.seatMapData);

  //   const flightOffer = useAppSelector(state =>
  //     selectFlightOffer(state, flightOfferID),
  //   );

  if (!seatMapData?.data) return null;

  return (
    <ScrollView contentContainerStyle={styles.contentCantainer}>
      {seatMapData.data[0].decks.map((deck, i) => {
        return <FlightDeck key={i} deck={deck} />;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentCantainer: {
    alignItems: 'center',
  },
});
