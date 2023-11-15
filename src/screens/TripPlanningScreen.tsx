import React from 'react';
import { ScrollView, StyleSheet, Dimensions } from 'react-native';
import {
  Trips,
  RequestUserLogin,
  TripButton,
  ScreenContainer,
} from '../components';
import { FCLocalized } from '../localization/FCLocalized';
import {
  useNavigation,
  ParamListBase,
  NavigationProp,
} from '@react-navigation/native';
import { selectIsLoggedIn, useAppSelector } from '../redux';

const windowHeight = Dimensions.get('window').height;
export const TripPlanningScreen = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const isLoggedIn = useAppSelector(selectIsLoggedIn());

  const handleAddTrip = () => {
    navigation.navigate('CreateTripScreen');
  };

  return (
    <ScreenContainer headerTitle={FCLocalized('Trips')}>
      <ScrollView
        style={styles.scrollviewStyle}
        keyboardShouldPersistTaps="always"
        contentContainerStyle={styles.contentContainerStyle}>
        {isLoggedIn ? (
          <Trips />
        ) : (
          <RequestUserLogin
            text={FCLocalized(
              'You will see all of your saved trips and be able to save a new trip to continue with later',
            )}
          />
        )}
      </ScrollView>
      <TripButton
        title="Add new trip"
        onPress={handleAddTrip}
        iconName="plus-circle-outline"
        iconType="material-community"
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  scrollviewStyle: {
    marginTop: -16,
    marginHorizontal: -16,
    marginBottom: -((windowHeight / 100) * 10),
  },
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingTop: 16,
    height: windowHeight + (windowHeight / 100) * 34,
  },
});
