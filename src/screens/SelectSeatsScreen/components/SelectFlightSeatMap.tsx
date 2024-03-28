import { StyleSheet, Text, View } from 'react-native';
import React, { FC, useEffect } from 'react';
import {
  fetchSeatMap,
  selectFlightOffer,
  useAppDispatch,
  useAppSelector,
} from '../../../redux';
import { flightOfferData } from '../../floghtOfferData';
import { seatMapData } from '../seatMapData';
import { SelectFlightCard } from './SelectFlightCard';
import { Segment } from '../../../types/flightOfferTypes';

type Props = {
  flightOfferID: number;
};

export const SelectFlightSeatMap: FC<Props> = ({ flightOfferID }) => {
  const dispatch = useAppDispatch();
  //   const flightOffer = useAppSelector(state =>
  //     selectFlightOffer(state, flightOfferID),
  //   );

  //   const seatMapData = useAppSelector(state => state.flights.seatMapData);

  const flightOffer = flightOfferData[0];

  const segments = flightOffer.itineraries.reduce((acc, itinerary) => {
    return acc.concat(itinerary.segments);
  }, [] as Segment[]);

  return segments.map((segment, i) => (
    <SelectFlightCard segment={segment} key={i} />
  ));
};

const styles = StyleSheet.create({});
