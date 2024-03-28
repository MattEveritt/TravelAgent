import { StyleSheet, View } from 'react-native';
import React, { FC, memo } from 'react';
import {
  IncludedCheckedBags,
  Itinerary,
  Price,
  Segment,
} from '../../../../../../types/flightOfferTypes';
import { PriceRow, SegmentItem } from '.';
import { theme } from '../../../../../../styles/theme';

type Props = {
  itinerary: Itinerary;
  price: Price;
  includedCheckedBags: IncludedCheckedBags;
  isSummary?: boolean;
  cityNames: { departure: string; destination: string };
};

const _ItineraryItem: FC<Props> = ({
  itinerary,
  price,
  includedCheckedBags,
  isSummary,
  cityNames,
}) => {
  const grandTotal = price.grandTotal;

  let segments: Segment[] = [];

  if (!isSummary) {
    segments = [
      {
        departure: {
          iataCode: itinerary.segments[0].departure.iataCode,
          at: itinerary.segments[0].departure.at,
        },
        arrival: {
          iataCode:
            itinerary.segments[itinerary.segments.length - 1].arrival.iataCode,
          at: itinerary.segments[itinerary.segments.length - 1].arrival.at,
        },
        carrierCode: itinerary.segments[0].carrierCode,
        number: itinerary.segments[0].number,
        duration: itinerary.duration,
        numberOfStops: itinerary.segments.length - 1,
      },
    ];
  } else {
    segments = itinerary.segments;
  }

  return (
    <>
      {segments.map((segment, index: number) => {
        return (
          <SegmentItem
            key={index}
            segment={segment}
            departureCityName={cityNames.departure}
            destinationCityName={cityNames.destination}
          />
        );
      })}
      <View style={styles.dottedLine} />
      <PriceRow
        grandTotal={grandTotal}
        includedCheckedBags={includedCheckedBags.quantity}
      />
    </>
  );
};

export const ItineraryItem = memo(_ItineraryItem);

const styles = StyleSheet.create({
  dottedLine: {
    borderStyle: 'dashed',
    marginVertical: 15,
    height: 1,
    borderWidth: 1,
    borderColor: theme.SECONDARY_COLOR,
  },
});
