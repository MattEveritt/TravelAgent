import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { Card, InnerCard, TripText } from '../travelUI';
import { FCLocalized } from '../../localization/FCLocalized';
import { fetchNearestAirport, selectDepartureAirport, selectDepartureAirportValidity, setDepartureAirport, setDepartureAirportValidity, useAppDispatch, useAppSelector } from '../../redux';
import Geolocation from '@react-native-community/geolocation';
import { theme } from '../../styles/theme';
import { DepartureSearchModal } from './DepartureSearchModal';
import { Icon } from '@rneui/base';

type DepartureSearchBoxProps = {
    setModalVisible: Dispatch<SetStateAction<boolean>>, 
    departureAirportValid: boolean,
    departureAirport: {airportName: string}
}

const DepartureSearchBox = ({ setModalVisible,departureAirportValid,departureAirport }: DepartureSearchBoxProps) => (
  <InnerCard 
    onPress={() => setModalVisible(true)} 
    pressDisabled={false} 
    extraStyles={[styles.singleContainer, !departureAirportValid && { borderColor: theme.RED_ERROR }]}
  >
    <Icon name='search' containerStyle={styles.iconContainer}/>
    <View style={styles.titleContainer}>
      <TripText text={departureAirport.airportName} style={styles.singleSearchText}/>
    </View>
  </InnerCard>
);

type ClosestAirportBoxProps = {
  departureAirportValid: boolean,
  departureAirport: {airportName: string}
}

const ClosestAirportBox = ({ departureAirportValid, departureAirport }: ClosestAirportBoxProps) => (
  <InnerCard 
    extraStyles={[styles.closestAirportTextBox, !departureAirportValid && { borderColor: theme.RED_ERROR }]}
  >
    <TripText 
      text={departureAirport.airportName}
      style={styles.useClosestAirportNameText}
    />
  </InnerCard>
);

export const DepartureCard = () => {
  const dispatch = useAppDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [useClosestAirport, setUseClosestAirport] = useState(false);

  const departureAirport = useAppSelector(selectDepartureAirport());
  const departureAirportValid = useAppSelector(selectDepartureAirportValidity());

  const onUseClosestAirportPress = () => {
    if (useClosestAirport) {
      setUseClosestAirport(false);
      const airportObj = {
        airportName: FCLocalized('Search'),
        iataCode: '',
      };
      dispatch(setDepartureAirport(airportObj));
    } else {
      Geolocation.getCurrentPosition(
        async (pos) => {
          const latLong = {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          };
          const { payload } = await dispatch(fetchNearestAirport(latLong));
          const airportObj = {
            airportName: payload.name,
            iataCode: payload.iataCode,
            cityName: payload.address.cityName,
          };
          dispatch(setDepartureAirport(airportObj));
          dispatch(setDepartureAirportValidity(true));
        },
        (error) => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
        { enableHighAccuracy: true }
      );
      setUseClosestAirport(true);
      
    }
  };

  const btnBackground = useClosestAirport ? theme.PRIMARY_COLOR : theme.WHITE;
  return (
    <Card>
      <TripText text={FCLocalized('Departure airport')} style={styles.title}/>
      <InnerCard 
        pressDisabled={false} 
        onPress={onUseClosestAirportPress}
        extraStyles={{ backgroundColor: btnBackground }}
      >
        <TripText text={FCLocalized('Use closest airport?')} style={{ alignSelf: 'center' }}/>
      </InnerCard>
      {useClosestAirport
        ?
        <ClosestAirportBox 
          departureAirportValid={departureAirportValid}
          departureAirport={departureAirport} />
        :
        <DepartureSearchBox 
          setModalVisible={setModalVisible}
          departureAirportValid={departureAirportValid}
          departureAirport={departureAirport}/>
      }
      <DepartureSearchModal 
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
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
  useClosestAirportNameText: {
    alignSelf: 'center',
    fontSize: 18
  },
  closestAirportTextBox: {
    marginBottom: 0,
  },
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