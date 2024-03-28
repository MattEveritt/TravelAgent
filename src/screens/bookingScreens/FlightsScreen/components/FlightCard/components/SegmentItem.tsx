import { View } from 'react-native';
import React, { FC, memo } from 'react';
import { Segment } from '../../../../../../types/flightOfferTypes';
import { SegmentContent } from './SegmentContent';

type Props = {
  segment: Segment;
  destinationCityName: string | undefined;
  departureCityName: string | undefined;
};
const _SegmentItem: FC<Props> = ({
  segment,
  destinationCityName,
  departureCityName,
}) => {
  const { departure, arrival, numberOfStops, carrierCode, duration } = segment;
  const { iataCode: arrivalIataCode, at: arrivalAt } = arrival;
  const { iataCode: departureIataCode, at: departureAt } = departure;
  const departureTime = departureAt.split('T')[1].slice(0, 5);
  const departureDate = departureAt.split('T')[0];
  const arrivalTime = arrivalAt.split('T')[1].slice(0, 5);
  return (
    <View>
      <SegmentContent
        departureCityName={departureCityName}
        destinationCityName={destinationCityName}
        departureIataCode={departureIataCode}
        destinationIataCode={arrivalIataCode}
        departureTime={departureTime}
        departureDate={departureDate}
        stops={numberOfStops}
        arrivalTime={arrivalTime}
        airlineCode={carrierCode}
        duration={duration}
      />
    </View>
  );
};

export const SegmentItem = memo(_SegmentItem);
