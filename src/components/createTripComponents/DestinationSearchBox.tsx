import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { InnerCard, TripText } from '../travelUI';
import { Icon } from '@rneui/base';
import { selectDestinationsValidity, useAppSelector } from '../../redux';
import { theme } from '../../styles/theme';

type DestinationSearchBoxProps = {
  destination: string, 
  onDestinationCardPress: (index: number) => void,
};

export const DestinationSearchBox = ({ destination, onDestinationCardPress }: DestinationSearchBoxProps) => {
  const destinationValid = useAppSelector(selectDestinationsValidity());

  return (
    <InnerCard 
      onPress={() => onDestinationCardPress(0)} 
      pressDisabled={false} 
      extraStyles={[styles.singleContainer, !destinationValid && { borderColor: theme.RED_ERROR }]}
    >
      <Icon name='search' containerStyle={styles.iconContainer}/>
      <View style={styles.titleContainer}>
        <TripText text={destination} style={styles.singleSearchText}/>
      </View>
    </InnerCard>
  );};


const styles = StyleSheet.create({
  searchText: {
    fontSize: 16,
    textAlign: 'center',
    width: '85%'
  },
  titleContainer: {
    width: '90%',
  },
  iconContainer: {
    width: '10%',
  },
  dateTextContainer: { 
    width: '5%', 
    paddingTop: 10
  },
  dateText: {
    fontSize: 18
  },
  dateSelectorContainer: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    marginBottom: 0,
    marginRight: 16
  },
  singleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 0,
  },
  singleSearchText: {
    fontSize: 16,
    textAlign: 'center',
    width: '90%'
  },
});
