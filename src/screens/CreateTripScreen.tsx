import { StyleSheet, ScrollView } from 'react-native';
import React, { useRef, useState } from 'react';
import { 
  DestinationCard, 
  ScreenContainer, 
  TripButton, 
  TravellersCard,
  TransportCard,
  DatesCard,
  TripModal,
} from '../components';
import { DepartureCard } from '../components/createTripComponents';
import { FCLocalized } from '../localization/FCLocalized';
import { 
  clearTripBookingState,
  saveTrip,
  selectBookingTrip,
  setDatesValidity,
  setDepartureAirportValidity,
  setDestinationsValidity,
  useAppDispatch,
  useAppSelector 
} from '../redux';
import { useNavigation } from '@react-navigation/native';
import { bookingFormValidator } from '../utils/bookingFormValidator';

export const CreateTripScreen = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const tripObj = useAppSelector(selectBookingTrip());

  const [modalVisible, setModalVisible] = useState(false);

  const onOkPress = () => {};

  const onCancelPress = () => {
    setModalVisible(false);
  };

  const handleOnCreatePress = () => {
    const validation = bookingFormValidator(tripObj);
    if (!validation.dates || !validation.destinations || !validation.departureAirport) {
      dispatch(setDatesValidity(validation.dates));
      dispatch(setDestinationsValidity(validation.destinations));
      dispatch(setDepartureAirportValidity(validation.departureAirport));
      console.log(validation);
      return null;
    }
    dispatch(saveTrip(tripObj));
    dispatch(clearTripBookingState());

    navigation.navigate('Booking navigator');
  };

  const onBackPressExtra = () => {
    dispatch(clearTripBookingState());
  };

  return (
    <ScreenContainer 
      headerType='BackHeader' 
      headerTitle={FCLocalized('Create trip')}
      extraStyles={styles.screenContainerStyle}
      onBackPressExtra={onBackPressExtra}
    >
      <ScrollView style={styles.scrollViewContainer} contentContainerStyle={styles.contentContainer}>
        <DepartureCard />
        <DatesCard />
        <DestinationCard />
        <TravellersCard />
        <TransportCard />
        <TripButton title={FCLocalized('Create')} onPress={() => handleOnCreatePress()}/>
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
    padding: 0
  },
  scrollViewContainer: {
    flex: 1, 
    padding: 16
  },
  contentContainer: {
    margin: -16, 
    padding: 16
  },
});