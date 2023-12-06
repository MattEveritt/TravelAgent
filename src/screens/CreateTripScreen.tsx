import { StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import {
  DestinationCard,
  ScreenContainer,
  TripButton,
  TravellersCard,
  TransportCard,
  DatesCard,
  TripModal,
  AccomodationCard,
} from '../components';
import { DepartureCard } from '../components/createTripComponents';
import { FCLocalized } from '../localization/FCLocalized';
import {
  clearTripBookingState,
  saveTrip,
  selectBookingTrip,
  selectIsLoggedIn,
  setDatesValidity,
  setDepartureAirportValidity,
  setDestinationsValidity,
  setTravellersValidity,
  useAppDispatch,
  useAppSelector,
} from '../redux';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { bookingFormValidator } from '../utils/bookingFormValidator';

export const CreateTripScreen = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const dispatch = useAppDispatch();

  const tripObj = useAppSelector(selectBookingTrip());
  const isLoggedIn = useAppSelector(selectIsLoggedIn());

  const [modalVisible, setModalVisible] = useState(false);

  const onOkPress = () => {};

  const onCancelPress = () => {
    setModalVisible(false);
  };

  const handleOnCreatePress = async () => {
    const validation = bookingFormValidator(tripObj, isLoggedIn);
    if (
      !validation.dates ||
      !validation.destinations ||
      !validation.departureAirport ||
      !validation.travellers
    ) {
      dispatch(setDatesValidity(validation.dates));
      dispatch(setDestinationsValidity(validation.destinations));
      dispatch(setDepartureAirportValidity(validation.departureAirport));
      dispatch(setTravellersValidity(validation.travellers));
      return null;
    }

    if (isLoggedIn) {
      const savedTrip = await dispatch(saveTrip(tripObj));
      dispatch(clearTripBookingState());
      navigation.navigate('Booking navigator', {
        screen: 'Flights',
        params: { tripId: savedTrip.payload.id },
      });
    } else {
      dispatch(saveTrip(tripObj));
      dispatch(clearTripBookingState());
      navigation.navigate('Booking navigator');
    }
  };

  const onBackPressExtra = () => {
    dispatch(clearTripBookingState());
  };

  return (
    <ScreenContainer
      headerType="BackHeader"
      headerTitle={FCLocalized('Create trip')}
      extraStyles={styles.screenContainerStyle}
      onBackPressExtra={onBackPressExtra}>
      <ScrollView
        style={styles.scrollViewContainer}
        contentContainerStyle={styles.contentContainer}>
        <DepartureCard />
        <DatesCard />
        <DestinationCard />
        <TransportCard />
        <AccomodationCard />
        <TravellersCard />
        <TripButton
          title={FCLocalized('Create')}
          onPress={() => handleOnCreatePress()}
        />
      </ScrollView>
      <TripModal
        title={''}
        modalVisible={modalVisible}
        onOkPress={onOkPress}
        onCancelPress={onCancelPress}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  screenContainerStyle: {
    padding: 0,
  },
  scrollViewContainer: {
    flex: 1,
    padding: 16,
  },
  contentContainer: {
    margin: -16,
    padding: 16,
  },
});
