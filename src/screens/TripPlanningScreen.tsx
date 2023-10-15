import React, {useState} from 'react';
import {Text, ScrollView, View, StyleSheet, Dimensions} from 'react-native';
import globalStyles from '../styles/globalStyles';
import {saveTrip, useAppDispatch} from '../redux';
import {DestinationSearchModal} from '../components/TripPlanning/DestinationSearchModal';
import {Trips, TripButton, ScreenContainer} from '../components';
import { FCLocalized } from '../localization/FCLocalized';
import { useNavigation } from '@react-navigation/native';

const windowHeight = Dimensions.get('window').height;
export const TripPlanningScreen = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [destination, setDestination] = useState<string>('');

  const handleAddTrip = () => {
    navigation.navigate('CreateTripScreen');
  };

  const handleSaveTrip = () => {
    dispatch(saveTrip({destination: destination}));
  };

  return (
    <ScreenContainer headerTitle={FCLocalized('Trips')}>
      <ScrollView 
        style={styles.scrollviewStyle} 
        keyboardShouldPersistTaps="always" 
        contentContainerStyle={styles.contentContainerStyle}
      >
        <Trips />
      </ScrollView>
      <TripButton
        title="Add new trip"
        onPress={handleAddTrip}
        iconName="plus-circle-outline"
        iconType="material-community"
      />
      <DestinationSearchModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        destination={destination}
        setDestination={setDestination}
        onPress={handleSaveTrip}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  scrollviewStyle: {
    marginTop: -16,
    marginHorizontal: -16,
    marginBottom: -80,
    paddingBottom: 100,
    height: windowHeight
  },
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingTop: 16,
    height: windowHeight
  }
});
