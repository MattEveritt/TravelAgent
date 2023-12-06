import { StyleSheet, View } from 'react-native';
import React, { FC, memo } from 'react';
import { Card, TripText } from '../travelUI/index';
import { theme } from '../../styles/theme';
import { JourneyRow, TimeAndDateRow, PriceRow } from './components';
import { formatCityName, formatDuration, formatOutboundText } from './utils';

type FlightOffersType = {
  departureDate: string;
  duration: string;
  departureIataCode: string;
  destinationIataCode: string;
  departureCityName: string;
  destinationCityName: string;
  departureTime: string;
  arrivalTime: string;
  grandTotal: string;
  airlineCode: string;
  stops: number;
  includedCheckedBags: number;
};

const _FlightCard: FC<FlightOffersType> = ({
  departureDate,
  duration,
  departureIataCode,
  destinationIataCode,
  departureCityName,
  destinationCityName,
  departureTime,
  arrivalTime,
  grandTotal,
  airlineCode,
  stops,
  includedCheckedBags,
}) => {
  return (
    <Card>
      <TripText
        text={formatOutboundText(departureDate)}
        style={styles.outboundText}
      />
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
      />
      <View style={styles.dottedLine} />
      <PriceRow
        grandTotal={grandTotal}
        includedCheckedBags={includedCheckedBags}
      />
    </Card>
  );
};

export const FlightCard = memo(_FlightCard);

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    backgroundColor: 'lightyellow',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 1,
  },
  outboundText: {
    marginBottom: 10,
  },
  cityRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
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
