import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, TripText } from '../../../components';
import { SegmentCardContent } from './SegmentCardContent';
import { LayoverSeparator } from './LayoverSeparator';
import { formatOutboundText } from '../../bookingScreens/FlightsScreen/components/FlightCard/utils';
import {
  FareDetailsBySegment,
  Itinerary,
  Segment,
  IncludedCheckedBags,
} from '../../../types/flightOfferTypes';

type FlightsSummaryCardProps = {
  itinerary: Itinerary;
  destinationCityName: string;
  departureCityName: string;
  fareDetailsBySegment: FareDetailsBySegment[];
};

export const FlightsSummaryCard: FC<FlightsSummaryCardProps> = ({
  itinerary,
  destinationCityName,
  departureCityName,
  fareDetailsBySegment,
}) => {
  const { segments } = itinerary;
  const includedCheckedBagsPerSegment: IncludedCheckedBags[] =
    fareDetailsBySegment.map(
      (fareDetails: FareDetailsBySegment) => fareDetails.includedCheckedBags,
    );

  const departureDate = segments[0].departure.at;

  return (
    <Card>
      <TripText
        style={styles.dateText}
        text={formatOutboundText(departureDate)}
      />
      {segments.map((segment: Segment, index: number) => (
        <View key={index}>
          <SegmentCardContent
            segmentIndex={index}
            segmentCount={segments.length}
            segment={segment}
            destinationCityName={destinationCityName}
            departureCityName={departureCityName}
            isSummary
            includedCheckedBags={includedCheckedBagsPerSegment[index]}
          />
          {index < segments.length - 1 && (
            <LayoverSeparator index={index} segments={segments} />
          )}
        </View>
      ))}
    </Card>
  );
};

const styles = StyleSheet.create({
  dateText: {
    marginBottom: 10,
    textAlign: 'center',
  },
});
