import React from 'react';
import { ScrollView, StyleSheet, Dimensions, View } from 'react-native';
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

export const TripsScreen = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const isLoggedIn = useAppSelector(selectIsLoggedIn());

  const handleAddTrip = () => {
    navigation.navigate('CreateTripScreen');
  };

  return (
    <ScreenContainer headerTitle={FCLocalized('Trips')}>
      <View style={styles.pageContentContainer}>
        {isLoggedIn ? (
          <ScrollView
            style={styles.scrollviewStyle}
            keyboardShouldPersistTaps="always"
            contentContainerStyle={styles.scrollViewContentContainerStyle}>
            <Trips />
          </ScrollView>
        ) : (
          <View style={styles.requestUserLoginWrapper}>
            <RequestUserLogin
              text={FCLocalized(
                'You will see all of your saved tripsa and travellers, booking will be much quicker',
              )}
            />
          </View>
        )}
      </View>
      <TripButton
        title={FCLocalized('Add Trip')}
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
  pageContentContainer: {
    flex: 1,
  },
  scrollViewContentContainerStyle: {
    paddingHorizontal: 16,
    paddingTop: 16,
    height: windowHeight + (windowHeight / 100) * 34,
  },
  requestUserLoginWrapper: {
    flex: 1,
  },
});
