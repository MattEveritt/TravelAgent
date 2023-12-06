import React, { FC, useEffect, useState } from 'react';
import { deleteTrip, getDestinationImg } from '../../redux';
import { View, StyleSheet } from 'react-native';
import { useAppDispatch } from '../../redux';
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';
import { Card, TripModal, TripText } from '../travelUI';
import { Icon, Image } from '@rneui/base';
import { theme } from '../../styles/theme';
import { FCLocalized } from '../../localization/FCLocalized';
import Config from 'react-native-config';
import { getTripCardTitle } from './utils/getTripCardTitle';

export interface Trip {
  id: string;
  destinations: {
    googlePlaceId: string;
    destination: string;
  }[];
  dates: {
    startDate: string;
    untilDate: string;
  }[];
  flights: {};
  travellers: [];
}

export const TripCard: FC<{ trip: Trip }> = ({ trip }) => {
  const dispatch = useAppDispatch();
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const [photoReference, setPhotoReference] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const getGooglePhotoReference = async () => {
      const res = await dispatch(
        getDestinationImg(trip.destinations[0].googlePlaceId),
      );
      setPhotoReference(res.payload);
    };
    getGooglePhotoReference();
  }, [dispatch, trip.destinations, trip.id]);

  const onOkPress = () => {
    dispatch(deleteTrip(trip.id));
    setModalVisible(false);
  };

  const onCancelPress = () => {
    setModalVisible(false);
  };

  const handleCardPress = () => {
    navigation.navigate('Booking navigator', {
      screen: 'Flights',
      params: { tripId: trip.id },
    });
  };

  const destinationNameArray = trip.destinations[0].destination.split(', ');
  const countryName = destinationNameArray[destinationNameArray.length - 1];

  return (
    <Card onPress={handleCardPress} pressDisabled={false}>
      <Image
        style={styles.imgStyles}
        source={{
          uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${Config.GOOGLE_API_KEY}`,
        }}
      />
      <View style={styles.cardInfoContainer}>
        <View style={styles.destinationColumn}>
          {trip.destinations.map((destination: {}, i: number) => (
            <TripText
              key={i}
              text={getTripCardTitle(trip, i)}
              style={styles.cityNameText}
            />
          ))}
          <View style={styles.countryName}>
            <TripText text={countryName} style={styles.countryNameText} />
            <Icon
              name="map-marker-outline"
              type="material-community"
              color={theme.PRIMARY_COLOR}
            />
          </View>
          <TripText
            text={`${trip.travellers.length} ${
              trip.travellers.length > 1
                ? FCLocalized('Travellers')
                : FCLocalized('Traveller')
            }`}
            style={styles.travellerText}
          />
        </View>
        <Icon
          name="trash-can-outline"
          type="material-community"
          color={theme.BLACK}
          style={{ padding: 10 }}
          containerStyle={styles.iconContainer}
          size={35}
          onPress={() => setModalVisible(true)}
        />
      </View>
      <TripModal
        isAlert
        modalVisible={modalVisible}
        title={FCLocalized('Delete trip')}
        alertText={FCLocalized('Are you sure you want to delete this trip?')}
        onOkPress={onOkPress}
        onCancelPress={onCancelPress}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    borderWidth: 1.5,
    borderRadius: 30,
    height: 60,
    alignSelf: 'flex-end',
  },
  container: {
    width: '100%',
  },
  imgStyles: {
    height: 200,
    width: '100%',
    borderRadius: 8,
    marginBottom: 10,
  },
  TripButtonContainer: {
    backgroundColor: '#FFD580',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 10,
  },
  countryNameText: {
    color: theme.PRIMARY_COLOR,
    fontSize: 18,
  },
  countryName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  destinationColumn: {
    flexDirection: 'column',
  },
  cityNameText: {
    fontSize: 18,
    marginBottom: 10,
  },
  travellerText: {
    fontSize: 18,
    color: theme.BLACK,
    marginTop: 10,
  },
  cardInfoContainer: { flexDirection: 'row', justifyContent: 'space-between' },
});
