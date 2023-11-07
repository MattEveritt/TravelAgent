import { StyleSheet, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Card, InnerCard, TripText } from '../travelUI';
import { theme } from '../../styles/theme';
import { selectBookingTransport, setBookingTransport, useAppDispatch, useAppSelector } from '../../redux';
import { FCLocalized } from '../../localization/FCLocalized';

type TransportTypeButtonProps = {
  type: string, 
  selectedType: string, 
  setType: (type: string) => void
}

const TransportTypeButton = ({type, selectedType, setType}: TransportTypeButtonProps) => {
  const backgroundColor = type === selectedType ? theme.PRIMARY_COLOR : theme.WHITE;
  return (
    <InnerCard 
      onPress={() => setType(selectedType === type ? '' : type)} 
      extraStyles={[styles.transportTypeButton, {backgroundColor}]}
      pressDisabled={false}
    >
      <TripText text={FCLocalized(type)} style={styles.tripTypeText} />
    </InnerCard>
  );
};

export const TransportCard = () => {
  const dispatch = useAppDispatch();
  const selectedType = useAppSelector(selectBookingTransport());
  const setType = (type: string) => {
    dispatch(setBookingTransport(type));
  };

  return (
    <Card>
      <TripText text={FCLocalized('Transport')} style={styles.title} />
      <View style={styles.tripTypeContainer}>
        <TransportTypeButton type={'Car-rental'} selectedType={selectedType} setType={setType}/>
        <TransportTypeButton type={'Transfer'} selectedType={selectedType} setType={setType}/>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 18,
    marginBottom: 3
  },
  transportTypeButton: {
    width: '48%',
    height: '100%',
    backgroundColor: theme.LIGHT_GREY,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  },
  tripTypeText: {
    fontSize: 18,
    fontWeight: '600',
  },
  tripTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 40,
  },
});