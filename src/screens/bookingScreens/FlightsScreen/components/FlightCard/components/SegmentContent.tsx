import { StyleSheet, View } from 'react-native';
import React, { FC, memo } from 'react';
import { TripText } from '../../../../../../components/travelUI';
import { theme } from '../../../../../../styles/theme';
import { JourneyRow, TimeAndDateRow } from '.';
import { formatCityName, formatDuration } from '../utils';
import { FCLocalized } from '../../../../../../localization/FCLocalized';
import { IncludedCheckedBags } from '../../../../../../types/flightOfferTypes';

type SegmentContentProps = {
  departureIataCode: string;
  destinationIataCode: string;
  departureCityName: string | undefined;
  destinationCityName: string | undefined;
  departureTime: string;
  departureDate: string;
  stops: number;
  arrivalTime: string;
  airlineCode: string;
  duration: string;
  isSummary?: boolean;
  includedCheckedBags?: IncludedCheckedBags;
};
const _SegmentContent: FC<SegmentContentProps> = ({
  departureIataCode,
  destinationIataCode,
  departureCityName,
  destinationCityName,
  departureTime,
  departureDate,
  stops,
  arrivalTime,
  airlineCode,
  duration,
  isSummary,
  includedCheckedBags,
}) => {
  const getIncludedCheckedBagsString = () => {
    if (!includedCheckedBags) return `${FCLocalized('includedCheckedBags')}: 0`;

    const { quantity, weight, weightUnit } = includedCheckedBags;
    if (!quantity || !weight || !weightUnit) {
      return `${FCLocalized('includedCheckedBags')}: ${quantity}`;
    }

    return `${FCLocalized(
      'includedCheckedBags',
    )}: ${quantity} x ${weight} ${weightUnit}`;
  };

  return (
    <View style={styles.container}>
      <JourneyRow
        departureIataCode={departureIataCode}
        destinationIataCode={destinationIataCode}
      />
      <View style={styles.cityRow}>
        <TripText
          text={formatCityName(departureCityName)}
          style={[styles.cityRowItem, styles.textAlignLeft]}
        />
        <TripText
          text={formatDuration(duration)}
          style={[styles.cityRowItem, styles.textAlignCenter]}
        />
        <TripText
          text={formatCityName(destinationCityName)}
          style={[styles.cityRowItem, styles.textAlignRight]}
        />
      </View>
      <TimeAndDateRow
        departureTime={departureTime}
        departureDate={departureDate}
        stops={stops}
        arrivalTime={arrivalTime}
        airlineCode={airlineCode}
        isSummary={isSummary}
      />
      {isSummary && <TripText text={getIncludedCheckedBagsString()} />}
    </View>
  );
};

export const SegmentContent = memo(_SegmentContent);

const styles = StyleSheet.create({
  container: {
    height: 120,
  },
  outboundText: {
    marginBottom: 10,
  },
  cityRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cityRowItem: {
    flex: 1,
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  textAlignLeft: {
    textAlign: 'left',
  },
  textAlignRight: {
    textAlign: 'right',
  },
  dottedLine: {
    borderStyle: 'dashed',
    marginVertical: 15,
    height: 1,
    borderWidth: 1,
    borderColor: theme.SECONDARY_COLOR,
  },
});
