import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import { Card, TripText } from '../../travelUI';
import {
  selectBookingTransport,
  selectTripType,
  setBookingTransport,
  useAppDispatch,
  useAppSelector,
} from '../../../redux';
import { FCLocalized } from '../../../localization/FCLocalized';
import { TransportTypeButton } from './TransportTypeButton';

export const TransportCard: FC = () => {
  const dispatch = useAppDispatch();
  const selectedType = useAppSelector(selectBookingTransport());
  const tripType = useAppSelector(selectTripType());

  const setType = (type: string, index: number) => {
    const newSelectedType = [...selectedType];
    newSelectedType[index] = type;
    dispatch(setBookingTransport(newSelectedType));
  };

  if (tripType === 'Multi-city') {
    return (
      <Card>
        <TripText text={FCLocalized('Transport')} style={styles.title} />
        {selectedType.map((type: string, index: number) => (
          <View key={index} style={styles.multiTripTypeContainer}>
            <TripText text={index + 1} style={styles.typeText} />
            <TransportTypeButton
              type={'Car-rental'}
              selectedType={type}
              setType={setType}
              index={index}
            />
            <TransportTypeButton
              type={'Transfer'}
              selectedType={type}
              setType={setType}
              index={index}
            />
          </View>
        ))}
      </Card>
    );
  }

  return (
    <Card>
      <TripText text={FCLocalized('Transport')} style={styles.title} />
      <View style={styles.tripTypeContainer}>
        <TransportTypeButton
          type={'Car-rental'}
          selectedType={selectedType[0]}
          setType={setType}
          index={0}
        />
        <TransportTypeButton
          type={'Transfer'}
          selectedType={selectedType[0]}
          setType={setType}
          index={0}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 18,
    marginBottom: 3,
  },
  tripTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 40,
    marginBottom: 8,
  },
  multiTripTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 40,
    marginBottom: 8,
  },
  typeText: {
    fontSize: 18,
    marginRight: 8,
    alignSelf: 'center',
  },
});
