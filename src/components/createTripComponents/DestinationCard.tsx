import { StyleSheet, View } from 'react-native';
import React, { useState, useRef } from 'react';
import { Icon } from '@rneui/themed';
import { Card, InnerCard, TripText } from '../travelUI';
import { useSelector } from 'react-redux';
import { selectBookingDestinations, selectDestinationsValidity, selectTripType, setBookingDestinations, setDestinationsValidity, useAppDispatch, useAppSelector } from '../../redux';
import { DestinationSearchModal } from './DestinationSearchModal';
import { FCLocalized } from '../../localization/FCLocalized';
import { DestinationSearchBox } from './DestinationSearchBox';
import { theme } from '../../styles/theme';

type DestinationSearchBoxProps = {
  destination: {
    destination: string
  }, 
  onDestinationCardPress: (index: number) => void, 
  index: number,
};

export const MultiDestinationSearchBox = ({ destination, onDestinationCardPress, index }: DestinationSearchBoxProps) => {
  const destinationValid = useAppSelector(selectDestinationsValidity());
  return (
    <View key={index} style={styles.dateSelectorContainer}>
      <View style={styles.dateTextContainer}>
        <TripText text={index + 1} style={styles.dateText} />
      </View>
      <InnerCard 
        onPress={() => onDestinationCardPress(index)} 
        pressDisabled={false}
        extraStyles={[styles.container, !destinationValid && { borderColor: theme.RED_ERROR }]}
      >
        <Icon name='search' containerStyle={styles.iconContainer}/>
        <View style={styles.titleContainer}>
          <TripText text={destination.destination} style={styles.searchText}/>
        </View>
      </InnerCard>
    </View>
  );};

export const DestinationCard = ({
  trip
}: any) => {
  const dispatch = useAppDispatch();
  const indexRef = useRef(0);
  const tripType = useSelector(selectTripType());
  const destinations = useSelector(selectBookingDestinations());
  const [modalVisible, setModalVisible] = useState(false);

  const setDestination = (destination: string, googlePlaceId: string) => {
    const newDestinations = [...destinations];
    newDestinations[indexRef.current] = {
      destination,
      googlePlaceId,
    };
    dispatch(setBookingDestinations(newDestinations));
    dispatch(setDestinationsValidity(true));
  };

  const onDestinationCardPress = (index: number) => {
    indexRef.current = index;
    setModalVisible(!modalVisible);
  };

  // if (!destinations[0]) return null;
  if (tripType === 'Multi-city') {
    return (
      <Card>
        <TripText text={FCLocalized('Destinations')} style={styles.multiCityTitle} />
        {destinations.map((destination, i) => (
          <MultiDestinationSearchBox 
            key={i}
            destination={destination} 
            onDestinationCardPress={onDestinationCardPress}
            index={i}
          />
        )
        )}
        <DestinationSearchModal
          setDestination={setDestination}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </Card>
    );
  }

  return (
    <Card>
      <TripText text={FCLocalized('Destination')} style={styles.singleCityTitle} />
      <View style={styles.dateSelectorContainer}>
        <DestinationSearchBox onDestinationCardPress={onDestinationCardPress} destination={destinations[0].destination}/>
        <DestinationSearchModal
          setDestination={setDestination}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </View>
    </Card>
  );
  
};

const styles = StyleSheet.create({
  multiCityTitle: {
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 18,
    marginBottom: -10
  },
  singleCityTitle: {
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 18,
    marginBottom: 3
  },
  searchText: {
    fontSize: 16,
    textAlign: 'center',
    width: '85%'
  },
  singleSearchText: {
    fontSize: 16,
    textAlign: 'center',
    width: '90%'
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
});
