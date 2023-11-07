import { StyleSheet, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { selectTripType, setTripType, useAppDispatch, useAppSelector } from '../../redux';
import { Card, InnerCard, TripText } from '../travelUI';
import { DatesSelector, MultiCityDateSelector } from './DatesSelector';
import { theme } from '../../styles/theme';

type TripTypeButtonProps = {
  type: string, 
  selectedType: string, 
  setType: (type: string) => void
}

const TripTypeButton = ({ type, selectedType, setType }: TripTypeButtonProps) => {
  const backgroundColor = type === selectedType ? theme.PRIMARY_COLOR : theme.WHITE;
  return (
    <InnerCard 
      extraStyles={[styles.tripTypeButton, { backgroundColor }]}
      onPress={() => setType(type)}
      pressDisabled={false}
    >
      <TripText text={type} style={styles.tripTypeText} />
    </InnerCard>
  );
};

export const DatesCard = () => {
  const dispatch = useAppDispatch();
  const tripType = useAppSelector(selectTripType());

  const setType = (type: string) => {
    dispatch(setTripType(type));
  };

  const isSingleDateSelector = tripType === 'One-way';

  return (
    <Card>
      <TripText text='Dates' style={styles.title} />
      <View style={styles.tripTypeContainer}>
        <TripTypeButton type={'One-way'} selectedType={tripType} setType={setType}/>
        <TripTypeButton type={'Round-trip'} selectedType={tripType} setType={setType}/>
        <TripTypeButton type={'Multi-city'} selectedType={tripType} setType={setType}/>
      </View>
      {tripType !== 'Multi-city'
        ? <DatesSelector singleDate={isSingleDateSelector}/> 
        : <MultiCityDateSelector />
      }
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
  tripTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 40,
  },
  tripTypeButton: {
    width: '32%',
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
});