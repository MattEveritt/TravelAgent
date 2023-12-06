import { Alert, StyleSheet, View } from 'react-native';
import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { Card, InnerCard, TripText } from '../travelUI';
import { FCLocalized } from '../../localization/FCLocalized';
import {
  fetchClosestAirport,
  selectDepartureAirport,
  selectDepartureAirportValidity,
  setDepartureAirport,
  setDepartureAirportValidity,
  useAppDispatch,
  useAppSelector,
} from '../../redux';
import Geolocation from '@react-native-community/geolocation';
import { theme } from '../../styles/theme';
import { DepartureSearchModal } from './DepartureSearchModal';
import { Icon } from '@rneui/base';

type DepartureSearchBoxProps = {
  setErrorMessage: Dispatch<SetStateAction<string>>;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  departureAirportValid: boolean;
  departureAirport: { airportName: string };
};

const DepartureSearchBox: FC<DepartureSearchBoxProps> = ({
  setModalVisible,
  setErrorMessage,
  departureAirportValid,
  departureAirport,
}) => {
  const onPress = () => {
    setModalVisible(true);
    setErrorMessage('');
  };

  return (
    <InnerCard
      onPress={onPress}
      pressDisabled={false}
      extraStyles={[
        styles.singleContainer,
        !departureAirportValid && { borderColor: theme.RED_ERROR },
      ]}>
      <Icon name="search" containerStyle={styles.iconContainer} />
      <View style={styles.titleContainer}>
        <TripText
          text={departureAirport.airportName}
          style={styles.singleSearchText}
        />
      </View>
    </InnerCard>
  );
};

type ClosestAirportBoxProps = {
  departureAirportValid: boolean;
  departureAirport: { airportName: string };
};

const ClosestAirportBox = ({
  departureAirportValid,
  departureAirport,
}: ClosestAirportBoxProps) => (
  <InnerCard
    extraStyles={[
      styles.closestAirportTextBox,
      !departureAirportValid && { borderColor: theme.RED_ERROR },
    ]}>
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
  const [errorMessage, setErrorMessage] = useState('');

  const departureAirport = useAppSelector(selectDepartureAirport());
  const departureAirportValid = useAppSelector(
    selectDepartureAirportValidity(),
  );

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
        async pos => {
          const latLong = {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          };
          const { payload } = await dispatch(fetchClosestAirport(latLong));
          if (payload === 'error') {
            setUseClosestAirport(false);
            setErrorMessage(
              FCLocalized(
                'Error fetching closest airport, search for your departure airport instead.',
              ),
            );
          } else {
            const airportObj = {
              airportName: payload.name,
              iataCode: payload.iataCode,
              cityName: payload.address.cityName,
            };
            dispatch(setDepartureAirport(airportObj));
            dispatch(setDepartureAirportValidity(true));
          }
        },
        error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
        { enableHighAccuracy: true },
      );
      setUseClosestAirport(true);
    }
  };

  const btnBackground = useClosestAirport ? theme.PRIMARY_COLOR : theme.WHITE;
  return (
    <Card>
      <TripText text={FCLocalized('Departure airport')} style={styles.title} />
      <InnerCard
        pressDisabled={false}
        onPress={onUseClosestAirportPress}
        extraStyles={{ backgroundColor: btnBackground }}>
        <TripText
          text={FCLocalized('Use closest airport?')}
          style={styles.useClosestAirportNameText}
        />
      </InnerCard>
      {useClosestAirport ? (
        <ClosestAirportBox
          departureAirportValid={departureAirportValid}
          departureAirport={departureAirport}
        />
      ) : (
        <DepartureSearchBox
          setModalVisible={setModalVisible}
          setErrorMessage={setErrorMessage}
          departureAirportValid={departureAirportValid}
          departureAirport={departureAirport}
        />
      )}
      {errorMessage && (
        <TripText text={errorMessage} style={styles.errorText} />
      )}
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
    marginBottom: 3,
  },
  useClosestAirportNameText: {
    alignSelf: 'center',
    fontSize: 18,
  },
  closestAirportTextBox: {
    marginBottom: 0,
  },
  searchText: {
    fontSize: 16,
    textAlign: 'center',
    width: '85%',
  },
  titleContainer: {
    width: '90%',
  },
  iconContainer: {
    width: '10%',
  },
  dateTextContainer: {
    width: '5%',
    paddingTop: 10,
  },
  dateText: {
    fontSize: 18,
  },
  dateSelectorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    marginBottom: 0,
    marginRight: 16,
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
    width: '90%',
  },
  errorText: {
    color: theme.RED_ERROR,
  },
});
