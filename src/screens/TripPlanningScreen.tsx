import React, { useState } from 'react';
import { ScrollView, StyleSheet, Dimensions } from 'react-native';
import { saveTrip, useAppDispatch } from '../redux';
import { DestinationSearchModal } from '../components/createTripComponents/DestinationSearchModal';
import { Trips, TripButton, ScreenContainer } from '../components';
import { FCLocalized } from '../localization/FCLocalized';
import { useNavigation, ParamListBase, NavigationProp } from '@react-navigation/native';

const windowHeight = Dimensions.get('window').height;
export const TripPlanningScreen = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const dispatch = useAppDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [destination, setDestination] = useState<string>('');

  const handleAddTrip = () => {
    navigation.navigate('CreateTripScreen');
  };

  const handleSaveTrip = () => {
    dispatch(saveTrip({ destination: destination }));
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
    marginBottom: -(windowHeight / 100 * 10),
  },
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingTop: 16,
    height: windowHeight + (windowHeight / 100 * 34),
  }
});
