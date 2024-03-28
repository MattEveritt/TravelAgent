import { Image, StyleSheet, View } from 'react-native';
import React, { FC, memo } from 'react';
import { theme } from '../../../../../../styles/theme';
import { TripText } from '../../../../../../components/travelUI';
import { formatDateText } from '../utils';
import { FCLocalized } from '../../../../../../localization/FCLocalized';

type TimeAndDateRowProps = {
  departureTime: string;
  departureDate: string;
  stops: number;
  arrivalTime: string;
  airlineCode: string;
  isSummary?: boolean;
};

const _TimeAndDateRow: FC<TimeAndDateRowProps> = ({
  departureTime,
  departureDate,
  stops,
  arrivalTime,
  airlineCode,
  isSummary,
}) => {
  return (
    <View style={styles.timeAndDateRow}>
      <View style={styles.timeAndDateColumn}>
        <TripText text={departureTime} style={styles.timeText} />
        <TripText
          text={formatDateText(departureDate)}
          style={styles.dateText}
        />
      </View>

      <View style={styles.logoColumn}>
        <Image
          source={{
            uri: `http://pics.avs.io/100/100/${airlineCode}.png`,
          }}
          style={styles.logo}
        />
        {!isSummary && (
          <TripText
            text={
              stops ? `${stops}${FCLocalized('stop')}` : FCLocalized('Direct')
            }
            style={styles.textAlignCenter}
          />
        )}
      </View>
      <View style={[styles.timeAndDateColumn, styles.timeAndDateColumnRight]}>
        <TripText text={arrivalTime} style={styles.timeText} />
        <TripText
          text={formatDateText(departureDate)}
          style={styles.dateText}
        />
      </View>
    </View>
  );
};

export const TimeAndDateRow = memo(_TimeAndDateRow);

const styles = StyleSheet.create({
  timeAndDateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  timeAndDateColumn: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  timeAndDateColumnRight: {
    alignItems: 'flex-end',
  },
  timeText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 14,
    color: theme.SECONDARY_COLOR,
  },
  dottedLine: {
    borderStyle: 'dashed',
    marginVertical: 15,
    height: 1,
    borderWidth: 1,
    borderColor: theme.SECONDARY_COLOR,
  },
  logoColumn: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: { width: 70, height: 55 },
  textAlignCenter: {
    textAlign: 'center',
  },
});
